import { GalleryPageContent } from "@/components/pages/GalleryPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Galerie perlite, agriculture et industrie",
  description:
    "Galerie Barakah Perlite pour futures photos de perlite agricole, usine, applications industrielles, serres, produits et conditionnements au Maroc.",
  path: "/galerie",
  keywords: ["perlite Maroc", "perlite agricole", "perlite industrielle"],
});

export default function GaleriePage() {
  return <GalleryPageContent />;
}
