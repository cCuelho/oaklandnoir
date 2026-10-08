import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreCharacters } from "@/content/characters";
import { featuredBook } from "@/content/books";
import { oaklandNoirCopy, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Oakland Noir",
  "Contemporary Oakland crime fiction by M. A. Warren — Teddy Prentice, Santino Wells, Mo Luce, and A. C. Bolden.",
  "/oakland-noir",
);

export default function OaklandNoirPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-tobacco/25">
        <div className="absolute inset-0">
          <Image
            src="/images/noir-reference-modern.png"
            alt=""
            fill
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-umber/80 via-charcoal/70 to-ink/90" aria-hidden />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,163,115,0.15),transparent_60%)]"
            aria-hidden
          />
          <div className="noise-overlay absolute inset-0" aria-hidden />
        </div>
        <Container className="relative py-16 sm:py-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber">
            {siteConfig.authorName}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl text-cream sm:text-6xl">
            {siteConfig.positioningPhrase}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-cream/80">
            {oaklandNoirCopy.intro.text}
          </p>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <ul className="grid gap-4 sm:grid-cols-3">
          {oaklandNoirCopy.bullets.map((item) => (
            <li
              key={item.text}
              className="rounded-sm border border-tobacco/35 bg-charcoal/40 px-5 py-6 font-sans text-sm leading-relaxed text-cream/75"
            >
              {item.text}
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Core cast"
            title="The investigators"
            description="Names from the fiction — full character profiles will follow when author-approved material is available."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {coreCharacters.map((c) => (
              <li
                key={c.name}
                className="flex items-center rounded-sm border border-tobacco/30 bg-ink/40 px-5 py-4"
              >
                <span className="font-display text-xl text-cream">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-sm border border-amber/20 bg-gradient-to-br from-charcoal/80 to-ink p-8 sm:p-10">
          <h2 className="font-display text-2xl text-cream sm:text-3xl">
            Start with {featuredBook.title}
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base text-cream/75">
            {featuredBook.teaser?.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/books/${featuredBook.slug}`}>
              Book details
            </ButtonLink>
            <ButtonLink href="/read" variant="secondary">
              Read an excerpt
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
