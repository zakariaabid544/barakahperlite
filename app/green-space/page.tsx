import { GreenSpacePageContent } from "@/components/pages/TranslatedPages";
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

export default function GreenSpacePage() {
  return <GreenSpacePageContent />;
}
