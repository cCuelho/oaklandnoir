export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | {
      ok: false;
      reason: "not_configured" | "invalid_input" | "provider_error";
    };

export async function sendContactMessage(
  payload: ContactPayload,
): Promise<ContactResult> {
  const name = payload.name.trim();
  const email = payload.email.trim().toLowerCase();
  const subject = payload.subject.trim();
  const message = payload.message.trim();

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, reason: "invalid_input" };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return { ok: false, reason: "not_configured" };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (!res.ok) {
      return { ok: false, reason: "provider_error" };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "provider_error" };
  }
}
