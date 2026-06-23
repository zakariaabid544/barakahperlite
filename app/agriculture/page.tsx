import { AgriculturePageContent } from "@/components/pages/TranslatedPages";
import { getActiveHeroSlides, getHeroSettings } from "@/lib/hero-slides/server";
import { HERO_AGRICULTURE_PAGE } from "@/lib/hero-slides/types";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite agricole et horticole",
  description:
    "Perlite agricole au Maroc pour hydroponie, serres, pépinières, germination, horticulture et amélioration des sols.",
  path: "/agriculture",
  keywords: ["perlite agricole Maroc", "perlite horticole", "substrat hydroponique"],
});

// ISR: regenerate at most every 60s; admin changes purge instantly via
// revalidatePath("/agriculture") in the hero-slides API routes.
export const revalidate = 60;

export default async function AgriculturePage() {
  const [heroSlides, heroSettings] = await Promise.all([
    getActiveHeroSlides(HERO_AGRICULTURE_PAGE),
    getHeroSettings(HERO_AGRICULTURE_PAGE),
  ]);
  return (
    <AgriculturePageContent heroSlides={heroSlides} heroSettings={heroSettings} />
  );
}
