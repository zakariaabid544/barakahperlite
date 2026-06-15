import { NextRequest, NextResponse } from "next/server";
import {
  analyticsSessionCookieName,
  normalizeAnalyticsPayload,
  recordAnalyticsEvent,
} from "@/lib/analytics/server";
import { enforceRateLimit, rateLimitRules } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const rateLimitResponse = await enforceRateLimit(
    request,
    rateLimitRules.analyticsEvent,
    { keyParts: [request.cookies.get(analyticsSessionCookieName)?.value] },
  );
  if (rateLimitResponse) return rateLimitResponse;

  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid analytics payload." },
      { status: 400 },
    );
  }

  const payload = normalizeAnalyticsPayload(rawPayload, request);
  if (!payload) {
    return NextResponse.json(
      { ok: false, message: "Invalid analytics event." },
      { status: 400 },
    );
  }

  try {
    const result = await recordAnalyticsEvent(request, payload);
    const response = NextResponse.json(
      {
        ok: result.ok,
        skipped: result.skipped,
        message: result.message,
      },
      { status: result.skipped ? 202 : 200 },
    );

    result.cookies.forEach((cookie) => {
      response.cookies.set(cookie.name, cookie.value, cookie.options);
    });

    return response;
  } catch (error) {
    console.error("Analytics event failed", error);
    return NextResponse.json(
      { ok: false, message: "Analytics event could not be recorded." },
      { status: 500 },
    );
  }
}
