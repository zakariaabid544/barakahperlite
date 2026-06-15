import { NextResponse } from "next/server";
import {
  passwordResetGenericMessage,
  requestPasswordReset,
} from "@/lib/auth/password-reset";
import { enforceRateLimit, rateLimitRules } from "@/lib/server/rate-limit";
import { verifyTurnstileToken } from "@/lib/server/turnstile";

export const runtime = "nodejs";

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const ipLimitResponse = await enforceRateLimit(
    request,
    rateLimitRules.forgotPasswordIp,
  );
  if (ipLimitResponse) return ipLimitResponse;

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
  const turnstileResponse = await verifyTurnstileToken(
    cleanString(data.turnstileToken),
    request,
  );
  if (turnstileResponse) return turnstileResponse;

  const email = cleanString(data.email).toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Email invalide." },
      { status: 400 },
    );
  }

  // Always use a generic success response for existing/non-existing admins.
  const emailLimitResponse = await enforceRateLimit(
    request,
    rateLimitRules.forgotPasswordEmail,
    { includeIp: false, keyParts: [email] },
  );
  if (emailLimitResponse) return emailLimitResponse;

  try {
    const result = await requestPasswordReset(email, new URL(request.url).origin);
    const status = result.ok ? 200 : result.message.includes("configured") ? 503 : 500;

    return NextResponse.json(
      { ok: result.ok, message: result.ok ? passwordResetGenericMessage : result.message },
      { status },
    );
  } catch (error) {
    console.error("Password reset request failed", error);
    return NextResponse.json(
      { ok: false, message: "Email provider not configured." },
      { status: 503 },
    );
  }
}
