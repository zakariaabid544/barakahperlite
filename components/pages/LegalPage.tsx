"use client";

import { PageHeader } from "@/components/sections/PageHeader";
import { useI18n } from "@/lib/i18n";

type LegalPageKey = "privacy" | "cookies" | "terms";

type LegalPageProps = {
  page: LegalPageKey;
};

export function LegalPageContent({ page }: LegalPageProps) {
  const { t } = useI18n();
  const content = t.legal[page];

  return (
    <>
      <PageHeader {...content.header} />

      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg border border-atlas-sand/25 bg-atlas-sand/[0.07] p-5 text-sm leading-7 text-silver-200/75">
            <p>
              <span className="font-semibold text-atlas-sand">
                {t.legal.updatedLabel}:
              </span>{" "}
              {t.legal.updatedValue}
            </p>
            {/* TODO: Have qualified legal counsel review and adapt the final legal copy before production publication. */}
            <p className="mt-3">{t.legal.reviewNotice}</p>
          </div>

          <div className="mt-8 grid gap-5">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-xl md:p-8"
              >
                <h2 className="font-display text-xl leading-tight text-perlite-50 md:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-silver-200/75 md:text-base md:leading-8">
                  {section.body}
                </p>
                {"bullets" in section && section.bullets ? (
                  <ul className="mt-5 grid gap-2 text-sm leading-7 text-silver-200/75 md:text-base">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-atlas-sand"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
