import "server-only";

import { NextResponse } from "next/server";

const turnstileVerifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerificationResponse = {
  success?: boolean;
};

let warnedMissingTurnstileConfig = false;

function isProductionRuntime() {
  return process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production";
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const [firstIp] = forwardedFor.split(",");
    if (firstIp?.trim()) return firstIp.trim();
  }

  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    undefined
  );
}

function getTurnstileFailureResponse(status = 400) {
  return NextResponse.json(
    { ok: false, message: "Security verification failed." },
    { status },
  );
}

export async function verifyTurnstileToken(token: string, request: Request) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    if (!warnedMissingTurnstileConfig) {
      warnedMissingTurnstileConfig = true;
      console.warn("TURNSTILE_SECRET_KEY is not configured; skipping Turnstile verification.");
    }

    if (!isProductionRuntime()) {
      return null;
    }

    return NextResponse.json(
      { ok: false, message: "Security verification unavailable." },
      { status: 503 },
    );
  }

  if (!token) {
    return getTurnstileFailureResponse();
  }

  const body = new URLSearchParams({
    secret: secretKey,
    response: token,
  });
  const remoteIp = getClientIp(request);
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const response = await fetch(turnstileVerifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });
    const result = (await response.json()) as TurnstileVerificationResponse;

    if (response.ok && result.success) {
      return null;
    }
  } catch (error) {
    console.error("Turnstile verification failed", error);
    return NextResponse.json(
      { ok: false, message: "Security verification unavailable." },
      { status: 503 },
    );
  }

  return getTurnstileFailureResponse();
}
