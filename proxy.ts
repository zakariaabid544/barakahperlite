import { NextRequest, NextResponse } from "next/server";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";

function getPrivatePageAccess(pathname: string) {
  if (pathname.startsWith("/portal/analytics") || pathname.startsWith("/portal/admin")) {
    return "admin";
  }

  if (pathname.startsWith("/portal/client")) {
    return "authenticated";
  }

  return null;
}

function getPrivateApiAccess(pathname: string) {
  if (pathname.startsWith("/api/analytics/summary")) {
    return "admin";
  }

  return null;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pageAccess = getPrivatePageAccess(pathname);
  const apiAccess = getPrivateApiAccess(pathname);

  if (!pageAccess && !apiAccess) {
    return NextResponse.next();
  }

  // TODO: Extend this guard for RBAC and multi-admin/client roles when the portal grows.
  const token = request.cookies.get(adminSessionCookieName)?.value;
  const session = await verifySessionToken(token);
  const requiredAccess = pageAccess || apiAccess;

  if (session && requiredAccess !== "admin") {
    return NextResponse.next();
  }

  if (session?.role === "admin") {
    return NextResponse.next();
  }

  if (apiAccess) {
    return NextResponse.json(
      { ok: false, message: session ? "Forbidden." : "Unauthorized." },
      { status: session ? 403 : 401 },
    );
  }

  if (session) {
    const clientUrl = request.nextUrl.clone();
    clientUrl.pathname = "/portal/client";
    clientUrl.search = "";

    return NextResponse.redirect(clientUrl);
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
    "/portal/client/:path*",
    "/api/analytics/summary/:path*",
  ],
};
