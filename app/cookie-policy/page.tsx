import { LegalPageContent } from "@/components/pages/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Politique cookies",
  description:
    "Politique cookies Barakah Perlite pour le site barakahperlite.com: cookies essentiels, analytics éventuels, services tiers et contrôle utilisateur.",
  path: "/cookie-policy",
  keywords: ["politique cookies Barakah Perlite", "barakahperlite.com"],
});

export default function CookiePolicyPage() {
  return <LegalPageContent page="cookies" />;
}
