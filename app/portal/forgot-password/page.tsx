import type { Metadata } from "next";
import { ForgotPasswordPage } from "@/components/pages/ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Mot de passe oublié",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPasswordPage />;
}
