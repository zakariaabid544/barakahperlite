import { GreenSpacePageContent } from "@/components/pages/TranslatedPages";
import { getActiveHeroSlides, getHeroSettings } from "@/lib/hero-slides/server";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite pour espaces verts",
  description:
    "Perlite expansée Barakah pour jardins, pépinières, espaces verts, sols urbains, terrains sportifs et substrats paysagers au Maroc.",
  path: "/green-space",
  keywords: [
    "perlite espaces verts",
    "perlite jardinage",
    "substrat paysager",
    "perlite pépinière",
  ],
});

export const revalidate = 60;

export default async function GreenSpacePage() {
  const [heroSlides, heroSettings] = await Promise.all([
    getActiveHeroSlides("green-space"),
    getHeroSettings("green-space"),
  ]);
  return (
    <GreenSpacePageContent heroSlides={heroSlides} heroSettings={heroSettings} />
  );
}
