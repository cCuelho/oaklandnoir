"use client";

import { useId, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 404 || res.status === 503) {
        setState("error");
        setErrorMessage(
          "The contact form is not connected yet. Integration is pending — see README for setup.",
        );
        return;
      }

      const data = (await res.json()) as { ok: boolean; reason?: string };

      if (data.ok) {
        setState("success");
        form.reset();
        return;
      }

      setState("error");
      if (data.reason === "not_configured") {
        setErrorMessage(
          "The contact form is not connected yet. Integration is pending — see README for setup.",
        );
      } else if (data.reason === "invalid_input") {
        setErrorMessage("Please fill in your name, a valid email, and a message.");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch {
      setState("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  }

  if (state === "success") {
    return (
      <p
        className="rounded-sm border border-amber/30 bg-charcoal/50 p-6 font-sans text-cream"
        role="status"
      >
        Thank you for your message. It has been received.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={nameId}
            className="mb-2 block font-sans text-sm text-cream/80"
          >
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field-input"
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-2 block font-sans text-sm text-cream/80"
          >
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field-input"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={subjectId}
          className="mb-2 block font-sans text-sm text-cream/80"
        >
          Subject
        </label>
        <input
          id={subjectId}
          name="subject"
          type="text"
          className="field-input"
        />
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-2 block font-sans text-sm text-cream/80"
        >
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={6}
          className="field-input min-h-[9rem] resize-y"
        />
      </div>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="rounded-sm border border-amber/40 bg-amber px-6 py-3 font-sans text-sm font-semibold text-charcoal transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {state === "error" && errorMessage ? (
        <p className="font-sans text-sm text-rust" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
