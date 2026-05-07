"use client";

import Link from "next/link";
import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { useI18n } from "@/lib/i18n";

type QuoteCTAProps = {
  title?: string;
  description?: string;
};

export function QuoteCTA({
  title,
  description,
}: QuoteCTAProps) {
  const { t } = useI18n();
  const resolvedTitle = title ?? t.home.cta.title;
  const resolvedDescription = description ?? t.home.cta.description;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-basalt-900 via-basalt-850 to-agritech-deep/70 p-8 shadow-glow md:p-12">
        <MoroccanPatternBackground density="medium" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              {t.common.technicalQuote}
            </p>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.14] text-perlite-50 md:text-4xl md:leading-[1.1]">
              {resolvedTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-silver-200/75 md:text-lg md:leading-8">
              {resolvedDescription}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-basalt-950"
            >
              <FileText aria-hidden="true" className="h-4 w-4" />
              {t.common.quoteRequest}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/produit"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-perlite-50 transition hover:border-atlas-sand/50 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {t.common.productData}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
