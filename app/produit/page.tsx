import { ProductPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite expansée marocaine",
  description:
    "Découvrez la perlite expansée Barakah Perlite pour agriculture, industrie et export: un produit naturel, léger, stable et disponible au Maroc.",
  path: "/produit",
  keywords: ["perlite expansée Maroc", "perlite agricole", "perlite industrielle"],
});

export default function ProductPage() {
  return <ProductPageContent />;
}
