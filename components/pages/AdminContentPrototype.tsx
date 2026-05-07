"use client";

import { Lock, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// Admin route location: app/admin/content/page.tsx exposes /admin/content.
// Current structure: that route renders this component as an internal UI prototype.
// Current behavior: mockup only, no real authentication, no database and no writes.
// Public exposure: /admin/content is intentionally not linked in navbar, footer or sitemap.
// App conversion check: this Next.js App Router project is easy to evolve into a mobile-first app because pages are component-based, content is centralized in i18n dictionaries and API routes already exist for future contact/quote workflows.
// Best future path: ship as a PWA first, then consider React Native / Expo if native device APIs, app-store distribution or offline field workflows become core.
// Reusable parts: translations, brand/layout components, forms, route handlers and shared content structures.
// Missing for app scalability: real auth/session handling, protected middleware, database schema, upload storage, offline caching, push notifications and hardened admin/client APIs.

export function AdminContentPrototype() {
  const { t } = useI18n();

  return (
    <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-atlas-sand">
          {t.adminContent.eyebrow}
        </p>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.055] p-7 shadow-glass md:p-8">
            {/* TODO: Replace this mockup with real server-side authentication, protected middleware and admin role authorization. Do not implement a weak frontend-only password gate. */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-atlas-sand/25 bg-basalt-950/70 text-atlas-sand">
              <Lock aria-hidden="true" className="h-5 w-5" />
            </div>
            <h1 className="font-display text-3xl font-semibold leading-tight text-perlite-50 md:text-4xl">
              {t.adminContent.title}
            </h1>
            <p className="mt-5 text-sm leading-7 text-silver-200/72 md:text-base">
              {t.adminContent.description}
            </p>
            <div className="mt-7 rounded-lg border border-atlas-sand/20 bg-atlas-sand/10 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-atlas-sand"
                />
                <p className="text-sm leading-7 text-silver-100/78">
                  {t.adminContent.securityNote}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-basalt-950/60 p-5">
              <h2 className="font-display text-xl font-semibold text-perlite-50 md:text-2xl">
                {t.adminContent.login.title}
              </h2>
              <div className="mt-5 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-silver-200/75">
                  {t.adminContent.login.email}
                  <input
                    disabled
                    type="email"
                    placeholder="admin@example.com"
                    className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-silver-200/55 outline-none"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-silver-200/75">
                  {t.adminContent.login.password}
                  <input
                    disabled
                    type="password"
                    placeholder="••••••••"
                    className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-silver-200/55 outline-none"
                  />
                </label>
                <button
                  type="button"
                  disabled
                  className="rounded-md bg-silver-200/20 px-4 py-3 text-sm font-semibold text-silver-200/50"
                >
                  {t.adminContent.login.button}
                </button>
              </div>
            </div>
          </section>

          <section className="grid gap-5">
            {/* TODO: Connect database integration, image upload system, API protection and real CRUD only after the route is server-protected. */}
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glass">
              <h2 className="font-display text-2xl font-semibold text-perlite-50 md:text-3xl">
                {t.adminContent.dashboard.title}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {t.adminContent.dashboard.stats.map((stat, index) => (
                  <div
                    key={stat}
                    className="rounded-md border border-white/10 bg-basalt-950/55 p-4"
                  >
                    <p className="text-2xl font-semibold text-agritech-emerald">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-silver-200/60">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {t.adminContent.managers.map((manager) => (
                <article
                  key={manager.title}
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-glass"
                >
                  <h3 className="font-display text-xl font-semibold text-perlite-50 md:text-2xl">
                    {manager.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-silver-200/70 md:text-base">
                    {manager.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {manager.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-atlas-sand"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
