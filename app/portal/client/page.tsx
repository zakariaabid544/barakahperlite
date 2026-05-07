import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowRight, FileText, Mail, PackageCheck } from "lucide-react";
import {
  adminSessionCookieName,
  verifySessionToken,
} from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portail client",
  robots: { index: false, follow: false },
};

export default async function Page() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(
    cookieStore.get(adminSessionCookieName)?.value,
  );

  if (!session) redirect("/portal/login?next=/portal/client");

  return (
    <main className="relative min-h-[78vh] overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(22,214,111,0.12),transparent_26%),linear-gradient(135deg,rgba(8,10,8,0.98),rgba(20,24,19,0.96))]" />
      <section className="relative mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
          Portail client
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <h1 className="font-display text-4xl leading-tight text-perlite-50 md:text-5xl">
              Votre espace Barakah Perlite
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-silver-200/70 md:text-lg">
              Bienvenue {session.email}. Cet espace est prêt pour accueillir les
              commandes, documents techniques, devis et suivis clients lors de la
              prochaine étape de développement.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
            >
              Contacter l’équipe
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: "Documents",
                text: "Fiches techniques, MSDS et fichiers commerciaux.",
                icon: FileText,
              },
              {
                title: "Devis",
                text: "Demandes, volumes, conditionnement et suivi.",
                icon: PackageCheck,
              },
              {
                title: "Assistance",
                text: "Échanges avec l’équipe commerciale et technique.",
                icon: Mail,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md border border-atlas-sand/25 bg-basalt-950/70 text-atlas-sand">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl text-perlite-50">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-silver-200/68">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
