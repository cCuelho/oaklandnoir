"use client";

import { useId, useState } from "react";
import { siteConfig } from "@/content/site";

type EmailSignupProps = {
  source: string;
  bookSlug?: string;
  heading?: string;
  submitLabel?: string;
  compact?: boolean;
};

type FormState = "idle" | "submitting" | "success" | "error";

export function EmailSignup({
  source,
  bookSlug,
  heading,
  submitLabel = "Get Release Updates",
  compact = false,
}: EmailSignupProps) {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, bookSlug }),
      });
      if (res.status === 404 || res.status === 503) {
        setState("error");
        setErrorMessage(
          "Release notifications are not connected yet. Please check back soon or use the contact form.",
        );
        return;
      }

      const data = (await res.json()) as {
        ok: boolean;
        reason?: string;
      };

      if (data.ok) {
        setState("success");
        setEmail("");
        return;
      }

      setState("error");
      if (data.reason === "not_configured") {
        setErrorMessage(
          "Release notifications are not connected yet. Please check back soon or use the contact form.",
        );
      } else if (data.reason === "invalid_email") {
        setErrorMessage("Please enter a valid email address.");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch {
      setState("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <div
      className={
        compact
          ? ""
          : "rounded-sm border border-tobacco/40 bg-charcoal/60 p-6 sm:p-8"
      }
    >
      {heading ? (
        <h3 className="font-display text-xl text-cream sm:text-2xl">
          {heading}
        </h3>
      ) : null}
      <p
        className={`font-sans text-sm leading-relaxed text-cream/70 ${heading ? "mt-2" : ""}`}
      >
        {siteConfig.emailSignup.promise}
      </p>

      {state === "success" ? (
        <p
          className="mt-4 font-sans text-sm text-amber"
          role="status"
          aria-live="polite"
        >
          Thank you — you&apos;re on the list.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`mt-5 flex flex-col gap-3 ${compact ? "sm:flex-row sm:items-end" : "sm:flex-row sm:items-stretch"}`}
          noValidate
        >
          <div className="flex-1">
            <label htmlFor={emailId} className="sr-only">
              Email address
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={state === "submitting"}
              className="w-full rounded-sm border border-tobacco/50 bg-ink px-4 py-3 font-sans text-base text-cream placeholder:text-cream/35 focus-visible:border-amber/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/40 disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="rounded-sm border border-amber/40 bg-amber px-5 py-3 font-sans text-sm font-semibold tracking-wide text-charcoal transition-colors hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : submitLabel}
          </button>
        </form>
      )}

      {state === "error" && errorMessage ? (
        <p className="mt-3 font-sans text-sm text-rust" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
