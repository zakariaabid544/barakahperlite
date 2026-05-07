import { AboutPageContent } from "@/components/pages/TranslatedPages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Barakah Perlite est une entreprise marocaine spécialisée dans la perlite naturelle pour agriculture, industrie, construction et filtration, avec une vision export durable.",
  path: "/a-propos",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
