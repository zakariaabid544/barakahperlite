"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedParticles } from "@/components/ui/AnimatedParticles";
import { MoroccanPatternBackground } from "@/components/ui/MoroccanPatternBackground";
import { contact } from "@/data/site";
import { useI18n } from "@/lib/i18n";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: "commercial" | false;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions = false,
}: PageHeaderProps) {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-32 sm:px-6 md:pb-18 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(22,200,95,0.2),transparent_34%),radial-gradient(circle_at_4%_72%,rgba(214,184,122,0.12),transparent_28%),linear-gradient(135deg,rgba(2,8,6,0.99),rgba(5,11,9,0.94),rgba(6,59,36,0.6))]" />
      <MoroccanPatternBackground density="medium" />
      <AnimatedParticles />
      <div data-premium-reveal className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-7 h-0.5 w-12 bg-agritech-emerald" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-atlas-sand md:mb-5 md:tracking-[0.34em]">
            {eyebrow}
          </p>
          <h1 className="text-balance font-display text-[2.35rem] font-bold leading-[1.07] tracking-[-0.025em] text-perlite-50 md:text-5xl md:leading-[1.06] lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-silver-200/75 md:mt-6 md:text-lg md:leading-8">
            {description}
          </p>
          {actions ? (
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="bp-glass-cta bp-glass-cta--primary w-full"
              >
                {t.common.quoteRequest}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bp-glass-cta bp-glass-cta--secondary w-full"
              >
                {t.contactPage.whatsapp}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
