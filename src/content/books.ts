import type { Book, BookStatus } from "./types";

export const books: Book[] = [
  {
    slug: "the-fall-of-beano-haden",
    title: "The Fall of Beano Haden",
    primaryCharacter: "Teddy Prentice",
    status: "completed-preparing-for-publication",
    featured: true,
    category: "teddy-prentice",
    description: `Detectives Teddy Prentice, Santino Wells, Morrisa “Mo” Luce, and A. C. Bolden investigate the death of ex-con and would-be-dedicated dad Beano Haden. Beano’s body is propped up in his bedroom closet, his four-year-old daughter in the apartment with Beano’s former cellblock mate Wheaty. Hours later, the detectives find themselves thrust into a brutal shooting war and scavenger hunt searching for not only who killed Beano, but who murdered Mary Billings, victim of a ten-year unsolved cold case of which Beano was once the prime suspect. Their scavenger hunt opponents are an Oakland gang called Hard On Em, and the bangers are after a cache of diamonds, which was supposed to be the ransom for Billings’s return.`,
    teaser: {
      text: "A closet death, a child in the next room, and a decade-old murder that won’t stay buried.",
      provisional: true,
    },
  },
  {
    slug: "loose-ends",
    title: "Loose Ends",
    status: "completed",
    featured: false,
    category: "teddy-prentice",
    relationship: "Prequel to The Fall of Beano Haden",
    description: `Loose Ends, the second book of the series, is actually a prequel to The Fall of Beano Haden. Teddy Prentice begins as a lone wolf detective working out of missing persons. He is loaned out to the wealthy San Francisco Mayor’s family, the Meyers, and tasked with finding the runaway niece of the city’s first lady. Very quickly Teddy finds that the girl is running in horrible company. A video house where she is supposed to be filming is a four body murder scene. Two murderers emerge—one a hitman for a powerful businessman, the other a CIA killer—both related to the Meyers family. By the end of the tale, Teddy’s search for the girl has become secondary to stopping the two killers.`,
  },
  {
    slug: "boardwalks-story-ghosts-in-tv-land",
    title: "Boardwalk’s Story: Ghosts in TV Land",
    status: "completed",
    featured: false,
    category: "teddy-prentice",
    description: `A family, six in all including a baby, is slaughtered, and an Iman from the city’s most progressive mosque is shot to death outside the masjid’s front door. Teddy and Santino are heading the investigation into the family killings, while Mo Luce heads the inquiry into the Iman’s homicide. The trail leading to the family’s bloodbath tracks back to the senior member’s life in Arizona. While the Iman’s murder leads to a disapproved love affair between two teenaged girls. The tale illustrates how order to the world is seldom a result of a solved case.`,
  },
  {
    slug: "crush",
    title: "Crush",
    status: "completed",
    featured: false,
    category: "teddy-prentice",
    description: `A “howcatchem” story where Teddy and the team learn about the story’s principal antagonist from one of A. C.’s tales. The titular leader not only commits a heartless patricidal murder, but he leads a ring of brutally ambitious street hoods, whose clumsy lunge at the low-hanging profits of two prison gangs fails catastrophically. Amongst the crimes that the team encounters in their investigation are the kidnap and murder of a pregnant teen, and the murders of a dozen victims.`,
  },
  {
    slug: "fragile-ticket",
    title: "Fragile Ticket",
    status: "completed",
    featured: false,
    category: "related-oakland-pd",
    description: `Fragile Ticket is an adult crime/business-intrigue novel of the variety that used to be known as a yellow book or entertainment. It is intended to be the opening volume of a series of three connected tales. In this initial story, a quartet of main characters is forced to go on the run out of the Oakland Police Department’s headquarters. They must make their way unsupported and unprotected by their police fellows for 16 hours. The frantic stint compels the three detectives and the journalist they are protecting to live by their wits, even committing crimes, until the moles in “their house” have been ferreted out, or failing that, until it is safe at least to return with the threatened reporter.`,
  },
];

export const featuredBook = books.find((b) => b.featured)!;

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const teddyPrenticeBooks = books.filter(
  (b) => b.category === "teddy-prentice",
);

export const relatedOaklandBooks = books.filter(
  (b) => b.category === "related-oakland-pd",
);

export function formatBookStatus(status: BookStatus): string {
  switch (status) {
    case "completed-preparing-for-publication":
      return "Completed — preparing for publication";
    case "completed":
      return "Completed";
    default:
      return status;
  }
}
