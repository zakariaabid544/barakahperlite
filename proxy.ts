import { NextRequest, NextResponse } from "next/server";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";

function isPrivatePage(pathname: string) {
  return pathname.startsWith("/portal/analytics") || pathname.startsWith("/portal/admin");
}

function isPrivateApi(pathname: string) {
  return pathname.startsWith("/api/analytics/summary");
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isPrivatePage(pathname) && !isPrivateApi(pathname)) {
    return NextResponse.next();
  }

  // TODO: Extend this guard for RBAC and multi-admin roles when the portal grows.
  const token = request.cookies.get(adminSessionCookieName)?.value;
  const session = await verifySessionToken(token);

  if (session) {
    return NextResponse.next();
  }

  if (isPrivateApi(pathname)) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized." },
      { status: 401 },
    );
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/portal/login";
  loginUrl.searchParams.set("next", `${pathname}${request.nextUrl.search}`);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/portal/analytics/:path*",
    "/portal/admin/:path*",
    "/api/analytics/summary/:path*",
  ],
};
