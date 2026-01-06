"use client";

import { FullBleed } from "@/components/layout/FullBleed";
import { Button } from "@/components/ui/Button";

export function HomeAuthoritySection() {
  return (
    <FullBleed>
      <section className="w-full bg-[#FCFAF5] pt-55 pb-55 md:pt-58 px-4">
        <div className="max-w-[920px] mx-auto flex flex-col items-center gap-7">
          
          {/* =========================================================
             Title & subtitle (centered)
          ========================================================== */}
          <div className="text-center space-y-6">
            <h2 className="font-title font-semibold text-[42px] md:text-[48px] leading-[1.1]">
              Charles Curto | Guidance Spirituelle &<br />
              Accompagnement Énergétique
            </h2>

            <p className="font-body font-light text-[24px] text-[#6B6B6B]">
              Consultations en France et à l’international – par téléphone ou en cabinet
            </p>
          </div>

          {/* =========================================================
             Authority text (left aligned)
          ========================================================== */}
          <div className="max-w-[760px] text-left space-y-6">
            <p className="font-body font-light text-[24px] md:text-[26px] leading-[1.6] text-text">
              Reconnu pour son <span className="font-normal">approche profonde</span> et son{" "}
              <span className="font-normal">écoute rare</span>, Charles accompagne depuis plus
              de quarante ans des personnes{" "}
              <span className="font-normal">en France, en Europe et au-delà</span>.
              Ses consultations,{" "}
              <span className="font-normal">par téléphone ou en présentiel à Paris et Lyon</span>,
              offrent une guidance claire, apaisante et directement orientée vers la
              résolution de vos problématiques essentielles.
            </p>
          </div>

          {/* =========================================================
             CTA
          ========================================================== */}
          <Button variant="authority">
            Découvrir les consultations
          </Button>
        </div>
      </section>
    </FullBleed>
  );
}
