import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oaklandnoir.sanctumos.net";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M. A. Warren | Oakland Noir Crime Fiction",
    template: "%s | M. A. Warren",
  },
  description:
    "Crime fiction from Oakland, California. Discover The Fall of Beano Haden and the Teddy Prentice investigations.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "M. A. Warren",
    title: "M. A. Warren | Oakland Noir Crime Fiction",
    description:
      "Crime fiction from Oakland, California. The Fall of Beano Haden — preparing for publication.",
    images: [
      {
        url: "/images/hero-beano-haden.jpg",
        width: 1200,
        height: 630,
        alt: "Illustration for The Fall of Beano Haden — contemporary Oakland noir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M. A. Warren | Oakland Noir Crime Fiction",
    description:
      "Crime fiction from Oakland, California. The Fall of Beano Haden — preparing for publication.",
    images: ["/images/hero-beano-haden.jpg"],
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path = "",
): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title: `${title} | M. A. Warren`,
      description,
      url,
    },
  };
}
