import type { Metadata } from "next";
import ConsultationsClient from "@/components/consultations/ConsultationsClient";

export const metadata: Metadata = {
  title: "Consultations privées — Séance individuelle",
  description:
    "Une consultation confidentielle d’une heure pour éclairer une situation essentielle, prendre une décision ou retrouver de la clarté. Séances individuelles, sur rendez-vous.",

  openGraph: {
    title: "Consultations privées — Charles Curto",
    description:
      "Une séance individuelle et confidentielle pour clarifier une situation, prendre une décision ou apaiser un moment clé.",
  },
};

export default function Page() {
  return <ConsultationsClient />;
}
