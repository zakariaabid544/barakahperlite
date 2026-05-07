import { handleContactEmailRequest } from "@/lib/server/contact-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleContactEmailRequest(request, "contact");
}
