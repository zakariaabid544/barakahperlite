import type { Metadata } from "next";
import { ResetPasswordPage } from "@/components/pages/ResetPasswordPage";

export const metadata: Metadata = {
  title: "Réinitialisation du mot de passe",
  robots: { index: false, follow: false },
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ token?: string | string[] }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const token = Array.isArray(params?.token)
    ? params?.token[0] || ""
    : params?.token || "";

  return <ResetPasswordPage token={token} />;
}
