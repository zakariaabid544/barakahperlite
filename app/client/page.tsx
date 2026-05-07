import { ClientPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portail client futur",
  description:
    "Base du futur portail client Barakah Perlite pour devis, commandes, fiches techniques, documents et support.",
  path: "/client",
});

export default function ClientPage() {
  return <ClientPageContent />;
}
