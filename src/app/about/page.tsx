import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCopy, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "About M. A. Warren — crime fiction author writing Oakland noir.",
  "/about",
);

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Author"
          title={siteConfig.authorName}
          description={aboutCopy.lead.text}
        />

        <div className="mt-10 space-y-6 font-sans text-base leading-relaxed text-cream/80 sm:text-lg">
          <p>{aboutCopy.approvedFact}</p>
          <p className="text-cream/65">{aboutCopy.biographyPending}</p>
        </div>

        <aside className="mt-12 rounded-sm border border-tobacco/30 bg-charcoal/35 p-6 sm:p-8">
          <h2 className="font-display text-xl text-cream">The fiction</h2>
          <p className="mt-3 font-sans text-sm leading-relaxed text-cream/70">
            Stories are set primarily in Oakland, California — contemporary
            crime fiction with a literary, cinematic edge. Explore the{" "}
            <Link href="/oakland-noir" className="text-amber hover:underline">
              Oakland Noir
            </Link>{" "}
            world and begin with{" "}
            <Link
              href="/books/the-fall-of-beano-haden"
              className="text-amber hover:underline"
            >
              The Fall of Beano Haden
            </Link>
            .
          </p>
        </aside>
      </div>
    </Container>
  );
}
