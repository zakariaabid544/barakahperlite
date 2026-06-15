import { NextResponse } from "next/server";
import { resetAdminPassword } from "@/lib/auth/password-reset";
import { enforceRateLimit, rateLimitRules } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const rateLimitResponse = await enforceRateLimit(
    request,
    rateLimitRules.resetPassword,
  );
  if (rateLimitResponse) return rateLimitResponse;

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid reset payload." },
      { status: 400 },
    );
  }

  const data = payload as Record<string, unknown>;
  const token = cleanString(data.token);
  const password = cleanString(data.password);

  if (!token || !password) {
    return NextResponse.json(
      { ok: false, message: "Token et mot de passe requis." },
      { status: 400 },
    );
  }

  const result = await resetAdminPassword(token, password);

  return NextResponse.json(
    { ok: result.ok, message: result.message },
    { status: result.ok ? 200 : result.message.includes("configured") ? 503 : 400 },
  );
}
