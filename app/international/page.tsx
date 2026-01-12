import type { Metadata } from "next";
import InternationalClient from "./InternationalClient";

export const metadata: Metadata = {
  title: "Présence internationale",
  description:
    "Présentation de la présence internationale de Charles Curto et accès aux espaces dédiés selon les pays et les périodes.",
};

export default function Page() {
  return <InternationalClient />;
}
