"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProductHero } from "@/components/sections/ProductHero";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { StatsSection } from "@/components/sections/StatsSection";
import { Hero } from "@/components/sections/Hero";
import { ApplicationCard } from "@/components/ui/ApplicationCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechnicalSpecsTable } from "@/components/ui/TechnicalSpecsTable";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { technicalDocuments } from "@/data/documents";
import { contact } from "@/data/site";
import { iconMap } from "@/lib/icon-map";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { IconKey, ProductDetailKey } from "@/types/i18n";

type FeatureLike = {
  title: string;
  description: string;
  icon: IconKey;
};

function featureProps(feature: FeatureLike) {
  return {
    title: feature.title,
    description: feature.description,
    icon: feature.icon,
  };
}

const detailVisualVariant: Record<
  ProductDetailKey,
  "mineral" | "factory" | "packaging"
> = {
  naturelle: "mineral",
  stable: "factory",
  technique: "packaging",
};

type VisualVariant = "mineral" | "greenhouse" | "factory" | "packaging" | "map";

export function HomePageContent() {
  const { t } = useI18n();

  return (
    <>
      <Hero />
      <StatsSection stats={t.home.stats} />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.why.eyebrow}
            title={t.home.why.title}
            description={t.home.why.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {t.home.why.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.applications.eyebrow}
            title={t.home.applications.title}
            description={t.home.applications.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.applications.map((application, index) => (
              <ApplicationCard
                key={application.title}
                {...featureProps(application)}
                href={application.href}
                accent={application.accent}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <SplitVisualSection
        visualTitle={t.home.origin.visualTitle}
        visualCaption={t.home.origin.visualCaption}
        visualVariant="factory"
      >
        <SectionTitle
          eyebrow={t.home.origin.eyebrow}
          title={t.home.origin.title}
          description={t.home.origin.description}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {t.home.origin.cards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glass"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                {card.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </SplitVisualSection>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.advantages.eyebrow}
            title={t.home.advantages.title}
            description={t.home.advantages.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.home.advantages.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.home.process.eyebrow}
            title={t.home.process.title}
            description={t.home.process.description}
          />
          <div className="mt-10">
            <ProcessTimeline steps={t.common.processSteps} />
          </div>
        </div>
      </section>

      <QuoteCTA title={t.home.cta.title} description={t.home.cta.description} />
    </>
  );
}

export function ProductPageContent() {
  const { t } = useI18n();

  return (
    <>
      <ProductHero />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={t.product.what.eyebrow}
              title={t.product.what.title}
              description={t.product.what.description}
            />
          </div>
          <VisualPanel
            title={t.product.what.visualTitle}
            caption={t.product.what.visualCaption}
            variant="mineral"
            className="min-h-[320px] lg:min-h-[360px]"
          />
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
          {t.product.what.facts.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex h-full min-h-[220px] cursor-pointer flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-agritech-emerald/55 hover:bg-white/[0.075] hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald md:min-h-[260px] md:p-8"
              >
                <div className="mb-5 flex items-center justify-between md:mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-atlas-sand/25 bg-basalt-950/70 text-atlas-sand transition group-hover:border-agritech-emerald/45 group-hover:text-agritech-emerald">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-silver-200/45 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-agritech-emerald"
                  />
                </div>
                <p className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {item.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-agritech-emerald">
                  {t.product.what.moreLabel}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <TechnicalProfileSection profile={t.product.technicalProfile} />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.product.benefits.eyebrow}
            title={t.product.benefits.title}
            description={t.product.benefits.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.product.benefits.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow={t.product.specs.eyebrow}
              title={t.product.specs.title}
              description={t.product.specs.description}
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={technicalDocuments.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-silver-200/80 transition hover:border-atlas-sand/45 hover:bg-white/[0.08] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.download}
              </a>
              <a
                href={technicalDocuments.msds}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-silver-200/80 transition hover:border-atlas-sand/45 hover:bg-white/[0.08] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.msdsDownload}
              </a>
            </div>
          </div>
          <TechnicalSpecsTable specs={t.technicalSpecs} />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={t.product.packaging.eyebrow}
              title={t.product.packaging.title}
              description={t.product.packaging.description}
            />
            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-glass">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                {t.product.packaging.formatsTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {t.product.packaging.formats.map((format) => (
                  <span
                    key={format}
                    className="rounded-full border border-agritech-emerald/25 bg-agritech-emerald/10 px-4 py-2 text-sm font-semibold text-agritech-emerald"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                {t.product.packaging.formatsNote}
              </p>
            </div>
          </div>
          <VisualPanel
            title={t.product.packaging.visualTitle}
            caption={t.product.packaging.visualCaption}
            variant="packaging"
          />
        </div>
        <div className="mx-auto mt-12 max-w-7xl lg:mt-14">
          <ProcessTimeline steps={t.common.processSteps} />
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}

export function ProductDetailPageContent({
  detailKey,
}: {
  detailKey: ProductDetailKey;
}) {
  const { t } = useI18n();
  const page = t.productDetails[detailKey];

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,10,8,0.97),rgba(20,24,19,0.9),rgba(6,59,36,0.58))]" />
        <div className="absolute inset-0 bg-perlite-radial opacity-65" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <Link
              href="/produit"
              className="mb-8 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-sm font-semibold text-silver-200/75 transition hover:border-atlas-sand/45 hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              {page.backLabel}
            </Link>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
              {page.hero.eyebrow}
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-perlite-50 md:text-5xl md:leading-[1.06] lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-7 text-silver-200/75 md:text-lg md:leading-8">
              {page.hero.description}
            </p>
          </div>
          <VisualPanel
            title={page.hero.visualTitle}
            caption={page.hero.visualCaption}
            variant={detailVisualVariant[detailKey]}
            className="min-h-[340px] lg:min-h-[380px]"
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={page.technical.eyebrow}
            title={page.technical.title}
            description={page.technical.description}
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {page.technical.points.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...featureProps(feature)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <DetailUseSection
        eyebrow={page.agriculture.eyebrow}
        title={page.agriculture.title}
        description={page.agriculture.description}
        useCases={page.agriculture.useCases}
        tone="emerald"
      />

      <DetailUseSection
        eyebrow={page.industry.eyebrow}
        title={page.industry.title}
        description={page.industry.description}
        useCases={page.industry.useCases}
        tone="sand"
      />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={page.specs.eyebrow}
              title={page.specs.title}
              description={page.specs.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={technicalDocuments.datasheet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-silver-200/80 transition hover:border-atlas-sand/45 hover:bg-white/[0.08] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.download}
              </a>
              <a
                href={technicalDocuments.msds}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.055] px-5 py-3 text-sm font-semibold text-silver-200/80 transition hover:border-atlas-sand/45 hover:bg-white/[0.08] hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-sand sm:w-fit"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {t.product.specs.msdsDownload}
              </a>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {page.specs.cards.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...featureProps(feature)}
                  index={index}
                />
              ))}
            </div>
          </div>
          <TechnicalSpecsTable specs={page.specs.rows} />
        </div>
      </section>

      {detailKey === "technique" ? (
        <>
          <TechnicalProfileSection profile={t.product.technicalProfile} />
          <FeatureGrid
            eyebrow={t.product.techniqueTrust.eyebrow}
            title={t.product.techniqueTrust.title}
            description={t.product.techniqueTrust.description}
            features={t.product.techniqueTrust.features}
            columns="lg:grid-cols-3"
          />
        </>
      ) : null}

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={page.comparisons.eyebrow}
            title={page.comparisons.title}
            description={page.comparisons.description}
          />
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {page.comparisons.cards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.035] p-5 shadow-glass backdrop-blur-xl md:p-7"
              >
                <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {card.title}
                </h3>
                <div className="mt-6 grid gap-3">
                  <ComparisonPoint label={card.leftLabel} body={card.left} muted />
                  <ComparisonPoint label={card.rightLabel} body={card.right} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={page.why.eyebrow}
            title={page.why.title}
            description={page.why.description}
            align="center"
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {page.why.cards.map((card, index) => (
              <article
                key={card.title}
                className="h-full rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl md:p-7"
              >
                <p className="mb-5 font-display text-4xl font-semibold text-white/10">
                  0{index + 1}
                </p>
                <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA title={page.cta.title} description={page.cta.description} />
    </>
  );
}

export function AgriculturePageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.agriculture.header} />

      <SplitVisualSection
        visualTitle={t.agriculture.intro.visualTitle}
        visualCaption={t.agriculture.intro.visualCaption}
        visualVariant="greenhouse"
      >
        <SectionTitle
          eyebrow={t.agriculture.intro.eyebrow}
          title={t.agriculture.intro.title}
          description={t.agriculture.intro.description}
        />
        <ul className="mt-8 grid gap-3 text-sm text-silver-200/75 sm:grid-cols-2">
          {t.agriculture.intro.checklist.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-agritech-emerald"
              />
              {item}
            </li>
          ))}
        </ul>
      </SplitVisualSection>

      <FeatureGrid
        eyebrow={t.agriculture.useCases.eyebrow}
        title={t.agriculture.useCases.title}
        description={t.agriculture.useCases.description}
        features={t.agriculture.useCases.features}
        columns="xl:grid-cols-3"
      />

      <FeatureGrid
        eyebrow={t.agriculture.benefits.eyebrow}
        title={t.agriculture.benefits.title}
        description={t.agriculture.benefits.description}
        features={t.agriculture.benefits.features}
      />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={t.agriculture.comparisons.eyebrow}
            title={t.agriculture.comparisons.title}
            description={t.agriculture.comparisons.description}
          />
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
            {t.agriculture.comparisons.cards.map((card, index) => (
              <article
                key={card.title}
                className="h-full rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.035] p-5 shadow-glass md:p-7"
              >
                <p className="mb-6 font-display text-4xl font-semibold text-white/10">
                  0{index + 1}
                </p>
                <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        title={t.agriculture.cta.title}
        description={t.agriculture.cta.description}
      />
    </>
  );
}

export function IndustryPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.industry.header} />

      <SplitVisualSection
        visualTitle={t.industry.intro.visualTitle}
        visualCaption={t.industry.intro.visualCaption}
        visualVariant="factory"
      >
        <SectionTitle
          eyebrow={t.industry.intro.eyebrow}
          title={t.industry.intro.title}
          description={t.industry.intro.description}
        />
        <div className="mt-8 grid gap-3">
          {t.industry.intro.checklist.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-silver-200/75"
            >
              <CheckCircle2
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-atlas-sand"
              />
              {item}
            </div>
          ))}
        </div>
      </SplitVisualSection>

      <FeatureGrid
        eyebrow={t.industry.domains.eyebrow}
        title={t.industry.domains.title}
        description={t.industry.domains.description}
        features={t.industry.domains.features}
      />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-atlas-sand">
              {t.industry.technical.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
              {t.industry.technical.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-silver-200/70 md:text-base">
              {t.industry.technical.description}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50"
            >
              {t.industry.technical.cta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <TechnicalSpecsTable specs={t.technicalSpecs} />
        </div>
      </section>

      <QuoteCTA
        title={t.industry.cta.title}
        description={t.industry.cta.description}
      />
    </>
  );
}

export function AboutPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.about.header} />

      <SplitVisualSection
        visualTitle={t.about.story.visualTitle}
        visualCaption={t.about.story.visualCaption}
        visualVariant="mineral"
      >
        <SectionTitle
          eyebrow={t.about.story.eyebrow}
          title={t.about.story.title}
          description={t.about.story.description}
        />
        <p className="mt-6 text-base leading-7 text-silver-200/70 md:text-lg md:leading-8">
          {t.about.story.body}
        </p>
      </SplitVisualSection>

      <FeatureGrid
        eyebrow={t.about.values.eyebrow}
        title={t.about.values.title}
        description={t.about.values.description}
        features={t.about.values.features}
      />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-5 md:grid-cols-3">
          {t.about.focusCards.map((item) => (
            <article
              key={item.title}
              className="h-full rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass md:p-7"
            >
              <h2 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}

export function ContactPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.contactPage.header} />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle
              eyebrow={t.contactPage.formIntro.eyebrow}
              title={t.contactPage.formIntro.title}
              description={t.contactPage.formIntro.description}
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="grid gap-5 self-start">
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl">
              <h2 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                {t.contactPage.detailsHeading}
              </h2>
              <div className="mt-6 grid gap-4 text-sm text-silver-200/75">
                <ContactLinks whatsappLabel={t.contactPage.whatsapp} />
              </div>
            </div>

            <VisualPanel
              title={t.contactPage.mapTitle}
              caption={t.contactPage.mapCaption}
              variant="map"
              className="min-h-[300px]"
            />
          </aside>
        </div>
      </section>
    </>
  );
}

export function AdminPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.admin.header} />
      <FeatureGrid features={t.admin.modules} title="" />
    </>
  );
}

export function ClientPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.client.header} />
      <FeatureGrid features={t.client.modules} title="" />
    </>
  );
}

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  features: readonly FeatureLike[];
  columns?: string;
};

type TechnicalDataRow = {
  label: string;
  value: string;
  note?: string;
};

type TechnicalDataGroup = {
  title: string;
  description: string;
  rows: readonly TechnicalDataRow[];
};

type TechnicalProfileData = {
  eyebrow: string;
  title: string;
  description: string;
  groups: readonly TechnicalDataGroup[];
};

type DetailUseCase = {
  title: string;
  description: string;
  metric: string;
};

type SplitVisualSectionProps = {
  children: ReactNode;
  visualTitle: string;
  visualCaption: string;
  visualVariant?: VisualVariant;
  visualClassName?: string;
  className?: string;
};

function SplitVisualSection({
  children,
  visualTitle,
  visualCaption,
  visualVariant = "mineral",
  visualClassName,
  className,
}: SplitVisualSectionProps) {
  return (
    <section
      className={cn("px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20", className)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="max-w-3xl">{children}</div>
        <VisualPanel
          title={visualTitle}
          caption={visualCaption}
          variant={visualVariant}
          className={visualClassName}
        />
      </div>
    </section>
  );
}

function TechnicalProfileSection({ profile }: { profile: TechnicalProfileData }) {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow={profile.eyebrow}
          title={profile.title}
          description={profile.description}
        />
        <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
          {profile.groups.map((group) => (
            <TechnicalDataCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalDataCard({ group }: { group: TechnicalDataGroup }) {
  return (
    <article className="h-full overflow-hidden rounded-lg border border-white/10 bg-basalt-900/70 shadow-glass backdrop-blur-xl">
      <div className="border-b border-white/10 bg-white/[0.045] p-5 md:p-6">
        <h3 className="font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
          {group.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
          {group.description}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <tbody className="divide-y divide-white/10">
            {group.rows.map((row) => (
              <tr key={row.label} className="align-top transition hover:bg-white/[0.035]">
                <th
                  scope="row"
                  className="w-[42%] px-5 py-4 text-start font-semibold text-perlite-50"
                >
                  {row.label}
                </th>
                <td className="px-5 py-4 text-start">
                  <span className="block font-semibold text-silver-100">
                    {row.value}
                  </span>
                  {row.note ? (
                    <span className="mt-1 block text-xs leading-6 text-silver-200/55">
                      {row.note}
                    </span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function DetailUseSection({
  eyebrow,
  title,
  description,
  useCases,
  tone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  useCases: readonly DetailUseCase[];
  tone: "emerald" | "sand";
}) {
  const accent =
    tone === "emerald" ? "text-agritech-emerald" : "text-atlas-sand";
  const border =
    tone === "emerald" ? "border-agritech-emerald/25" : "border-atlas-sand/25";

  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className={cn(
                "h-full rounded-lg border bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl md:p-7",
                border,
              )}
            >
              <p className={cn("text-xs font-semibold uppercase tracking-[0.24em]", accent)}>
                {item.metric}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-silver-200/70 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonPoint({
  label,
  body,
  muted = false,
}: {
  label: string;
  body: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-md border px-4 py-4",
        muted
          ? "border-white/10 bg-basalt-950/45"
          : "border-agritech-emerald/25 bg-agritech-emerald/10",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          muted ? "text-silver-200/45" : "text-agritech-emerald",
        )}
      >
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-silver-200/75 md:text-base">
        {body}
      </p>
    </div>
  );
}

function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  columns = "xl:grid-cols-4",
}: FeatureGridProps) {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {title ? (
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        ) : null}
        <div
          className={cn(
            "grid items-stretch gap-5 md:grid-cols-2",
            title ? "mt-10" : "mt-0",
            columns,
          )}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...featureProps(feature)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLinks({ whatsappLabel }: { whatsappLabel: string }) {
  return (
    <>
      {contact.emails.map((email) => (
        <a
          key={email}
          href={`mailto:${email}`}
          className="flex gap-3 transition hover:text-atlas-sand"
        >
          <MailIcon />
          {email}
        </a>
      ))}
      {contact.phones.map((phone) => (
        <a
          key={phone.number}
          href={`tel:${phone.number.replace(/[^\d+]/g, "")}`}
          className="flex gap-3 transition hover:text-atlas-sand"
        >
          <PhoneIcon />
          <span>
            <span className="block text-perlite-50/85">{phone.name}</span>
            <span>{phone.number}</span>
          </span>
        </a>
      ))}
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex gap-3 transition hover:text-atlas-sand"
      >
        <WhatsAppMiniIcon />
        {whatsappLabel}
      </a>
      <a
        href={contact.websiteUrl}
        target="_blank"
        rel="noreferrer"
        className="flex gap-3 transition hover:text-atlas-sand"
      >
        <WebsiteIcon />
        {contact.website}
      </a>
      <p className="flex gap-3">
        <MapIcon />
        <span>
          {contact.address}
          <br />
          <span className="text-silver-200/50">{contact.factory}</span>
        </span>
      </p>
    </>
  );
}

function MailIcon() {
  return <Mail aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function PhoneIcon() {
  return <Phone aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function MapIcon() {
  return <MapPin aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function WebsiteIcon() {
  return <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-atlas-sand" />;
}

function WhatsAppMiniIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-agritech-emerald"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.03 3.2c-7.06 0-12.8 5.67-12.8 12.64 0 2.23.59 4.41 1.72 6.33L3.12 28.8l6.82-1.79a12.95 12.95 0 0 0 6.09 1.52c7.06 0 12.8-5.67 12.8-12.65S23.09 3.2 16.03 3.2Zm0 23.18c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-4.04 1.06 1.08-3.89-.25-.4a10.38 10.38 0 0 1-1.57-5.58c0-5.79 4.79-10.5 10.67-10.5 5.89 0 10.68 4.71 10.68 10.5 0 5.8-4.79 10.54-10.68 10.54Zm5.86-7.88c-.32-.16-1.9-.93-2.2-1.03-.29-.11-.51-.16-.72.16-.21.31-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.57-.95-.84-1.6-1.88-1.79-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.72-.99-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.35 5.38 4.7.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.9-.77 2.17-1.51.27-.75.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}
