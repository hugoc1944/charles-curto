// content/ecrits/index.ts
import type { Ecrit } from "@/lib/ecrits";

export const ECRITS: Record<string, Ecrit["meta"]> = {
  "alignement-spirituel-et-liberation": {
    title: "Alignement spirituel et libération des chaînes invisibles",
    description:
      "Lorsque l’énergie se disperse et que le chemin semble freiné, un réalignement intérieur peut redonner cohérence et clarté au mouvement.",
    readingTime: "6 min",
    themes: ["Alignement spirituel", "Énergie", "Libération intérieure"],
  },

  "guerison-ancestrale-et-lignees": {
    title: "Guérison ancestrale et harmonisation des lignées",
    description:
      "Certaines entraves trouvent leur origine au-delà de l’individu. Comprendre les dynamiques de lignée permet parfois de libérer ce qui ne nous appartient pas.",
    readingTime: "8 min",
    themes: ["Guérison ancestrale", "Lignées", "Énergie", "Transmission"],
  },
};