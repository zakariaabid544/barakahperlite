"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendAnalyticsEvent } from "@/lib/analytics/client";

function getLinkLabel(link: HTMLAnchorElement) {
  const href = link.href;
  const text = (link.textContent || "").toLowerCase();

  if (href.includes("wa.me") || href.includes("whatsapp")) return "whatsapp_click";
  if (href.includes("fiche-technique-perlite.pdf")) return "fiche_technique";
  if (href.includes("msds-perlite.pdf")) return "msds";
  if (href.includes("/contact")) {
    return text.includes("devis") || text.includes("quote")
      ? "quote_request"
      : "contact_cta";
  }
  if (href.includes("/portal/login")) return "login_click";

  return "";
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // TODO: Connect this tracker to a GDPR/cookie consent layer before adding optional analytics categories.
    if (!pathname || pathname.startsWith("/portal/analytics")) return;

    void sendAnalyticsEvent({
      type: "PAGE_VIEW",
      route: pathname,
      referrer: document.referrer,
    });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const label = getLinkLabel(link);
      if (!label) return;

      const payloadBase = {
        route: window.location.pathname,
        label,
        target: link.href,
      };

      if (label === "fiche_technique" || label === "msds") {
        void sendAnalyticsEvent({
          type: "PDF_DOWNLOAD",
          ...payloadBase,
        });
        void sendAnalyticsEvent({
          type: "CTA_CLICK",
          route: window.location.pathname,
          label: "download_cta",
          target: link.href,
          metadata: { document: label },
        });
        return;
      }

      void sendAnalyticsEvent({
        type: label === "login_click" ? "LOGIN_CLICK" : "CTA_CLICK",
        ...payloadBase,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
