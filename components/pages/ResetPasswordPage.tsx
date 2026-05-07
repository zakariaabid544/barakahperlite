"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, KeyRound, Loader2 } from "lucide-react";

type ResetPasswordPageProps = {
  token: string;
};

export function ResetPasswordPage({ token }: ResetPasswordPageProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Réinitialisation impossible.");
      }

      setStatus("success");
      setMessage("Mot de passe mis à jour. Redirection vers la connexion...");
      setTimeout(() => {
        router.replace("/portal/login");
      }, 1200);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Réinitialisation impossible.",
      );
    }
  }

  return (
    <main className="relative min-h-[78vh] overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(22,214,111,0.12),transparent_26%),linear-gradient(135deg,rgba(8,10,8,0.98),rgba(20,24,19,0.96))]" />
      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-atlas-sand">
            Portail client
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-perlite-50 md:text-5xl">
            Nouveau mot de passe
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-silver-200/68 md:text-lg">
            Choisissez un mot de passe robuste pour sécuriser l’accès à votre
            portail Barakah Perlite.
          </p>
        </section>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md border border-atlas-sand/25 bg-basalt-950/70 text-atlas-sand">
            <KeyRound aria-hidden="true" className="h-5 w-5" />
          </div>
          <div className="grid gap-4">
            <label className="grid gap-2" htmlFor="new-password">
              <span className="text-sm font-medium text-perlite-50">
                Nouveau mot de passe
              </span>
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={10}
                autoComplete="new-password"
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

            <label className="grid gap-2" htmlFor="confirm-password">
              <span className="text-sm font-medium text-perlite-50">
                Confirmer le mot de passe
              </span>
              <input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                minLength={10}
                autoComplete="new-password"
                className="h-12 rounded-md border border-white/10 bg-basalt-950/70 px-3 text-sm text-perlite-50 outline-none transition focus:border-agritech-emerald focus:ring-2 focus:ring-agritech-emerald/30"
              />
            </label>
          </div>

          {status === "success" || status === "error" ? (
            <p
              className={`mt-4 rounded-md border px-3 py-2 text-sm ${
                status === "success"
                  ? "border-agritech-emerald/40 bg-agritech-emerald/10 text-perlite-50"
                  : "border-atlas-copper/40 bg-atlas-clay/10 text-atlas-sand"
              }`}
            >
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading" || !token}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
            ) : null}
            Mettre à jour
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>

          <Link
            href="/portal/login"
            className="mt-5 inline-flex text-sm font-medium text-atlas-sand transition hover:text-agritech-emerald"
          >
            Retour à la connexion
          </Link>
        </form>
      </div>
    </main>
  );
}
