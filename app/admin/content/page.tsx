import { AdminContentPrototype } from "@/components/pages/AdminContentPrototype";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Prototype administration contenu",
  description:
    "Prototype UI interne non fonctionnel pour future gestion de galerie, expériences, collaborations et contenus Barakah Perlite.",
  path: "/admin/content",
  noIndex: true,
});

export default function AdminContentPage() {
  return <AdminContentPrototype />;
}
