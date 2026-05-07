-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "AnalyticsEventType" AS ENUM ('PAGE_VIEW', 'CTA_CLICK', 'PDF_DOWNLOAD', 'FORM_SUBMISSION', 'REGISTRATION_START', 'REGISTRATION_COMPLETE', 'LOGIN_CLICK');

-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('DESKTOP', 'MOBILE', 'TABLET', 'UNKNOWN');

-- CreateTable
CREATE TABLE "analytics_visitors" (
    "id" TEXT NOT NULL,
    "anonymousId" TEXT NOT NULL,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT,
    "city" TEXT,
    "deviceType" "DeviceType" NOT NULL DEFAULT 'UNKNOWN',

    CONSTRAINT "analytics_visitors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics_sessions" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referrer" TEXT,
    "sourceDomain" TEXT,
    "country" TEXT,
    "city" TEXT,
    "deviceType" "DeviceType" NOT NULL DEFAULT 'UNKNOWN',
    "userAgentHash" TEXT,

    CONSTRAINT "analytics_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analytics_events" (
    "id" TEXT NOT NULL,
    "type" "AnalyticsEventType" NOT NULL,
    "route" TEXT NOT NULL,
    "label" TEXT,
    "target" TEXT,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visitorId" TEXT,
    "sessionId" TEXT,
    "referrer" TEXT,
    "sourceDomain" TEXT,
    "country" TEXT,
    "city" TEXT,
    "deviceType" "DeviceType" NOT NULL DEFAULT 'UNKNOWN',

    CONSTRAINT "analytics_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "analytics_visitors_anonymousId_key" ON "analytics_visitors"("anonymousId");

-- CreateIndex
CREATE INDEX "analytics_visitors_lastSeenAt_idx" ON "analytics_visitors"("lastSeenAt");

-- CreateIndex
CREATE UNIQUE INDEX "analytics_sessions_sessionId_key" ON "analytics_sessions"("sessionId");

-- CreateIndex
CREATE INDEX "analytics_sessions_visitorId_lastSeenAt_idx" ON "analytics_sessions"("visitorId", "lastSeenAt");

-- CreateIndex
CREATE INDEX "analytics_sessions_sourceDomain_idx" ON "analytics_sessions"("sourceDomain");

-- CreateIndex
CREATE INDEX "analytics_sessions_country_city_idx" ON "analytics_sessions"("country", "city");

-- CreateIndex
CREATE INDEX "analytics_events_type_occurredAt_idx" ON "analytics_events"("type", "occurredAt");

-- CreateIndex
CREATE INDEX "analytics_events_route_occurredAt_idx" ON "analytics_events"("route", "occurredAt");

-- CreateIndex
CREATE INDEX "analytics_events_visitorId_occurredAt_idx" ON "analytics_events"("visitorId", "occurredAt");

-- CreateIndex
CREATE INDEX "analytics_events_sessionId_occurredAt_idx" ON "analytics_events"("sessionId", "occurredAt");

-- CreateIndex
CREATE INDEX "analytics_events_sourceDomain_occurredAt_idx" ON "analytics_events"("sourceDomain", "occurredAt");

-- CreateIndex
CREATE INDEX "analytics_events_country_city_idx" ON "analytics_events"("country", "city");

-- AddForeignKey
ALTER TABLE "analytics_sessions" ADD CONSTRAINT "analytics_sessions_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "analytics_visitors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analytics_events" ADD CONSTRAINT "analytics_events_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "analytics_visitors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analytics_events" ADD CONSTRAINT "analytics_events_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "analytics_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
