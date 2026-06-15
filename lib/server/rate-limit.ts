import "server-only";

import { Ratelimit, type Duration } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

type RateLimitRule = {
  limit: number;
  message: string;
  prefix: string;
  window: Duration;
};

type RateLimitOptions = {
  includeIp?: boolean;
  keyParts?: Array<string | null | undefined>;
};

export const rateLimitRules = {
  loginIp: {
    limit: 20,
    window: "10 m",
    prefix: "barakah:login:ip",
    message: "Too many login attempts. Please try again later.",
  },
  loginAccount: {
    limit: 5,
    window: "10 m",
    prefix: "barakah:login:account",
    message: "Too many login attempts. Please try again later.",
  },
  forgotPasswordIp: {
    limit: 5,
    window: "1 h",
    prefix: "barakah:forgot-password:ip",
    message: "Too many password reset requests. Please try again later.",
  },
  forgotPasswordEmail: {
    limit: 3,
    window: "1 h",
    prefix: "barakah:forgot-password:email",
    message: "Too many password reset requests. Please try again later.",
  },
  resetPassword: {
    limit: 10,
    window: "15 m",
    prefix: "barakah:reset-password",
    message: "Too many password reset attempts. Please try again later.",
  },
  contact: {
    limit: 5,
    window: "1 h",
    prefix: "barakah:contact",
    message: "Too many contact requests. Please try again later.",
  },
  quote: {
    limit: 5,
    window: "1 h",
    prefix: "barakah:quote",
    message: "Too many quote requests. Please try again later.",
  },
  analyticsEvent: {
    limit: 120,
    window: "1 m",
    prefix: "barakah:analytics:event",
    message: "Too many analytics events. Please try again later.",
  },
} satisfies Record<string, RateLimitRule>;

let redisClient: Redis | null | undefined;
let warnedMissingConfig = false;
const rateLimiters = new Map<string, Ratelimit>();

function getRedisClient() {
  if (redisClient !== undefined) return redisClient;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    redisClient = null;
    return redisClient;
  }

  redisClient = new Redis({ url, token });
  return redisClient;
}

function getRateLimiter(rule: RateLimitRule) {
  const redis = getRedisClient();
  if (!redis) return null;

  const existing = rateLimiters.get(rule.prefix);
  if (existing) return existing;

  const limiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(rule.limit, rule.window),
    prefix: rule.prefix,
    analytics: true,
    timeout: 1500,
  });

  rateLimiters.set(rule.prefix, limiter);
  return limiter;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") || "";
  const forwardedIp = forwardedFor.split(",")[0]?.trim();

  return (
    forwardedIp ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    ""
  );
}

function cleanKeyPart(value: string | null | undefined) {
  return value?.trim().toLowerCase().slice(0, 160) || "";
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

async function buildIdentifier(
  request: Request,
  rule: RateLimitRule,
  options: RateLimitOptions,
) {
  const includeIp = options.includeIp ?? true;
  const parts = [rule.prefix];

  if (includeIp) {
    const ip = getClientIp(request);
    const fallback = [
      request.headers.get("user-agent") || "unknown-agent",
      request.headers.get("accept-language") || "unknown-language",
    ].join("|");

    parts.push(ip ? `ip:${ip}` : `fallback:${fallback}`);
  }

  options.keyParts
    ?.map(cleanKeyPart)
    .filter(Boolean)
    .forEach((part) => parts.push(`key:${part}`));

  if (parts.length === 1) {
    parts.push("global");
  }

  return sha256(parts.join("|"));
}

function rateLimitResponse(rule: RateLimitRule, result: Awaited<ReturnType<Ratelimit["limit"]>>) {
  const retryAfterSeconds = Math.max(
    1,
    Math.ceil((result.reset - Date.now()) / 1000),
  );

  return NextResponse.json(
    { ok: false, message: rule.message },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
        "X-RateLimit-Limit": String(result.limit),
        "X-RateLimit-Remaining": String(result.remaining),
        "X-RateLimit-Reset": String(result.reset),
      },
    },
  );
}

export async function enforceRateLimit(
  request: Request,
  rule: RateLimitRule,
  options: RateLimitOptions = {},
) {
  const limiter = getRateLimiter(rule);

  if (!limiter) {
    if (!warnedMissingConfig) {
      console.warn(
        "Rate limiting is disabled because Upstash Redis environment variables are not configured.",
      );
      warnedMissingConfig = true;
    }

    return null;
  }

  try {
    const ip = getClientIp(request);
    const result = await limiter.limit(await buildIdentifier(request, rule, options), {
      ip: ip || undefined,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    void result.pending.catch((error) => {
      console.error("Rate limit analytics failed", error);
    });

    if (!result.success) {
      return rateLimitResponse(rule, result);
    }
  } catch (error) {
    console.error("Rate limit check failed", error);
  }

  return null;
}
