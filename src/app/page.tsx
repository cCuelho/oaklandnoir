import Image from "next/image";
import Link from "next/link";
import { BookCard } from "@/components/BookCard";
import { EmailSignup } from "@/components/EmailSignup";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredBook, teddyPrenticeBooks } from "@/content/books";
import { coreCharacters } from "@/content/characters";
import { aboutCopy, homeCopy, siteConfig } from "@/content/site";

export default function HomePage() {
  const otherBooks = teddyPrenticeBooks.filter((b) => !b.featured).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-tobacco/25">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-beano-haden.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-umber/95 via-charcoal/85 to-charcoal/45"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink via-umber/25 to-gold/10"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,39,0.12),transparent_55%)]"
            aria-hidden
          />
          <div className="noise-overlay absolute inset-0 opacity-60" aria-hidden />
        </div>

        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              {siteConfig.authorName}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
              {siteConfig.positioningPhrase}
            </h1>
            <p className="mt-6 font-sans text-lg text-cream/85 sm:text-xl">
              {homeCopy.heroSubline.text}
            </p>
            <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-cream/70">
              {homeCopy.heroSupporting.text}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/books">Discover the Books</ButtonLink>
              <ButtonLink href="/read" variant="secondary">
                Read an Excerpt
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-tobacco/20 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Featured book"
            title={featuredBook.title}
            description={
              featuredBook.teaser?.text ??
              "Preparing for publication — not yet available for purchase."
            }
          />
          <div className="mt-10">
            <BookCard book={featuredBook} featured />
          </div>
          <p className="mt-6 font-sans text-sm text-cream/55">
            <Link
              href={`/books/${featuredBook.slug}`}
              className="text-amber underline-offset-4 hover:underline"
            >
              Full description and release signup
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-tobacco/20 bg-umber/15 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The world"
                title="Enter Oakland"
                description={homeCopy.worldTeaser.text}
              />
              <p className="mt-6 font-sans text-sm leading-relaxed text-cream/65">
                Detective Teddy Prentice and the Oakland PD fiction — present-day
                streets, hard cases, and consequences that outlast the closing
                report.
              </p>
              <div className="mt-8">
                <ButtonLink href="/oakland-noir" variant="secondary">
                  Oakland Noir
                </ButtonLink>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {coreCharacters.map((c) => (
                <li
                  key={c.name}
                  className="rounded-sm border border-tobacco/35 bg-ink/50 px-4 py-5 text-center"
                >
                  <span className="font-display text-lg text-cream sm:text-xl">
                    {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-tobacco/20 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Sample the prose"
            title="Read an excerpt"
            description={`From ${featuredBook.title} — Morrisa “Mo” Luce walks into a room where a child is still in the apartment.`}
          />
          <blockquote className="mt-8 max-w-3xl border-l-2 border-amber/50 pl-6">
            <p className="font-sans text-base italic leading-relaxed text-cream/80 sm:text-lg">
              {`“Go play with your doll in your daddy’s bedroom.”`}
            </p>
          </blockquote>
          <div className="mt-8">
            <ButtonLink href="/read">Continue reading</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-tobacco/20 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Library"
            title="Books"
            description="The Teddy Prentice investigations and related Oakland PD fiction."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <BookCard book={featuredBook} />
            {otherBooks.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/books"
              className="font-sans text-sm font-medium text-amber underline-offset-4 hover:underline"
            >
              View all books
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-tobacco/20 bg-gold/[0.04] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Author"
              title={`About ${siteConfig.authorName}`}
              description={aboutCopy.lead.text}
            />
            <div className="font-sans text-base leading-relaxed text-cream/75 lg:pt-12">
              <p>{aboutCopy.approvedFact}</p>
              <p className="mt-6">
                <Link
                  href="/about"
                  className="text-amber underline-offset-4 hover:underline"
                >
                  More about the author
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <EmailSignup
            source="home-footer"
            heading="Release updates"
            submitLabel="Get Release Updates"
          />
        </Container>
      </section>
    </>
  );
}
