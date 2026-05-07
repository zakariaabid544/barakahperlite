"use client";

import type { AnalyticsEventPayload } from "@/lib/analytics/types";

export function sendAnalyticsEvent(payload: AnalyticsEventPayload) {
  return fetch("/api/analytics/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // Analytics collection should never block public website interactions.
  });
}
