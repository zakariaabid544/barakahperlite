import { ProductDetailPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite stable, inerte et durable",
  description:
    "Perlite expansée chimiquement stable, stérile, non toxique et non décomposable pour substrats agricoles, hydroponie, construction, filtration et usages industriels.",
  path: "/produit/stable",
  keywords: [
    "perlite inerte",
    "perlite stérile",
    "perlite pH neutre",
    "perlite hydroponique stable",
  ],
});

export default function StablePerlitePage() {
  return <ProductDetailPageContent detailKey="stable" />;
}
