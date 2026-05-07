import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAnalyticsDashboardData } from "@/lib/analytics/server";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );

  if (!session) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 },
    );
  }

  if (session.role !== "admin") {
    return NextResponse.json(
      { ok: false, message: "Forbidden." },
      { status: 403 },
    );
  }

  const data = await getAnalyticsDashboardData();
  return NextResponse.json({ ok: true, data });
}
