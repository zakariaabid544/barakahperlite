import { ContactPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact et demande de devis",
  description:
    "Contactez Barakah Perlite pour une demande de devis perlite agricole, horticole, hydroponique ou industrielle au Maroc.",
  path: "/contact",
  keywords: ["devis perlite Maroc", "contact perlite agricole"],
});

export default function ContactPage() {
  return <ContactPageContent />;
}
