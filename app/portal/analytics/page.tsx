import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AnalyticsDashboardPage } from "@/components/pages/AnalyticsDashboardPage";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";
import { getAnalyticsDashboardData } from "@/lib/analytics/server";
import { getHeroSettings, listHeroSlides } from "@/lib/hero-slides/server";

export const dynamic = "force-dynamic";

// Private admin route: intentionally excluded from navbar, footer, sitemap and robots public discovery.
export const metadata: Metadata = {
  title: "Analytics privées",
  robots: { index: false, follow: false },
};

export default async function Page() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );

  if (!session) redirect("/portal/login?next=/portal/analytics");
  if (session.role !== "admin") redirect("/portal/client");

  const [data, heroSlides, heroSettings] = await Promise.all([
    getAnalyticsDashboardData(),
    listHeroSlides(),
    getHeroSettings("agriculture"),
  ]);
  return (
    <AnalyticsDashboardPage
      data={data}
      heroSlides={heroSlides}
      heroSettings={heroSettings}
    />
  );
}
