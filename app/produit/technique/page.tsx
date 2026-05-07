import { ProductDetailPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite technique poreuse et légère",
  description:
    "Perlite expansée blanche, légère et hautement poreuse pour aération racinaire, drainage, rétention d’eau, isolation thermique, cryogénie et granulats légers.",
  path: "/produit/technique",
  keywords: [
    "perlite poreuse",
    "perlite légère",
    "granulométrie perlite",
    "perlite isolation thermique",
    "perlite cryogénie",
  ],
});

export default function TechnicalPerlitePage() {
  return <ProductDetailPageContent detailKey="technique" />;
}
