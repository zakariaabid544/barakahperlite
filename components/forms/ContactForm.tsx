"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import type { ContactPayload } from "@/types/site";
import type { Translation } from "@/data/translations";
import { useI18n } from "@/lib/i18n";

const initialForm: ContactPayload = {
  name: "",
  company: "",
  phone: "",
  email: "",
  sector: "",
  quantity: "",
  message: "",
  country: "",
  subject: "",
  sourcePage: "",
  honeypot: "",
};

type Errors = Partial<Record<keyof ContactPayload, string>>;
type FormCopy = Translation["contactPage"]["form"];

function validate(form: ContactPayload, formCopy: FormCopy) {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = formCopy.errors.name;
  if (!form.email.trim()) errors.email = formCopy.errors.email;
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = formCopy.errors.invalidEmail;
  }
  if (!form.phone.trim()) errors.phone = formCopy.errors.phone;
  if (!form.message.trim()) errors.message = formCopy.errors.message;
  return errors;
}

export function ContactForm() {
  const { t } = useI18n();
  const formCopy = t.contactPage.form;
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const canSubmit = useMemo(() => status !== "loading", [status]);

  function updateField(field: keyof ContactPayload, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form, formCopy);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          subject: form.subject || "Demande de devis Barakah Perlite",
          sourcePage: window.location.href,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Request failed");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-glass backdrop-blur-xl sm:p-5 md:p-7"
      noValidate
    >
      <label className="hidden" aria-hidden="true">
        Website
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(event) => updateField("honeypot", event.target.value)}
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label={formCopy.name}
          name="name"
          value={form.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
          required
        />
        <Field
          label={formCopy.company}
          name="company"
          value={form.company}
          error={errors.company}
          onChange={(value) => updateField("company", value)}
        />
        <Field
          label={formCopy.phone}
          name="phone"
          value={form.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
          inputMode="tel"
          required
        />
        <Field
          label={formCopy.email}
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
          required
        />
        <label className="grid gap-2">
          <span className="text-sm font-medium text-perlite-50">
            {formCopy.sector}
          </span>
          <select
            name="sector"
            value={form.sector}
            onChange={(event) => updateField("sector", event.target.value)}
            aria-invalid={Boolean(errors.sector)}
            className="h-12 rounded-md border border-white/10 bg-basalt-950/70 px-3 text-sm text-perlite-50 outline-none transition focus:border-agritech-emerald focus:ring-2 focus:ring-agritech-emerald/30"
          >
            <option value="">{formCopy.sectorPlaceholder}</option>
            {formCopy.sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
          {errors.sector ? (
            <span className="text-xs text-atlas-copper">{errors.sector}</span>
          ) : null}
        </label>
        <Field
          label={formCopy.quantity}
          name="quantity"
          value={form.quantity}
          error={errors.quantity}
          onChange={(value) => updateField("quantity", value)}
          placeholder={formCopy.quantityPlaceholder}
        />
      </div>

      <label className="mt-4 grid gap-2">
        <span className="text-sm font-medium text-perlite-50">
          {formCopy.message}{" "}
          <span className="text-atlas-sand">{formCopy.requiredMark}</span>
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          placeholder={formCopy.messagePlaceholder}
          className="rounded-md border border-white/10 bg-basalt-950/70 px-3 py-3 text-sm leading-7 text-perlite-50 outline-none transition placeholder:text-silver-200/30 focus:border-agritech-emerald focus:ring-2 focus:ring-agritech-emerald/30"
        />
        {errors.message ? (
          <span className="text-xs text-atlas-copper">{errors.message}</span>
        ) : null}
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-silver-200/50">{formCopy.note}</p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-agritech-emerald px-5 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-perlite-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "loading" ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : status === "success" ? (
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
          ) : null}
          {status === "loading"
            ? formCopy.loading
            : status === "success"
              ? formCopy.success
              : formCopy.submit}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>

      {status === "error" ? (
        <p className="mt-4 rounded-md border border-atlas-copper/40 bg-atlas-clay/10 px-3 py-2 text-sm text-atlas-sand">
          {formCopy.error}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof ContactPayload;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "decimal" | "search" | "url";
};

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  required = false,
  placeholder,
  inputMode,
}: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-perlite-50">
        {label} {required ? <span className="text-atlas-sand">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
        placeholder={placeholder}
        inputMode={inputMode}
        className="h-12 rounded-md border border-white/10 bg-basalt-950/70 px-3 text-sm text-perlite-50 outline-none transition placeholder:text-silver-200/30 focus:border-agritech-emerald focus:ring-2 focus:ring-agritech-emerald/30"
      />
      {error ? <span className="text-xs text-atlas-copper">{error}</span> : null}
    </label>
  );
}
