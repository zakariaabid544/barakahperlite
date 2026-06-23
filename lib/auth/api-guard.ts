import "server-only";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";

type AdminSession = NonNullable<Awaited<ReturnType<typeof verifySessionToken>>>;

type AdminGuardResult =
  | { ok: true; session: AdminSession }
  | { ok: false; response: NextResponse };

// Reuses the existing session/cookie system (same as proxy.ts and the
// analytics/summary route). Returns a ready-to-send JSON response on failure.
export async function requireAdmin(): Promise<AdminGuardResult> {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );

  if (!session) {
    return {
      ok: false,
      response: NextResponse.json(
        { ok: false, message: "Unauthorized." },
        { status: 401 },
      ),
    };
  }

  if (session.role !== "admin") {
    return {
      ok: false,
      response: NextResponse.json(
        { ok: false, message: "Forbidden." },
        { status: 403 },
      ),
    };
  }

  return { ok: true, session };
}
