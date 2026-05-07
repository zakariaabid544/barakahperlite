import { HomePageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Perlite marocaine agricole et industrielle",
  description:
    "Barakah Perlite transforme une ressource minérale naturelle en substrat premium pour agriculture, hydroponie, horticulture, construction, filtration et industrie au Maroc.",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
