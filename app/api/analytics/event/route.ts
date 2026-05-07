import { NextRequest, NextResponse } from "next/server";
import {
  analyticsSessionCookieName,
  normalizeAnalyticsPayload,
  recordAnalyticsEvent,
} from "@/lib/analytics/server";

export const runtime = "nodejs";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitWindowMs = 60 * 1000;
const maxEventsPerWindow = 120;
const rateLimitStore = new Map<string, RateLimitEntry>();

async function hashRateLimitKey(value: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function isRateLimited(request: NextRequest) {
  const sessionCookie = request.cookies.get(analyticsSessionCookieName)?.value;
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0] || "";
  const keySource = sessionCookie || forwardedFor || "anonymous";
  // Raw IP addresses are used only transiently to build a hash for abuse control.
  // They are never stored in the analytics database.
  const key = await hashRateLimitKey(keySource);
  const now = Date.now();
  const current = rateLimitStore.get(key);

  // TODO: Replace this in-memory guard with durable Redis/edge rate limiting for production scale.
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxEventsPerWindow;
}

export async function POST(request: NextRequest) {
  if (await isRateLimited(request)) {
    return NextResponse.json(
      { ok: false, message: "Too many analytics events." },
      { status: 429 },
    );
  }

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
