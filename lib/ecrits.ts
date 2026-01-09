import "server-only";
import { ECRITS } from "@/content/ecrits";

export interface Ecrit {
  slug: string;
  meta: {
    title: string;
    description: string;
    readingTime: string;
    themes: string[];
  };
}

/* =========================================================
   SLUGS
========================================================= */
export function getEcritSlugs(): string[] {
  return Object.keys(ECRITS);
}

/* =========================================================
   SINGLE ÉCRIT
========================================================= */
export function getEcritBySlug(slug: string): Ecrit {
  const meta = ECRITS[slug];

  if (!meta) {
    throw new Error("Écrit not found");
  }

  return {
    slug,
    meta,
  };
}

/* =========================================================
   ALL ÉCRITS
========================================================= */
export function getAllEcrits(): Ecrit[] {
  return Object.entries(ECRITS).map(([slug, meta]) => ({
    slug,
    meta,
  }));
}

/* =========================================================
   RELATED ÉCRITS
========================================================= */
export function getRelatedEcrits(
  currentSlug: string,
  themes: string[],
  limit = 2
): Ecrit[] {
  return getAllEcrits()
    .filter(
      (e) =>
        e.slug !== currentSlug &&
        e.meta.themes.some((t) => themes.includes(t))
    )
    .slice(0, limit);
}
