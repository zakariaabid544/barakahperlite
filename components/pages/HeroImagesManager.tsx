"use client";

import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeOff,
  ImageIcon,
  Loader2,
  Trash2,
  Upload,
} from "lucide-react";
import type { HeroSlideDTO } from "@/lib/hero-slides/types";

const ENDPOINT = "/api/admin/hero-slides";

type HeroImagesManagerProps = {
  initialSlides: HeroSlideDTO[];
};

export function HeroImagesManager({ initialSlides }: HeroImagesManagerProps) {
  const [slides, setSlides] = useState<HeroSlideDTO[]>(initialSlides);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeCount = slides.filter((slide) => slide.isActive).length;

  async function refresh() {
    const response = await fetch(ENDPOINT, { cache: "no-store" });
    const payload = await response.json().catch(() => null);
    if (response.ok && payload?.ok) {
      setSlides(payload.slides as HeroSlideDTO[]);
    }
  }

  function onSelectFile(selected: File | null) {
    setError(null);
    setFile(selected);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(selected ? URL.createObjectURL(selected) : null);
  }

  function resetForm() {
    setTitle("");
    onSelectFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleUpload(event: React.FormEvent) {
    event.preventDefault();
    if (!file || uploading) return;

    setUploading(true);
    setError(null);
    try {
      const body = new FormData();
      body.append("file", file);
      if (title.trim()) body.append("title", title.trim());

      const response = await fetch(ENDPOINT, { method: "POST", body });
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.ok) {
        setError(payload?.message ?? "Échec de l'envoi de l'image.");
        return;
      }
      resetForm();
      await refresh();
    } catch {
      setError("Erreur réseau pendant l'envoi.");
    } finally {
      setUploading(false);
    }
  }

  async function toggleActive(slide: HeroSlideDTO) {
    setPendingId(slide.id);
    setError(null);
    try {
      const response = await fetch(`${ENDPOINT}/${slide.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !slide.isActive }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.ok) {
        setError(payload?.message ?? "Échec de la mise à jour.");
        return;
      }
      await refresh();
    } finally {
      setPendingId(null);
    }
  }

  async function remove(slide: HeroSlideDTO) {
    if (!window.confirm("Supprimer définitivement cette image ?")) return;
    setPendingId(slide.id);
    setError(null);
    try {
      const response = await fetch(`${ENDPOINT}/${slide.id}`, {
        method: "DELETE",
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.ok) {
        setError(payload?.message ?? "Échec de la suppression.");
        return;
      }
      await refresh();
    } finally {
      setPendingId(null);
    }
  }

  async function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= slides.length) return;

    const next = [...slides];
    [next[index], next[target]] = [next[target], next[index]];
    setSlides(next); // optimistic
    setError(null);

    const response = await fetch(`${ENDPOINT}/reorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: next.map((slide) => slide.id) }),
    });
    if (!response.ok) {
      setError("Échec de la réorganisation.");
    }
    await refresh();
  }

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-glass">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl text-perlite-50 md:text-2xl">
            Images Hero Agriculture
          </h2>
          <p className="mt-1 text-sm text-silver-200/55">
            {slides.length} image(s) · {activeCount} active(s). Ordre = ordre du
            carrousel. Sans image active, l&apos;image par défaut est utilisée.
          </p>
        </div>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-atlas-sand/20 text-atlas-sand">
          <ImageIcon aria-hidden="true" className="h-5 w-5" />
        </span>
      </div>

      {/* Upload form */}
      <form
        onSubmit={handleUpload}
        className="mt-5 grid gap-4 rounded-md border border-white/10 bg-basalt-950/55 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-end"
      >
        <div className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-silver-200/60">
            Aperçu
          </span>
          <div className="relative h-20 w-28 overflow-hidden rounded-md border border-white/10 bg-basalt-900/70">
            {previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewUrl}
                alt="Aperçu de la nouvelle image"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-silver-200/40">
                <ImageIcon aria-hidden="true" className="h-6 w-6" />
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-3">
          <label className="grid gap-2 text-sm font-semibold text-silver-200/75">
            Image (JPEG, PNG, WebP, AVIF — max 8 Mo)
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={(event) => onSelectFile(event.target.files?.[0] ?? null)}
              className="block w-full text-sm text-silver-200/70 file:mr-4 file:rounded-md file:border-0 file:bg-agritech-emerald/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-agritech-emerald hover:file:bg-agritech-emerald/30"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-silver-200/75">
            Titre (optionnel — usage interne)
            <input
              type="text"
              value={title}
              maxLength={120}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ex. Serre tomates — hiver"
              className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-perlite-50 outline-none focus:border-agritech-emerald/50"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={!file || uploading}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-agritech-emerald px-5 text-sm font-semibold text-basalt-950 transition hover:bg-agritech-emerald/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {uploading ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : (
            <Upload aria-hidden="true" className="h-4 w-4" />
          )}
          {uploading ? "Envoi…" : "Ajouter"}
        </button>
      </form>

      {error ? (
        <p
          role="alert"
          className="mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {error}
        </p>
      ) : null}

      {/* Slides list */}
      <ul className="mt-5 grid gap-3">
        {slides.length === 0 ? (
          <li className="rounded-md border border-dashed border-white/12 px-4 py-8 text-center text-sm text-silver-200/55">
            Aucune image. L&apos;image par défaut est affichée sur la page
            Agriculture.
          </li>
        ) : (
          slides.map((slide, index) => (
            <li
              key={slide.id}
              className="flex items-center gap-4 rounded-md border border-white/10 bg-basalt-950/45 p-3"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md border border-white/10 bg-basalt-900/70">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.imageUrl}
                  alt={slide.title ?? ""}
                  className={`h-full w-full object-cover ${slide.isActive ? "" : "opacity-40 grayscale"}`}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-perlite-50">
                  {slide.title || "Sans titre"}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-silver-200/45">
                  Position {index + 1} ·{" "}
                  {slide.isActive ? (
                    <span className="text-agritech-emerald">Active</span>
                  ) : (
                    <span className="text-silver-200/55">Masquée</span>
                  )}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0 || pendingId === slide.id}
                  aria-label="Monter dans l'ordre"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-silver-200/70 transition hover:text-perlite-50 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
                >
                  <ArrowUp aria-hidden="true" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === slides.length - 1 || pendingId === slide.id}
                  aria-label="Descendre dans l'ordre"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-silver-200/70 transition hover:text-perlite-50 disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
                >
                  <ArrowDown aria-hidden="true" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => toggleActive(slide)}
                  disabled={pendingId === slide.id}
                  aria-label={slide.isActive ? "Désactiver" : "Activer"}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-silver-200/70 transition hover:text-perlite-50 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agritech-emerald"
                >
                  {slide.isActive ? (
                    <EyeOff aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    <Eye aria-hidden="true" className="h-4 w-4" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => remove(slide)}
                  disabled={pendingId === slide.id}
                  aria-label="Supprimer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-500/25 text-red-300/80 transition hover:bg-red-500/10 hover:text-red-200 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  {pendingId === slide.id ? (
                    <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 aria-hidden="true" className="h-4 w-4" />
                  )}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
