import "server-only";

import { AnalyticsEventType, DeviceType } from "@/lib/generated/prisma/enums";
import { getPrisma } from "@/lib/db";
import type {
  AnalyticsDashboardData,
  AnalyticsEventPayload,
  AnalyticsMetricRow,
} from "@/lib/analytics/types";

export const analyticsVisitorCookieName = "barakah_visitor_id";
export const analyticsSessionCookieName = "barakah_session_id";

type CookieToSet = {
  name: string;
  value: string;
  options: {
    httpOnly: boolean;
    secure: boolean;
    sameSite: "lax";
    path: string;
    maxAge: number;
  };
};

const analyticsEventTypes = new Set<string>(Object.values(AnalyticsEventType));
const maxMetadataEntries = 12;

function getCookieValue(request: Request, name: string) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookie = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : "";
}

function cleanString(value: unknown, maxLength = 240) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function cleanRoute(value: unknown, fallback: string) {
  const route = cleanString(value, 320) || fallback;
  if (!route.startsWith("/")) return `/${route}`;
  return route;
}

function getRequestRoute(request: Request) {
  try {
    const url = new URL(request.url);
    return `${url.pathname}${url.search}`;
  } catch {
    return "/";
  }
}

function cleanMetadata(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;

  const entries = Object.entries(value as Record<string, unknown>)
    .slice(0, maxMetadataEntries)
    .flatMap(([key, entryValue]) => {
      if (
        typeof entryValue === "string" ||
        typeof entryValue === "number" ||
        typeof entryValue === "boolean" ||
        entryValue === null
      ) {
        return [[cleanString(key, 60), entryValue] as const];
      }
      return [];
    })
    .filter(([key]) => key);

  return entries.length ? Object.fromEntries(entries) : undefined;
}

export function normalizeAnalyticsPayload(
  payload: unknown,
  request: Request,
): AnalyticsEventPayload | null {
  if (!payload || typeof payload !== "object") return null;
  const rawPayload = payload as Record<string, unknown>;
  const type = cleanString(rawPayload.type, 60);

  if (!analyticsEventTypes.has(type)) return null;

  return {
    type: type as AnalyticsEventPayload["type"],
    route: cleanRoute(rawPayload.route, getRequestRoute(request)),
    label: cleanString(rawPayload.label, 140) || undefined,
    target: cleanString(rawPayload.target, 320) || undefined,
    referrer: cleanString(rawPayload.referrer, 500) || undefined,
    metadata: cleanMetadata(rawPayload.metadata),
  };
}

function parseSourceDomain(referrer?: string | null) {
  if (!referrer) return "direct";

  try {
    const url = new URL(referrer);
    return url.hostname.replace(/^www\./, "") || "direct";
  } catch {
    return "direct";
  }
}

function getGeo(request: Request) {
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country") ||
    "";
  const rawCity =
    request.headers.get("x-vercel-ip-city") ||
    request.headers.get("x-city") ||
    "";

  return {
    country: cleanString(country, 80) || undefined,
    city: rawCity ? decodeURIComponent(cleanString(rawCity, 120)) : undefined,
  };
}

function getDeviceType(userAgent: string) {
  const value = userAgent.toLowerCase();
  if (!value) return DeviceType.UNKNOWN;
  if (/ipad|tablet|kindle|playbook|silk/.test(value)) return DeviceType.TABLET;
  if (/mobile|iphone|ipod|android.*mobile|windows phone/.test(value)) {
    return DeviceType.MOBILE;
  }
  return DeviceType.DESKTOP;
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export async function recordAnalyticsEvent(
  request: Request,
  payload: AnalyticsEventPayload,
) {
  const prisma = getPrisma();
  if (!prisma) {
    return {
      ok: false,
      skipped: true,
      message: "Analytics database not configured.",
      cookies: [] as CookieToSet[],
    };
  }

  const now = new Date();
  const route = payload.route || getRequestRoute(request);
  const visitorCookie = getCookieValue(request, analyticsVisitorCookieName);
  const sessionCookie = getCookieValue(request, analyticsSessionCookieName);
  const anonymousId = visitorCookie || crypto.randomUUID();
  const sessionId = sessionCookie || crypto.randomUUID();
  const referrer =
    payload.referrer ||
    request.headers.get("referer") ||
    request.headers.get("referrer") ||
    "";
  const sourceDomain = parseSourceDomain(referrer);
  const userAgent = request.headers.get("user-agent") || "";
  const deviceType = getDeviceType(userAgent);
  const userAgentHash = userAgent ? await sha256(userAgent) : undefined;
  const geo = getGeo(request);

  const visitor = await prisma.analyticsVisitor.upsert({
    where: { anonymousId },
    update: {
      lastSeenAt: now,
      country: geo.country,
      city: geo.city,
      deviceType,
    },
    create: {
      anonymousId,
      country: geo.country,
      city: geo.city,
      deviceType,
    },
  });

  const session = await prisma.analyticsSession.upsert({
    where: { sessionId },
    update: {
      lastSeenAt: now,
      referrer: referrer || undefined,
      sourceDomain,
      country: geo.country,
      city: geo.city,
      deviceType,
      userAgentHash,
    },
    create: {
      sessionId,
      visitorId: visitor.id,
      referrer: referrer || undefined,
      sourceDomain,
      country: geo.country,
      city: geo.city,
      deviceType,
      userAgentHash,
    },
  });

  await prisma.analyticsEvent.create({
    data: {
      type: payload.type,
      route,
      label: payload.label,
      target: payload.target,
      metadata: payload.metadata,
      visitorId: visitor.id,
      sessionId: session.id,
      referrer: referrer || undefined,
      sourceDomain,
      country: geo.country,
      city: geo.city,
      deviceType,
    },
  });

  return {
    ok: true,
    skipped: false,
    cookies: [
      {
        name: analyticsVisitorCookieName,
        value: anonymousId,
        options: cookieOptions(60 * 60 * 24 * 30),
      },
      {
        name: analyticsSessionCookieName,
        value: sessionId,
        options: cookieOptions(60 * 30),
      },
    ] satisfies CookieToSet[],
  };
}

function emptyDashboardData(configured: boolean): AnalyticsDashboardData {
  return {
    configured,
    generatedAt: new Date().toISOString(),
    kpis: {
      visitsToday: 0,
      visits7Days: 0,
      visits30Days: 0,
      uniqueVisitors30Days: 0,
      registrationStarts: 0,
      completedRegistrations: 0,
      conversionRate: 0,
    },
    mostVisitedPages: [],
    trafficSources: [],
    locations: [],
    deviceBreakdown: [],
    buttonClicks: [],
    pdfDownloads: [],
    funnel: [],
  };
}

function countBy<T>(items: T[], getKey: (item: T) => string) {
  const map = new Map<string, number>();
  items.forEach((item) => {
    const key = getKey(item);
    map.set(key, (map.get(key) || 0) + 1);
  });

  return Array.from(map.entries())
    .sort((left, right) => right[1] - left[1])
    .map(([label, value]) => ({ label, value }));
}

function topRows(rows: AnalyticsMetricRow[], limit = 8) {
  return rows.slice(0, limit);
}

export async function getAnalyticsDashboardData(): Promise<AnalyticsDashboardData> {
  const prisma = getPrisma();
  if (!prisma) return emptyDashboardData(false);

  const now = new Date();
  const start30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const start7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const startToday = new Date(now);
  startToday.setHours(0, 0, 0, 0);

  const events = await prisma.analyticsEvent.findMany({
    where: { occurredAt: { gte: start30 } },
    orderBy: { occurredAt: "desc" },
    take: 10000,
  });

  const pageViews = events.filter((event) => event.type === AnalyticsEventType.PAGE_VIEW);
  const visitsToday = pageViews.filter((event) => event.occurredAt >= startToday).length;
  const visits7Days = pageViews.filter((event) => event.occurredAt >= start7).length;
  const uniqueVisitors30Days = new Set(
    pageViews.map((event) => event.visitorId).filter(Boolean),
  ).size;
  const registrationStarts = events.filter(
    (event) => event.type === AnalyticsEventType.REGISTRATION_START,
  ).length;
  const completedRegistrations = events.filter(
    (event) => event.type === AnalyticsEventType.REGISTRATION_COMPLETE,
  ).length;
  const conversionRate =
    registrationStarts > 0
      ? Math.round((completedRegistrations / registrationStarts) * 1000) / 10
      : 0;

  const ctaEvents = events.filter(
    (event) =>
      event.type === AnalyticsEventType.CTA_CLICK ||
      event.type === AnalyticsEventType.LOGIN_CLICK,
  );
  const formEvents = events.filter(
    (event) => event.type === AnalyticsEventType.FORM_SUBMISSION,
  );
  const pdfEvents = events.filter(
    (event) => event.type === AnalyticsEventType.PDF_DOWNLOAD,
  );

  return {
    configured: true,
    generatedAt: now.toISOString(),
    kpis: {
      visitsToday,
      visits7Days,
      visits30Days: pageViews.length,
      uniqueVisitors30Days,
      registrationStarts,
      completedRegistrations,
      conversionRate,
    },
    mostVisitedPages: topRows(countBy(pageViews, (event) => event.route || "/")),
    trafficSources: topRows(
      countBy(pageViews, (event) => event.sourceDomain || "direct"),
    ),
    locations: topRows(
      countBy(pageViews, (event) => {
        const country = event.country || "Unknown";
        return event.city ? `${event.city}, ${country}` : country;
      }),
    ),
    deviceBreakdown: topRows(
      countBy(pageViews, (event) => event.deviceType || DeviceType.UNKNOWN),
    ),
    buttonClicks: topRows(
      countBy(ctaEvents, (event) => event.label || event.target || "cta_click"),
    ),
    pdfDownloads: topRows(
      countBy(pdfEvents, (event) => event.label || event.target || "pdf_download"),
    ),
    funnel: [
      {
        label: "WhatsApp clicks",
        value: ctaEvents.filter((event) => event.label === "whatsapp_click").length,
      },
      {
        label: "Quote CTA clicks",
        value: ctaEvents.filter((event) => event.label === "quote_request").length,
      },
      {
        label: "Contact CTA clicks",
        value: ctaEvents.filter((event) => event.label === "contact_cta").length,
      },
      { label: "PDF downloads", value: pdfEvents.length },
      { label: "Form submissions", value: formEvents.length },
      { label: "Registration starts", value: registrationStarts },
      { label: "Completed registrations", value: completedRegistrations },
    ],
  };
}
