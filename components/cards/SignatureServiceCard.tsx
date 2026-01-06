"use client";

import { CardElement } from "@/components/ui/CardElement";
import { CardBadge } from "@/components/ui/card/CardBadge";
import { CardTitle } from "@/components/ui/card/CardTitle";
import { CardFooter } from "@/components/ui/card/CardFooter";
import { Button } from "@/components/ui/Button";
import { PremiumFeatureList } from "@/components/ui/PremiumFeatureList";

export function SignatureServiceCard() {
  return (
    <CardElement className="w-[520px] p-8 flex flex-col">
      <CardBadge variant="outline">
        SÉANCE SIGNATURE
      </CardBadge>

      <CardTitle className="mt-5">
        Une première rencontre essentielle
      </CardTitle>

      {/* First paragraph */}
      <p className="font-body text-[18px] leading-[1.6] mt-3">
        Une séance d’une heure, confidentielle et personnalisée, guidée par une question
        simple&nbsp;:
      </p>

      {/* Highlighted question */}
      <p
        className="
          font-body
          font-bold
          text-[18px]
          
          bg-textHighlightGolden
          bg-clip-text
          text-transparent
        "
      >
        « Comment puis-je vous aider&nbsp;? »
      </p>

      {/* Italic paragraph */}
      <p className="font-body italic text-[18px] leading-[1.6] mt-4">
        Cette première rencontre permet d’évaluer la nature du travail à engager, dans un
        cadre clair, respectueux et sans engagement dans la durée.
      </p>

      <PremiumFeatureList
        className="mt-6"
        items={[
          "Échange confidentiel et sans jugement",
          "Séance d’une heure",
          "Téléphone ou cabinet (Paris / Lyon)",
          "Aucune obligation de poursuivre",
        ]}
      />

      <div className="flex-1" />

      <Button
        variant="primary"
        size="lg"
        className="w-full text-[18px] leading-[1.2] tracking-[0.08em] font-semibold normal-case py-[18px] mt-10"
      >
        Réserver la Séance Signature
      </Button>

      <CardFooter className="mt-5">
        Disponibilités limitées
      </CardFooter>
    </CardElement>
  );
}
