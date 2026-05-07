"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/portal/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-silver-200/70 transition hover:border-atlas-sand/45 hover:text-atlas-sand"
    >
      Déconnexion
    </button>
  );
}
