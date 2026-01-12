import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Charles Curto",
  description:
    "Charles Curto est un accompagnant spirituel indépendant. Son approche repose sur la clarté intérieure, l’écoute profonde et une présence structurante, au service de celles et ceux en recherche de sens.",

  openGraph: {
    title: "Charles Curto",
    description:
      "Présence, clarté intérieure et accompagnement spirituel. Découvrir le parcours et la démarche de Charles Curto.",
  },
};


export default function Page() {
  return <HomeClient />;
}
