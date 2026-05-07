import { ProductPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Produit perlite expansée",
  description:
    "Découvrez la perlite expansée Barakah Perlite: roche volcanique naturelle, légère, stérile, inerte, pH neutre, excellente aération et rétention d’eau.",
  path: "/produit",
  keywords: ["perlite expansée Maroc", "fiche technique perlite"],
});

export default function ProductPage() {
  return <ProductPageContent />;
}
