import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/content/types";
import { formatBookStatus } from "@/content/books";

type BookCardProps = {
  book: Book;
  featured?: boolean;
};

export function BookCard({ book, featured = false }: BookCardProps) {
  const isFeatured = featured || book.featured;
  const href =
    book.slug === "the-fall-of-beano-haden"
      ? `/books/${book.slug}`
      : `/books#${book.slug}`;

  return (
    <article
      id={book.slug}
      className={`group flex flex-col overflow-hidden rounded-sm border border-tobacco/35 bg-charcoal/40 transition-colors hover:border-amber/35 ${
        isFeatured ? "lg:flex-row lg:items-stretch" : ""
      }`}
    >
      {isFeatured ? (
        <div className="relative aspect-[4/3] w-full shrink-0 bg-ink lg:aspect-auto lg:w-[42%]">
          <Image
            src="/images/hero-beano-haden.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-90 transition-opacity group-hover:opacity-100"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={book.featured}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/10 lg:to-ink/70"
            aria-hidden
          />
        </div>
      ) : null}

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${isFeatured ? "lg:py-10" : ""}`}>
        {book.relationship ? (
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-amber/80">
            {book.relationship}
          </p>
        ) : null}
        <h3
          className={`font-display text-cream ${isFeatured ? "mt-2 text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}
        >
          {book.title}
        </h3>
        {book.primaryCharacter ? (
          <p className="mt-2 font-sans text-sm text-cream/60">
            {book.primaryCharacter}
          </p>
        ) : null}
        <p className="mt-1 font-sans text-xs text-tobacco-light">
          {formatBookStatus(book.status)}
        </p>
        <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-cream/75 line-clamp-[8] sm:text-base">
          {book.teaser?.text ?? book.description}
        </p>
        <div className="mt-6">
          {book.slug === "the-fall-of-beano-haden" ? (
            <Link
              href={href}
              className="inline-flex font-sans text-sm font-medium text-amber underline-offset-4 transition-colors hover:text-cream hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              View book details
            </Link>
          ) : (
            <span className="font-sans text-sm text-cream/45">
              Not yet available for purchase
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
