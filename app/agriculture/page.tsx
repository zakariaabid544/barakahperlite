import { AgriculturePageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite agricole et horticole",
  description:
    "Perlite agricole au Maroc pour hydroponie, serres, pépinières, germination, horticulture et amélioration des sols.",
  path: "/agriculture",
  keywords: ["perlite agricole Maroc", "perlite horticole", "substrat hydroponique"],
});

export default function AgriculturePage() {
  return <AgriculturePageContent />;
}
