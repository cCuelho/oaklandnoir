import type { ProvisionalCopy, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  /** Update at year boundary — static for prerender compatibility */
  copyrightYear: 2026,
  authorName: "M. A. Warren",
  positioningPhrase: "Oakland Noir",
  positioningNote:
    "Descriptive positioning phrase — not an official series or world title (V1).",
  social: {
    // Add URLs when accounts are ready; empty entries are not rendered
    facebook: undefined,
    instagram: undefined,
    twitter: undefined,
    goodreads: undefined,
  },
  emailSignup: {
    promise: "Get release news and occasional updates from M. A. Warren.",
  },
  contact: {
    publicNotice:
      "Messages are handled through this form. A public author email may be added later.",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/oakland-noir", label: "Oakland Noir" },
  { href: "/about", label: "About" },
  { href: "/read", label: "Read" },
  { href: "/contact", label: "Contact" },
] as const;

/** Marketing copy — edit in this file; items marked provisional may change before launch */
export const homeCopy = {
  heroSubline: {
    text: "Crime fiction from Oakland.",
    provisional: true,
  } satisfies ProvisionalCopy,
  heroSupporting: {
    text: "Detective Teddy Prentice works a city where solving the crime doesn't necessarily put the world back in order.",
    provisional: true,
  } satisfies ProvisionalCopy,
  worldTeaser: {
    text: "Contemporary Oakland. Classic noir pressure. Cases that close without restoring peace.",
    provisional: true,
  } satisfies ProvisionalCopy,
};

export const oaklandNoirCopy = {
  intro: {
    text: "Crime fiction set in present-day Oakland — stylistically informed by postwar detective fiction, told with modern streets, a diverse roster of characters, and prose that stays close to the ground.",
    provisional: true,
  } satisfies ProvisionalCopy,
  bullets: [
    {
      text: "Contemporary setting — not a period piece.",
      provisional: true,
    },
    {
      text: "Cerebral and violent — order is not guaranteed when the case is solved.",
      provisional: true,
    },
    {
      text: "Documentary-style prose — scene, detail, and consequence.",
      provisional: true,
    },
  ] satisfies ProvisionalCopy[],
};

export const aboutCopy = {
  lead: {
    text: "M. A. Warren writes crime fiction set primarily in Oakland, California.",
    provisional: true,
  } satisfies ProvisionalCopy,
  /** Author-supplied fact — approved for use */
  approvedFact:
    "His godfather served as a police officer in Long Beach, California.",
  biographyPending:
    "A fuller author biography will appear here when approved for publication.",
};

/** Unresolved content decisions — for maintainers, not shown on the public site */
export const unresolvedDecisions = [
  'Whether "Oakland Noir" remains a descriptive phrase or becomes an official series/world name.',
  "Whether The Fall of Beano Haden needs final proofreading/editing before publication.",
  "Whether an author photograph will be added before launch.",
  "Whether the story about writing for his wife is approved for public biography use.",
  "Whether the working publication target becomes December 2026, January 2027, or remains unpublished publicly.",
] as const;
