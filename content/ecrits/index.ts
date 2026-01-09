// content/ecrits/index.ts
import type { Ecrit } from "@/lib/ecrits";

export const ECRITS: Record<string, Ecrit["meta"]> = {
  "comprendre-les-repetitions": {
    title: "Comprendre les répétitions dans une trajectoire de vie",
    description:
      "Pourquoi certaines situations reviennent malgré les décisions prises, et comment en comprendre le sens.",
    readingTime: "5 min",
    themes: ["Trajectoires de vie", "Répétitions"],
  },
};
