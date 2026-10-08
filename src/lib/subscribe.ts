/**
 * Email list integration point.
 *
 * Configure one of:
 * - SUBSCRIBE_WEBHOOK_URL — POST JSON { email, source, bookSlug? }
 * - CONVERTKIT_FORM_ID + CONVERTKIT_API_KEY (future)
 * - MAILCHIMP_AUDIENCE_ID + MAILCHIMP_API_KEY (future)
 *
 * Until configured, submissions return { ok: false, reason: "not_configured" }.
 */

export type SubscribePayload = {
  email: string;
  source: string;
  bookSlug?: string;
};

export type SubscribeResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "invalid_email" | "provider_error" };

export async function subscribeEmail(
  payload: SubscribePayload,
): Promise<SubscribeResult> {
  const email = payload.email.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, reason: "invalid_email" };
  }

  const webhook = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (!webhook) {
    return { ok: false, reason: "not_configured" };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: payload.source,
        bookSlug: payload.bookSlug ?? null,
      }),
    });
    if (!res.ok) {
      return { ok: false, reason: "provider_error" };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "provider_error" };
  }
}
