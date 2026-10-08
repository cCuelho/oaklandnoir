import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

const socialEntries = (
  [
    ["facebook", "Facebook"],
    ["instagram", "Instagram"],
    ["twitter", "X"],
    ["goodreads", "Goodreads"],
  ] as const
).flatMap(([key, label]) => {
  const url = siteConfig.social[key];
  return url ? [{ key, label, url }] : [];
});

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-tobacco/30 bg-charcoal/70">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl text-cream">
              {siteConfig.authorName}
            </p>
            <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber/80">
              {siteConfig.positioningPhrase}
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              Crime fiction from Oakland, California.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/75 transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {socialEntries.length > 0 ? (
              <>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-cream/50">
                  Connect
                </p>
                <ul className="mt-4 space-y-2">
                  {socialEntries.map(({ key, label, url }) => (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-cream/75 transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="font-sans text-sm text-cream/50">
                <Link
                  href="/contact"
                  className="text-amber/90 underline-offset-4 hover:underline"
                >
                  Contact
                </Link>{" "}
                for inquiries.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-tobacco/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-cream/45">
            © {siteConfig.copyrightYear} {siteConfig.authorName}. All rights
            reserved.
          </p>
          <Link
            href="/contact"
            className="font-sans text-xs text-cream/55 hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
