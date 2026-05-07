import { LegalPageContent } from "@/components/pages/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Conditions générales",
  description:
    "Conditions générales Barakah Perlite pour le site barakahperlite.com: utilisation du site, informations produits, données techniques, devis et responsabilité.",
  path: "/terms",
  keywords: ["conditions générales Barakah Perlite", "barakahperlite.com"],
});

export default function TermsPage() {
  return <LegalPageContent page="terms" />;
}
