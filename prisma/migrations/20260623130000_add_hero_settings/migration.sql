-- Per-page hero display settings (mode, arrows, autoplay, interval).
-- One row per page; absence of a row means defaults are used.

-- CreateTable
CREATE TABLE "hero_settings" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'carousel',
    "showArrows" BOOLEAN NOT NULL DEFAULT true,
    "autoplay" BOOLEAN NOT NULL DEFAULT true,
    "intervalMs" INTEGER NOT NULL DEFAULT 5000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hero_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hero_settings_page_key" ON "hero_settings"("page");
