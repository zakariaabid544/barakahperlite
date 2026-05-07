import type { AnalyticsEventType } from "@/lib/generated/prisma/enums";

export type PublicAnalyticsEventType = AnalyticsEventType;

export type AnalyticsEventPayload = {
  type: PublicAnalyticsEventType;
  route?: string;
  label?: string;
  target?: string;
  referrer?: string;
  metadata?: Record<string, string | number | boolean | null>;
};

export type AnalyticsKpis = {
  visitsToday: number;
  visits7Days: number;
  visits30Days: number;
  uniqueVisitors30Days: number;
  registrationStarts: number;
  completedRegistrations: number;
  conversionRate: number;
};

export type AnalyticsMetricRow = {
  label: string;
  value: number;
  detail?: string;
};

export type AnalyticsDashboardData = {
  configured: boolean;
  generatedAt: string;
  kpis: AnalyticsKpis;
  mostVisitedPages: AnalyticsMetricRow[];
  trafficSources: AnalyticsMetricRow[];
  locations: AnalyticsMetricRow[];
  deviceBreakdown: AnalyticsMetricRow[];
  buttonClicks: AnalyticsMetricRow[];
  pdfDownloads: AnalyticsMetricRow[];
  funnel: AnalyticsMetricRow[];
};
