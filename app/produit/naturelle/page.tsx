import { ProductDetailPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite naturelle volcanique",
  description:
    "Comprendre l’origine naturelle de la perlite: une roche volcanique transformée par expansion thermique pour l’agriculture, l’horticulture, l’isolation, la filtration et l’industrie.",
  path: "/produit/naturelle",
  keywords: [
    "perlite naturelle Maroc",
    "expansion thermique perlite",
    "perlite agricole naturelle",
    "perlite industrielle naturelle",
  ],
});

export default function NaturalPerlitePage() {
  return <ProductDetailPageContent detailKey="naturelle" />;
}
