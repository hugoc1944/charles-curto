"use client";

import { Button } from "@/components/ui/Button";

interface PresentialInfoStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function PresentialInfoStep({
  onNext,
  onBack,
}: PresentialInfoStepProps) {
  return (
    <div className="max-w-[520px] mx-auto space-y-8">
      <div className="space-y-3">
        <h2 className="font-title text-[28px] text-[#1F2E5A]">
          Consultation en cabinet
        </h2>

        <p className="font-body text-[16px] leading-[1.7] text-[#5F5B52]">
          Les consultations en cabinet sont organisées directement par notre
          équipe afin de garantir la meilleure disponibilité possible.
        </p>

        <p className="font-body text-[15px] leading-[1.7] text-[#5F5B52]">
          Vous serez contacté(e) dans un délai inférieur à 24 heures
          <span className="text-[#8F8A7E]"> (généralement sous quelques heures)</span> afin de confirmer le créneau.
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="softFilled" onClick={onBack}>
          Retour
        </Button>

        <Button variant="authority" size="lg" onClick={onNext}>
          Continuer
        </Button>
      </div>
    </div>
  );
}
