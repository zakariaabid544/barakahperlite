"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Lock, Loader2 } from "lucide-react";
import { sendAnalyticsEvent } from "@/lib/analytics/client";

type PortalLoginPageProps = {
  nextPath: string;
};

export function PortalLoginPage({ nextPath }: PortalLoginPageProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    void sendAnalyticsEvent({
      type: "LOGIN_CLICK",
      route: "/portal/login",
      label: "portal_login_submit",
      target: "/portal/login",
    });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, nextPath }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        redirectTo?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Connexion impossible.");
      }

      router.replace(result.redirectTo || "/portal/client");
      router.refresh();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Connexion impossible.");
    }
  }

  return (
    <main className="relative min-h-[78vh] overflow-hidden px-4 py-24 sm:px-6 md:py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(22,214,111,0.12),transparent_26%),linear-gradient(135deg,rgba(8,10,8,0.98),rgba(20,24,19,0.96))]" />
      <div className="relative mx-auto grid max-w-5xl gap-8 md:gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
            Portail client
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[2.15rem] leading-[1.08] text-perlite-50 md:mt-5 md:text-5xl">
            Connexion au portail
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-silver-200/68 md:mt-5 md:text-lg md:leading-8">
            Accédez à votre espace Barakah Perlite avec une connexion sécurisée.
            Les identifiants sont vérifiés côté serveur avant ouverture du portail.
          </p>
        </section>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-glass backdrop-blur-xl md:p-6"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md border border-atlas-sand/25 bg-basalt-950/70 text-atlas-sand">
            <Lock aria-hidden="true" className="h-5 w-5" />
          </div>
          <div className="grid gap-4">
            <label className="grid gap-2" htmlFor="portal-email">
              <span className="text-sm font-medium text-perlite-50">Email</span>
              <input
                id="portal-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="username"
                className="h-12 rounded-md border border-white/10 bg-basalt-950/70 px-3 text-sm text-perlite-50 outline-none transition focus:border-agritech-emerald focus:ring-2 focus:ring-agritech-emerald/30"
              />
            </label>
            <label className="grid gap-2" htmlFor="portal-password">
              <span className="text-sm font-medium text-perlite-50">Mot de passe</span>
            </label>
            <div className="relative">
              <input
                id="portal-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                className="h-12 w-full rounded-md border border-white/10 bg-basalt-950/70 px-3 pr-12 text-sm text-perlite-50 outline-none transition focus:border-agritech-emerald focus:ring-2 focus:ring-agritech-emerald/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={
                  showPassword
                    ? "Masquer le mot de passe"
                    : "Afficher le mot de passe"
                }
                className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-silver-200/70 transition hover:bg-white/10 hover:text-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <Eye aria-hidden="true" className="h-4 w-4" />
                )}
              </button>
            </div>
            <Link
              href="/portal/forgot-password"
              className="text-sm font-medium text-atlas-sand transition hover:text-agritech-emerald"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {status === "error" ? (
            <p className="mt-4 rounded-md border border-atlas-copper/40 bg-atlas-clay/10 px-3 py-2 text-sm text-atlas-sand">
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            ) : null}
            Se connecter
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
