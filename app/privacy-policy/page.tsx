import { LegalPageContent } from "@/components/pages/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité Barakah Perlite pour le site barakahperlite.com: données collectées, demandes de devis, conservation, sécurité et contact.",
  path: "/privacy-policy",
  keywords: ["politique confidentialité Barakah Perlite", "barakahperlite.com"],
});

export default function PrivacyPolicyPage() {
  return <LegalPageContent page="privacy" />;
}
