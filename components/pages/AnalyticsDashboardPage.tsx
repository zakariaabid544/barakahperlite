import { BarChart3, Download, FileText, Globe2, MousePointer2, Users } from "lucide-react";
import type { ReactNode } from "react";
import { LogoutButton } from "@/components/portal/LogoutButton";
import type {
  AnalyticsDashboardData,
  AnalyticsMetricRow,
} from "@/lib/analytics/types";

type AnalyticsDashboardPageProps = {
  data: AnalyticsDashboardData;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Casablanca",
  }).format(new Date(value));
}

function KpiCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="min-w-0 rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-atlas-sand sm:tracking-[0.22em]">
        {label}
      </p>
      <p className="mt-4 truncate font-display text-3xl leading-none text-perlite-50">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-silver-200/55">{detail}</p>
    </article>
  );
}

function MetricPanel({
  title,
  icon,
  rows,
  emptyLabel = "Aucune donnée réelle enregistrée.",
}: {
  title: string;
  icon: ReactNode;
  rows: AnalyticsMetricRow[];
  emptyLabel?: string;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-glass">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-xl text-perlite-50 md:text-2xl">{title}</h2>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-atlas-sand/20 text-atlas-sand">
          {icon}
        </span>
      </div>
      <div className="mt-5 overflow-hidden rounded-md border border-white/10">
        {rows.length ? (
          <div className="overflow-x-auto">
            <table className="min-w-[520px] text-left text-sm">
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={`${title}-${row.label}`}
                    className="border-b border-white/10 last:border-0"
                  >
                    <td
                      title={row.label}
                      className="max-w-[380px] truncate px-4 py-3 text-silver-200/72"
                    >
                      {row.label}
                    </td>
                    <td className="w-24 whitespace-nowrap px-4 py-3 text-right font-semibold text-perlite-50">
                      {formatNumber(row.value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="px-4 py-6 text-sm text-silver-200/50">{emptyLabel}</p>
        )}
      </div>
    </section>
  );
}

export function AnalyticsDashboardPage({ data }: AnalyticsDashboardPageProps) {
  const { kpis } = data;

  return (
    <main className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(22,214,111,0.1),transparent_24%),linear-gradient(180deg,rgba(8,10,8,0.98),rgba(8,10,8,1))]" />
      <div className="relative mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
              Portail admin privé
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-perlite-50 md:text-5xl">
              Analytics réelles
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-silver-200/62">
              Données collectées depuis les visites, téléchargements, clics CTA et
              formulaires du site Barakah Perlite. Aucune adresse IP brute n’est
              stockée.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="rounded-md border border-white/10 px-4 py-2 text-sm text-silver-200/55">
              MAJ {formatDate(data.generatedAt)}
            </p>
            <LogoutButton />
          </div>
        </header>

        {!data.configured ? (
          <section className="mt-8 rounded-lg border border-atlas-copper/40 bg-atlas-clay/10 p-5 text-sm leading-7 text-atlas-sand">
            DATABASE_URL n’est pas configuré. Le tableau de bord est prêt, mais les
            métriques réelles apparaîtront uniquement après connexion PostgreSQL et
            migration Prisma.
          </section>
        ) : null}

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiCard label="Visites aujourd’hui" value={formatNumber(kpis.visitsToday)} detail="Pages vues depuis minuit." />
          <KpiCard label="Visites 7 jours" value={formatNumber(kpis.visits7Days)} detail="Pages vues sur la semaine glissante." />
          <KpiCard label="Visites 30 jours" value={formatNumber(kpis.visits30Days)} detail="Base de lecture mensuelle." />
          <KpiCard label="Visiteurs uniques" value={formatNumber(kpis.uniqueVisitors30Days)} detail="Unicité anonyme sur 30 jours." />
          <KpiCard label="Débuts inscription" value={formatNumber(kpis.registrationStarts)} detail="Événements réels REGISTRATION_START." />
          <KpiCard label="Inscriptions complétées" value={formatNumber(kpis.completedRegistrations)} detail="Événements réels REGISTRATION_COMPLETE." />
          <KpiCard label="Conversion" value={`${kpis.conversionRate}%`} detail="Complétions / débuts inscription." />
          <KpiCard label="Statut" value={data.configured ? "Live" : "Config"} detail="Aucun compteur mock ou localStorage." />
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <MetricPanel
            title="Pages les plus visitées"
            icon={<FileText aria-hidden="true" className="h-5 w-5" />}
            rows={data.mostVisitedPages}
          />
          <MetricPanel
            title="Sources de trafic"
            icon={<Globe2 aria-hidden="true" className="h-5 w-5" />}
            rows={data.trafficSources}
          />
          <MetricPanel
            title="Pays et villes"
            icon={<Users aria-hidden="true" className="h-5 w-5" />}
            rows={data.locations}
          />
          <MetricPanel
            title="Mobile vs desktop"
            icon={<BarChart3 aria-hidden="true" className="h-5 w-5" />}
            rows={data.deviceBreakdown}
          />
          <MetricPanel
            title="Clics boutons"
            icon={<MousePointer2 aria-hidden="true" className="h-5 w-5" />}
            rows={data.buttonClicks}
          />
          <MetricPanel
            title="Téléchargements PDF"
            icon={<Download aria-hidden="true" className="h-5 w-5" />}
            rows={data.pdfDownloads}
          />
        </section>

        <section className="mt-5">
          <MetricPanel
            title="Funnel de conversion"
            icon={<BarChart3 aria-hidden="true" className="h-5 w-5" />}
            rows={data.funnel}
          />
        </section>
      </div>
    </main>
  );
}
