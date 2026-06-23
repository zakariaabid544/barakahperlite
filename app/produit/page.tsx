import { ProductPageContent } from "@/components/pages/TranslatedPages";
import { getActiveHeroSlides } from "@/lib/hero-slides/server";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite expansée marocaine",
  description:
    "Découvrez la perlite expansée Barakah Perlite pour agriculture, industrie et export: un produit naturel, léger, stable et disponible au Maroc.",
  path: "/produit",
  keywords: ["perlite expansée Maroc", "perlite agricole", "perlite industrielle"],
});

export const revalidate = 60;

export default async function ProductPage() {
  const heroSlides = await getActiveHeroSlides("produit");
  return <ProductPageContent heroSlides={heroSlides} />;
}
