"use client";

import { contact } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t } = useI18n();

  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsapp.aria}
      title={`WhatsApp - ${contact.phone}`}
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        right: "calc(env(safe-area-inset-right, 0px) + 1rem)",
      }}
      className="whatsapp-button fixed z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/50 bg-[#25D366] text-white shadow-[0_18px_55px_rgba(37,211,102,0.34)] transition-colors duration-300 hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-basalt-950"
    >
      <svg
        aria-hidden="true"
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M16.03 3.2c-7.06 0-12.8 5.67-12.8 12.64 0 2.23.59 4.41 1.72 6.33L3.12 28.8l6.82-1.79a12.95 12.95 0 0 0 6.09 1.52c7.06 0 12.8-5.67 12.8-12.65S23.09 3.2 16.03 3.2Zm0 23.18c-1.94 0-3.84-.52-5.5-1.5l-.39-.23-4.04 1.06 1.08-3.89-.25-.4a10.38 10.38 0 0 1-1.57-5.58c0-5.79 4.79-10.5 10.67-10.5 5.89 0 10.68 4.71 10.68 10.5 0 5.8-4.79 10.54-10.68 10.54Zm5.86-7.88c-.32-.16-1.9-.93-2.2-1.03-.29-.11-.51-.16-.72.16-.21.31-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.57-.95-.84-1.6-1.88-1.79-2.2-.18-.31-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.72-.99-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.35 5.38 4.7.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.9-.77 2.17-1.51.27-.75.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
      </svg>
    </a>
  );
}
