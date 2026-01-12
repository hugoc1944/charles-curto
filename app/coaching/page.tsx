import type { Metadata } from "next";
import CoachingClient from "@/components/coaching/CoachingClient";

export const metadata: Metadata = {
  title: "Coaching privé — Accompagnement dans la durée",
  description:
    "Un accompagnement individuel dans la durée, fondé sur la clarté, la stabilité et une relation de confiance. Une présence continue pour traverser les étapes essentielles de votre vie.",

  openGraph: {
    title: "Coaching privé — Charles Curto",
    description:
      "Un accompagnement individuel et confidentiel, construit dans le temps, pour avancer avec clarté, stabilité et discernement.",
  },
};


export default function Page() {
  return <CoachingClient />;
}
