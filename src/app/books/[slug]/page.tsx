import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EmailSignup } from "@/components/EmailSignup";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  formatBookStatus,
  getBookBySlug,
  books,
} from "@/content/books";
import { pageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books
    .filter((b) => b.slug === "the-fall-of-beano-haden")
    .map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  return pageMetadata(
    book.title,
    `${book.title} by M. A. Warren — ${formatBookStatus(book.status)}.`,
    `/books/${book.slug}`,
  );
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book || book.slug !== "the-fall-of-beano-haden") {
    notFound();
  }

  return (
    <Container className="py-14 sm:py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-sm border border-tobacco/40 bg-charcoal shadow-2xl shadow-black/40 lg:mx-0">
          <Image
            src="/images/hero-beano-haden.jpg"
            alt="Cover artwork placeholder for The Fall of Beano Haden"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 80vw, 340px"
            priority
          />
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4"
            aria-hidden
          />
          <p className="absolute bottom-3 left-0 right-0 text-center font-sans text-[0.65rem] uppercase tracking-widest text-cream/50">
            Cover placeholder
          </p>
        </div>

        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber/90">
            {book.primaryCharacter}
          </p>
          <h1 className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            {book.title}
          </h1>
          <p className="mt-4 font-sans text-sm text-tobacco-light">
            {formatBookStatus(book.status)}
          </p>

          <p className="mt-8 font-sans text-base leading-relaxed text-cream/85 sm:text-lg">
            {book.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/read">Read an excerpt</ButtonLink>
            <ButtonLink href="/books" variant="secondary">
              All books
            </ButtonLink>
          </div>

          <div className="mt-12">
            <EmailSignup
              source="book-detail"
              bookSlug={book.slug}
              heading="Be notified when The Fall of Beano Haden is released."
              submitLabel="Notify me"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
