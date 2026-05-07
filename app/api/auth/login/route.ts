import { NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/auth/admin";
import {
  adminSessionCookieName,
  getSessionCookieOptions,
} from "@/lib/auth/session";

export const runtime = "nodejs";

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid login payload." },
      { status: 400 },
    );
  }

  const data = payload as Record<string, unknown>;
  const email = cleanString(data.email).toLowerCase();
  const password = cleanString(data.password);

  if (!email || !password) {
    return NextResponse.json(
      { ok: false, message: "Email and password are required." },
      { status: 400 },
    );
  }

  const result = await authenticateAdmin(email, password);
  if (!result.ok || !result.token) {
    const message = result.message || "Invalid email or password.";
    return NextResponse.json(
      { ok: false, message },
      { status: message.includes("configured") ? 503 : 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    adminSessionCookieName,
    result.token,
    getSessionCookieOptions(),
  );

  return response;
}
