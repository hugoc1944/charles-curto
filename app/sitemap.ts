import type { MetadataRoute } from "next";
import { getEcritSlugs } from "@/lib/ecrits";

export default function sitemap(): MetadataRoute.Sitemap {
  const ecrits = getEcritSlugs();

  const staticPages = [
    "",
    "/coaching",
    "/consultations",
    "/contact",
    "/international",
    "/ecrits",
    "/politique-de-confidentialite",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: route,
    lastModified: new Date(),
  }));

  const ecritsRoutes = ecrits.map((slug) => ({
    url: `/ecrits/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...ecritsRoutes];
}
