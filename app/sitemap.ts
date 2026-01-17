import type { MetadataRoute } from "next";
import { getEcritSlugs } from "@/lib/ecrits";

const BASE_URL = "https://www.charlescurto.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const ecrits = getEcritSlugs();

    const staticPages = [
    "/",
    "/coaching",
    "/consultations",
    "/contact",
    "/international",
    "/ecrits",
    "/politique-de-confidentialite",
    ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const ecritsRoutes = ecrits.map((slug) => ({
    url: `${BASE_URL}/ecrits/${slug}`,
    lastModified: new Date(),
  }));


  return [...staticRoutes, ...ecritsRoutes];
}
