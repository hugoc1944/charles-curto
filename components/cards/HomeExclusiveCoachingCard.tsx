"use client";

import { CardElement } from "@/components/ui/CardElement";
import { Button } from "@/components/ui/Button";
import { StarBadge } from "../ui/StarBadge";
import Link from "next/link";

export function HomeExclusiveCoachingCard() {
  return (
    <CardElement className="p-6 pt-8 md:p-8 pb-5 flex flex-col">
          <div className="flex items-center gap-2">
              <StarBadge />
      
              <h3 className="font-title text-[36px] leading-[1] md:leading-[1.5] font-semibold text-text">
                Coaching Exclusif
              </h3>
          </div>

      <p className="font-body text-[21px] leading-[1.6] mt-3 md:mt-0 text-[#6B6B6B]">
        Téléphone · Cabinet Paris / Nice
      </p>

      <p className="font-body text-[21px] leading-[1.7] text-text">
        Un accompagnement personnalisé pour libérer vos blocages, réaligner vos 
        chemins intérieurs et transformer durablement ce qui freine votre vie. Un 
        suivi confidentiel, étape par étape, pour résoudre vos problématiques familiales, émotionnelles et énergétiques.
      </p>

      <div className="flex flex-col mt-auto gap-3 pt-8">
        {/* Buttons (aligned) */}
        <div className="flex flex-col gap-3">
          <Link href="/coaching" className="inline-block">
            <Button variant="primary" className="w-full text-[19px]">
              Découvrir l’accompagnement
            </Button>
          </Link>

          <Button variant="soft" className="w-full text-[19px]">
            Comprendre le coaching exclusif
          </Button>
        </div>

        {/* Helper text */}
        <div className="h-[18px] flex items-center justify-center">
          <span className="text-[20px] md:text-[18px] text-[#6B6B6B] font-light">
            Première séance
          </span>
        </div>
      </div>
    </CardElement>
  );
}
