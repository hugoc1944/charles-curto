"use client";

import { CardElement } from "@/components/ui/CardElement";
import { Button } from "@/components/ui/Button";
import { StarBadge } from "../ui/StarBadge";
import Link from "next/link";

export function HomePrivateConsultationCard() {
  return (
  <CardElement className="p-6 pt-8 md:p-8 pb-5 flex flex-col">
    <div className="flex items-center gap-2">
        <StarBadge />

        <h3 className="font-title text-[36px] leading-[1] md:leading-[1.5] font-semibold text-text">
            Consultations privées
        </h3>
    </div>

      <p className="font-body text-[21px] mt-3 md:mt-0 leading-[1.6] text-[#6B6B6B]">
        Téléphone · Cabinet Paris / Nice
      </p>

      <p className="font-body text-[21px] leading-[1.7] text-text">
        Une séance d’une heure pour éclaircir une question essentielle 
        et recevoir une guidance directe. Idéal pour apaiser les tensions 
        familiales, clarifier un chemin ou dissiper ce qui vous pèse.
      </p>

      <div className="flex flex-col gap-3 mt-auto pt-8">
        {/* Buttons (aligned) */}
        <div className="flex flex-col gap-3">
          <Link href="/consultations" className="inline-block">
            <Button variant="primary" className="w-full text-[19px]">
               Découvrir la consultation
            </Button>
          </Link>
          
          <Link href="/consultations#consultations-modalites">
            <Button variant="soft" className="w-full text-[19px]">
              Modalités
            </Button>
          </Link>
        </div>

        {/* Helper text placeholder — IMPORTANT */}
        <div className="h-[18px]" />
      </div>
    </CardElement>
  );
}
