"use client";

import { ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function GalleryPageContent() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader {...t.gallery.header} />
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {t.gallery.categories.map((category) => (
              <span
                key={category}
                className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-atlas-sand"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.gallery.items.map((item, index) => (
              <article
                key={`${item.category}-${item.title}`}
                className={cn(
                  "group relative flex min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glass transition duration-300 hover:-translate-y-1 hover:border-agritech-emerald/40 hover:bg-white/[0.065]",
                  index === 0 && "md:col-span-2",
                )}
              >
                {/* TODO: Replace this placeholder with real Barakah Perlite photography for the selected gallery category. */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(250,248,239,0.18),transparent_28%),linear-gradient(135deg,rgba(6,59,36,0.72),rgba(8,10,8,0.9)_58%,rgba(189,141,77,0.22))]" />
                <div className="absolute inset-0 moroccan-pattern opacity-[0.08]" />
                <div className="relative z-10 mt-auto">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-basalt-950/70 text-atlas-sand">
                    <ImageIcon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-atlas-sand">
                    {item.category}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-perlite-50 md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-silver-200/72 md:text-base">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
