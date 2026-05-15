"use client";

import Link from "next/link";
import { ArrowRight, FileText, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { contact } from "@/data/site";
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
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <Reveal
        data-premium-reveal
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[0.65rem] border border-white/10 bg-[radial-gradient(circle_at_85%_15%,rgba(22,200,95,0.18),transparent_32%),linear-gradient(135deg,#020806,#07110E_52%,#050B09)] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.36)] md:p-12"
      >
        <MoroccanPatternBackground density="medium" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              {t.common.quoteRequest}
            </p>
            <h2 className="max-w-3xl font-display text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-perlite-50 md:text-5xl md:leading-[1.06]">
              {resolvedTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-silver-200/75 md:mt-5 md:text-lg md:leading-8">
              {resolvedDescription}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="bp-glass-cta bp-glass-cta--primary text-sm"
            >
              <FileText aria-hidden="true" className="h-4 w-4" />
              {t.common.quoteRequest}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-glass-cta bp-glass-cta--secondary text-sm"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {t.contactPage.whatsapp}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
