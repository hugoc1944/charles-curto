// components/cards/UrgentServiceCard.tsx
"use client";

import { CardElement } from "@/components/ui/CardElement";
import {
  CardBadge,
  CardTitle,
  CardDescription,
  CardFeatureList,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";

import { useBooking } from "@/contexts/BookingContext";

export function UrgentServiceCard() {
  const { openBooking } = useBooking();
  return (
    <CardElement className="p-6 pt-8 md:p-8 flex flex-col h-full">
      <CardBadge variant="dark">EN URGENCE</CardBadge>

      <CardTitle className="mt-6 text-[30px] font-semibold leading-[1.1]">
        Moins de 24h
      </CardTitle>

      <CardDescription className="mt-3 font-body text-[16px] leading-[1.6] text-[#6B6B6B]">
        Cette option est réservée aux moments où une décision, une rupture ou une
        situation émotionnelle ne peut attendre. La demande est étudiée
        personnellement avant confirmation, selon les disponibilités.
      </CardDescription>

      <CardFeatureList
        className="mt-4 text-[15px]"
        items={[
          "Séance d’une heure",
          "Téléphone ou visio",
          "Confirmation préalable obligatoire",
          "Échange confidentiel et sans jugement",
        ]}
      />

      <div className="flex-1" />

      <Button
        variant="primary"
        size="lg"
        className="w-full text-[18px] normal-case mt-8 leading-[1] "
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "booking_start",
                service_type: "urgent",
                service_category: "consultation",
              });
            }

            openBooking("urgent");
          }}
      >
        Demande urgente — téléphone / visio
      </Button>

      <CardFooter className="mt-4 text-[14px] text-[#6B6B6B]">
        Disponibilités limitées
      </CardFooter>
    </CardElement>

  );
}
