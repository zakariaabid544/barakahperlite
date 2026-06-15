import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminPageContent } from "@/components/pages/TranslatedPages";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Espace admin futur",
  description:
    "Base du futur tableau de bord Barakah Perlite pour gestion des devis, catalogue produit, clients, CRM et contenus multilingues.",
  path: "/admin",
});

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );

  if (!session) {
    redirect("/portal/login?next=/admin");
  }

  if (session.role !== "admin") {
    redirect("/portal/client");
  }

  return <AdminPageContent />;
}
