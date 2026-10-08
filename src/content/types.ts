export type BookStatus =
  | "completed-preparing-for-publication"
  | "completed";

export type BookCategory = "teddy-prentice" | "related-oakland-pd";

export type Book = {
  slug: string;
  title: string;
  primaryCharacter?: string;
  status: BookStatus;
  featured: boolean;
  category: BookCategory;
  /** Author-supplied description — do not rewrite in UI */
  description: string;
  /** Optional shorter teaser; may be provisional */
  teaser?: { text: string; provisional: true };
  relationship?: string;
};

export type CharacterTeaser = {
  name: string;
  /** No invented bio — optional provisional positioning only */
  tagline?: { text: string; provisional: true };
};

export type ProvisionalCopy = {
  text: string;
  provisional: true;
};

export type SiteConfig = {
  copyrightYear: number;
  authorName: string;
  positioningPhrase: string;
  positioningNote: string;
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    goodreads?: string;
  };
  emailSignup: {
    promise: string;
  };
  contact: {
    /** Shown when no form backend — not a personal email */
    publicNotice: string;
  };
};
