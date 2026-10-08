import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oaklandnoir.sanctumos.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/books",
    "/books/the-fall-of-beano-haden",
    "/oakland-noir",
    "/read",
    "/about",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-10-08"),
  }));
}
