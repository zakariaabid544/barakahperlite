import { AdminPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Espace admin futur",
  description:
    "Base du futur tableau de bord Barakah Perlite pour gestion des devis, catalogue produit, clients, CRM et contenus multilingues.",
  path: "/admin",
});

export default function AdminPage() {
  return <AdminPageContent />;
}
