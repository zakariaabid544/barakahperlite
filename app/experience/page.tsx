import { ExperiencePageContent } from "@/components/pages/ExperiencePage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Expérience terrain et collaborations",
  description:
    "Expériences, collaborations, essais agricoles et applications industrielles autour de la perlite Barakah pour clients marocains et internationaux.",
  path: "/experience",
  keywords: ["perlite agricole Maroc", "substrat perlite", "perlite industrielle"],
});

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
