import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Coordonnées et formulaire de contact pour joindre Charles Curto et son équipe. Toute demande est traitée avec attention et confidentialité.",
};

export default function Page() {
  return <ContactClient />;
}
