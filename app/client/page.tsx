import { createMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";

export const metadata = createMetadata({
  title: "Portail client futur",
  description:
    "Base du futur portail client Barakah Perlite pour devis, commandes, fiches techniques, documents et support.",
  path: "/client",
});

export default function ClientPage() {
  // Compatibility redirect: the public client entry point is the unified portal login.
  redirect("/portal/login");
}
