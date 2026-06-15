import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminContentPrototype } from "@/components/pages/AdminContentPrototype";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Prototype administration contenu",
  description:
    "Prototype UI interne non fonctionnel pour future gestion de galerie, expériences, collaborations et contenus Barakah Perlite.",
  path: "/admin/content",
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default async function AdminContentPage() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );

  if (!session) {
    redirect("/portal/login?next=/admin/content");
  }

  if (session.role !== "admin") {
    redirect("/portal/client");
  }

  return <AdminContentPrototype />;
}
