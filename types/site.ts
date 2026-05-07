import type { LucideIcon } from "lucide-react";

export type Locale = "fr" | "ar" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Application = Feature & {
  href: string;
  accent: "emerald" | "sand" | "clay" | "silver";
};

export type TechnicalSpec = {
  label: string;
  value: string;
  note: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ContactPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  sector: string;
  quantity: string;
  message: string;
  country?: string;
  subject?: string;
  sourcePage?: string;
  honeypot?: string;
};
