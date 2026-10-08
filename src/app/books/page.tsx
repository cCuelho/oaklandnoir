import type { Metadata } from "next";
import { BookCard } from "@/components/BookCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  relatedOaklandBooks,
  teddyPrenticeBooks,
} from "@/content/books";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Books",
  "Crime fiction by M. A. Warren — The Fall of Beano Haden and the Teddy Prentice investigations in Oakland.",
  "/books",
);

export default function BooksPage() {
  const featured = teddyPrenticeBooks.find((b) => b.featured);
  const teddyRest = teddyPrenticeBooks.filter((b) => !b.featured);

  return (
    <Container className="py-14 sm:py-20 lg:py-20">
      <SectionHeading
        eyebrow="Library"
        title="Books"
        description="Present-day Oakland crime fiction. The Fall of Beano Haden is preparing for publication; other titles are completed manuscripts not yet offered for sale."
      />

      <div className="mt-14">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber/90">
          Teddy Prentice / primary stories
        </h2>
        <div className="mt-6 space-y-6">
          {featured ? <BookCard book={featured} featured /> : null}
          <div className="grid gap-6 lg:grid-cols-2">
            {teddyRest.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-tobacco/25 pt-14">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber/90">
          Related Oakland PD fiction
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-sm text-cream/60">
          Connected to the same department and city, with a separate storyline
          structure.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {relatedOaklandBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </div>
    </Container>
  );
}
