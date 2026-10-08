import type { Metadata } from "next";
import { EmailSignup } from "@/components/EmailSignup";
import { Container } from "@/components/ui/Container";
import { excerptParagraphs, excerptTitle } from "@/content/excerpt";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Read an excerpt",
  "Read an excerpt from The Fall of Beano Haden by M. A. Warren.",
  "/read",
);

export default function ReadPage() {
  return (
    <Container className="py-14 sm:py-16 lg:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber/90">
          Read from
        </p>
        <h1 className="mt-4 font-display text-3xl text-cream sm:text-4xl lg:text-5xl">
          {excerptTitle}
        </h1>
      </header>

      <article
        className="excerpt-prose mx-auto mt-12 max-w-3xl"
        aria-label="Book excerpt"
      >
        {excerptParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <div className="mx-auto mt-16 max-w-xl">
        <p className="mb-4 text-center font-sans text-sm text-cream/70">
          Want to know when the book is released?
        </p>
        <EmailSignup
          source="read-page"
          bookSlug="the-fall-of-beano-haden"
          compact
          submitLabel="Get Release Updates"
        />
      </div>
    </Container>
  );
}
