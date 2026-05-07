import { IndustryPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite industrielle",
  description:
    "Perlite industrielle au Maroc pour isolation, filtration, industrie chimique, haute température, absorption, cryogénie et granulats légers.",
  path: "/industrie",
  keywords: ["perlite industrielle Maroc", "isolation perlite", "filtration perlite"],
});

export default function IndustryPage() {
  return <IndustryPageContent />;
}
