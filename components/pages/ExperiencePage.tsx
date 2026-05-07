"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { useI18n } from "@/lib/i18n";

export function ExperiencePageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.experience.header} />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.experience.cards.map((card) => (
              <article
                key={card.title}
                className="group flex min-h-[280px] flex-col rounded-lg border border-white/10 bg-white/[0.055] p-7 shadow-glass transition duration-300 hover:-translate-y-1 hover:border-agritech-emerald/45 hover:bg-white/[0.075] md:p-8"
              >
                {/* TODO: Replace this structured placeholder with real collaboration, trial or customer-story content once approved. */}
                <div className="flex items-start justify-between gap-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                    {card.kicker}
                  </p>
                  <span className="rounded-md border border-agritech-emerald/20 bg-agritech-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-agritech-emerald">
                    {card.metric}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {card.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-silver-200/72 md:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(19,168,88,0.18),rgba(189,141,77,0.12),rgba(250,248,239,0.04))] p-7 shadow-glass md:p-8">
            <p className="max-w-3xl font-display text-2xl font-semibold leading-tight text-perlite-50 md:text-3xl">
              {t.experience.header.title}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-silver-200/72 md:text-base">
              {t.experience.header.description}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
            >
              {t.common.quoteRequest}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
