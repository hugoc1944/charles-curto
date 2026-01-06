"use client";

import { HomePrivateConsultationCard } from "@/components/cards/HomePrivateConsultationCard";
import { HomeExclusiveCoachingCard } from "@/components/cards/HomeExclusiveCoachingCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";

export function HomeConsultationsSection() {
  return (
    <section
      className="
        bg-white
        px-3
        md:px-4
        md:pt-7
        pb-20
        mt-5
      "
    >
      <div className="flex flex-col gap-12">
        {/* =========================================================
           Header
        ========================================================== */}
        <div className="text-center max-w-[910px] mx-auto space-y-5 md:space-y-10 pt-10">
          <h2 className="font-title leading-[1] text-[48px] md:text-[64px] font-semibold text-[#C7A36A]">
            Consultations privées,
            <br />
            Accompagnement spirituel exclusif
          </h2>

          <p className="font-body px-5 md:px-0 font-light text-[24px] leading-[1.3] text-[#1B1E23]">
            Une guidance profonde pour éclairer votre chemin de vie,
            dissiper ce qui vous entrave et nourrir les décisions qui
            orientent votre destinée.
          </p>
        </div>

        {/* =========================================================
           Cards
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-6 max-w-[960px] mx-auto">
          <HomePrivateConsultationCard />
          <HomeExclusiveCoachingCard />
        </div>

        {/* =========================================================
           Testimonials
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          <TestimonialCard
            quote="En 30 minutes, j’ai compris et décidé. Changement immédiat."
            author="Anne S., Paris (tél)"
          />
          <TestimonialCard
            quote="En 30 minutes, j’ai compris et décidé. Changement immédiat."
            author="Anne S., Paris (tél)"
          />
          <TestimonialCard
            quote="En 30 minutes, j’ai compris et décidé. Changement immédiat."
            author="Anne S., Paris (tél)"
          />
        </div>

        {/* =========================================================
           Bottom CTAs
        ========================================================== */}
        <div className="flex flex-col items-center gap-4">
          <Button variant="authority" size="lg" className=" md:px-60">
            À propos de Charles
          </Button>

          <Button variant="primary" size="lg" className=" md:px-53">
            Réserver votre Séance Privée
          </Button>
        </div>
      </div>
    </section>
  );
}
