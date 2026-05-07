import { createMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";

export const metadata = createMetadata({
  title: "Perlite marocaine agricole et industrielle",
  description:
    "Barakah Perlite transforme une ressource minérale naturelle en substrat premium pour agriculture, hydroponie, horticulture, construction, filtration et industrie au Maroc.",
  path: "/",
});

export default function HomePage() {
  // Temporary redirect: the homepage content stays in the codebase until the public home is finalized.
  redirect("/produit");
}
