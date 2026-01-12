"use client";

import { CardElement } from "@/components/ui/CardElement";
import { CardBadge } from "@/components/ui/card/CardBadge";
import { CardTitle } from "@/components/ui/card/CardTitle";
import { CardDescription } from "@/components/ui/card/CardDescription";
import { CardFeatureList } from "@/components/ui/card/CardFeatureList";
import { CardFooter } from "@/components/ui/card/CardFooter";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/contexts/BookingContext";

export function ClassicServiceCard() {
  const { openBooking } = useBooking();
  return (
    <CardElement className="p-6 pt-8 md:p-8 flex flex-col h-full">
      <CardBadge variant="outline">CONSULTATION CLASSIQUE</CardBadge>

      <CardTitle className="mt-6 text-[30px] font-semibold leading-[1.1]">
        À partir de 72 h
      </CardTitle>

      <CardDescription className="mt-3 font-body text-[16px] leading-[1.6] text-[#6B6B6B]">
        <strong>La formule la plus calme et la plus demandée.</strong><br />
        Cette consultation s’adresse aux situations pouvant attendre quelques jours.
        Elle offre un cadre posé, propice à l’écoute, à la compréhension et à la
        clarification de votre situation.
      </CardDescription>

      <CardFeatureList
        className="mt-4 text-[15px]"
        items={[
          "Séance d’une heure",
          "Téléphone ou cabinet (Paris / Nice)",
          "Échange confidentiel et sans jugement",
          "Le meilleur choix « calme & premium »",
        ]}
      />

      <div className="flex-1" />

      <Button
        variant="primary"
        size="lg"
        className="w-full text-[18px] normal-case mt-8 leading-[1]"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "booking_start",
                service_type: "classic",
                service_category: "consultation",
              });
            }

            openBooking("classic");
          }}
      >
        Réserver une consultation — téléphone / cabinet
      </Button>

      <CardFooter className="mt-4 text-[14px] text-[#6B6B6B]">
        Disponibilités limitées
      </CardFooter>
    </CardElement>

  );
}
