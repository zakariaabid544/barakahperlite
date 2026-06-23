-- Hero Agriculture images managed from the private Analytics dashboard.
-- Images themselves live in Vercel Blob; this table stores metadata + ordering.

-- CreateTable
CREATE TABLE "hero_slides" (
    "id" TEXT NOT NULL,
    "page" TEXT NOT NULL DEFAULT 'agriculture',
    "imageUrl" TEXT NOT NULL,
    "storageKey" TEXT NOT NULL,
    "title" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hero_slides_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "hero_slides_page_isActive_sortOrder_idx" ON "hero_slides"("page", "isActive", "sortOrder");
