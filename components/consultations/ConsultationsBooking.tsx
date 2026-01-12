"use client";

import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { InfoNotice } from "@/components/ui/InfoNotice";
import { UrgentServiceCard } from "@/components/cards/UrgentServiceCard";
import { ClassicServiceCard } from "@/components/cards/ClassicServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ConsultationsBooking() {
  return (
    <section className="w-full py-2 md:py-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        <SectionSeparator id="consultations-modalites"/>

        {/* Intro */}
        <div className="text-center mt-10 md:mt-15 mb-15 md:mb-20">
          <h2 className="font-title leading-[1] text-[38px] md:text-[72px] text-[#1F2E5A] font-semibold">
            Réservez votre séance avec Charles Curto
          </h2>

          <p className="font-body text-[18px] font-light md:font-normal md:text-[22px] mt-4 max-w-[90%] md:max-w-[85%] mx-auto">
            Cette première séance d’une heure permet d’éclairer votre situation et de
            définir comment Charles peut vous accompagner.
            Une option spécifique est proposée pour les situations urgentes.
          </p>
        </div>

        {/* Overline */}
        <p className="text-center font-body text-[#777] tracking-[0.26em] uppercase text-[14px] md:text-[18px] mb-2">
          Consultations privées
        </p>

        <h3 className="text-center leading-[1] md:leading-[1.5] font-title text-[32px] text-[#1F2E5A] md:text-[48px] mb-6">
          Choisissez le délai de votre séance
        </h3>

        {/* Cards */}
        <div className="md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-14">
          <UrgentServiceCard />
          <ClassicServiceCard />
        </div>

        {/* Info box */}
        <InfoNotice>
          Les rendez-vous sont volontairement limités afin de préserver un cadre de travail
          calme et attentif pour chaque séance. Les créneaux disponibles peuvent évoluer
          selon les périodes.
        </InfoNotice>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 mt-10 leading-[1] md:leading-[1.5]">
          <Link href="/contact" className="inline-block">
            <Button variant="softFilled" size="lg">
              Une question avant de réserver ? Écrivez-nous
            </Button>
          </Link>
          <Button variant="authority" size="lg">
            Ressources gratuites — Instagram
          </Button>
        </div>

        {/* Testimonials */}
        <h3 className="font-title text-[48px] text-center mt-20 mb-3">
          Ils témoignent
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          <TestimonialCard className="" quote="Précis et apaisant — j’ai pu décider." author="Paris" />
          <TestimonialCard quote="Décision prise sereinement." author="Nice" />
          <TestimonialCard quote="RDV rapide, clarté immédiate." author="Lisbon" />
          <TestimonialCard quote="Plan d’action limpide." author="Toulouse" />
          <TestimonialCard quote="Sans jugement, mais d’une justesse rare." author="Madrid" />
          <TestimonialCard quote="Très haut niveau." author="Porto" />
        </div>

        <SectionSeparator />

      </div>
    </section>
  );
}
