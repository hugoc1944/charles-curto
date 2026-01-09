import type { Metadata } from "next";
import { getAllEcrits } from "@/lib/ecrits";
import EcritsClient from "./EcritsClient";

export const metadata: Metadata = {
  title: "Écrits - Réflexions & lectures | Charles Curto",
  description:
    "Une sélection d’écrits et de réflexions autour des trajectoires de vie, de l’intuition et des transmissions invisibles.",
};

export default function EcritsPage() {
  const ecrits = getAllEcrits(); 

  return <EcritsClient ecrits={ecrits} />;
}
