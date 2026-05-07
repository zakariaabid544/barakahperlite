import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PortalLoginPage } from "@/components/pages/PortalLoginPage";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Portail admin",
  robots: { index: false, follow: false },
};

function getSafeNextPath(value: string | string[] | undefined) {
  const nextPath = Array.isArray(value) ? value[0] : value;
  if (
    nextPath &&
    (nextPath.startsWith("/portal/analytics") ||
      nextPath.startsWith("/portal/admin"))
  ) {
    return nextPath;
  }

  return "/portal/analytics";
}

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string | string[] }>;
}) {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );
  const params = searchParams ? await searchParams : undefined;
  const nextPath = getSafeNextPath(params?.next);

  if (session) redirect(nextPath);

  return <PortalLoginPage nextPath={nextPath} />;
}
