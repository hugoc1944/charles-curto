"use client";

import { Button } from "@/components/ui/Button";

interface SuccessStepProps {
  onClose?: () => void;
}

export function SuccessStep({ onClose }: SuccessStepProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[420px] mx-auto space-y-6">
      
      {/* Visual anchor */}
      <div className="w-12 h-12 rounded-full bg-[#EDE9DF] flex items-center justify-center">
        <span className="text-[22px] text-[#1F2E5A]">✓</span>
      </div>

      {/* Title */}
      <h2 className="font-title text-[26px] text-[#1F2E5A]">
        Votre demande a bien été envoyée
      </h2>

      {/* Body */}
      <p className="font-body text-[16px] leading-[1.7] text-[#5F5B52]">
        Un email de confirmation vient de vous être adressé.
      </p>

      <p className="font-body text-[16px] leading-[1.7] text-[#5F5B52]">
        Nous vous contacterons prochainement par téléphone afin de confirmer
        les modalités de votre consultation.
      </p>

      {/* Gentle closure */}
      <p className="font-body text-[14px] text-[#8F8A7E] pt-2">
        Vous pouvez désormais fermer cette fenêtre en toute tranquillité.
      </p>

      {/* Optional action */}
      {onClose && (
        <div className="pt-4">
          <Button variant="softFilled" size="md" onClick={onClose}>
            Fermer
          </Button>
        </div>
      )}
    </div>
  );
}
