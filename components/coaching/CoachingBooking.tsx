"use client";

import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { InfoNotice } from "@/components/ui/InfoNotice";
import { SignatureServiceCard } from "@/components/cards/SignatureServiceCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CoachingBooking() {
  return (
    <section className="w-screen bg-[#FCFAF5] py-2 md:py-24">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">

        <SectionSeparator />

        {/* Intro */}
        <div className="text-center mt-10 md:mt-15 mb-15 md:mb-20">
          <h2 className="font-title leading-[1] text-[38px] md:text-[72px] text-[#1F2E5A] font-semibold">
            Réservez votre accompagnement avec Charles Curto
          </h2>

          <p className="font-body text-[18px] font-light md:font-normal md:text-[22px] mt-4 max-w-[90%] md:max-w-[85%] mx-auto">
            Chaque accompagnement débute par une première séance, qui permet de poser
            un cadre clair et d’évaluer la justesse d’un travail dans la durée.
          </p>
        </div>

        {/* Overline */}
        <p className="text-center font-body text-[#777] tracking-[0.26em] uppercase text-[14px] md:text-[18px] mb-2">
          Consultation privée
        </p>

        <h3 className="text-center leading-[1] md:leading-[1.5] font-title text-[32px] text-[#1F2E5A] md:text-[48px] mb-10">
          Séance Signature
        </h3>

        {/* Card */}
        <div className="flex justify-center mb-6">
          <SignatureServiceCard />
        </div>

        {/* Micro line */}
        <p className="
          text-center
          font-body
          font-light
          text-[#6B6B6B]
          text-[16px]
          md:text-[16px]
          tracking-[0.17em]
          mt-12
          mb-8
        ">
          Cette première séance est le point de départ de tout accompagnement.
        </p>

        {/* Info box */}
        <InfoNotice>
          Les accompagnements sont volontairement limités afin de préserver une relation
          de travail attentive, stable et approfondie dans le temps.
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
          <TestimonialCard quote="Précis et profondément structurant." author="Paris" />
          <TestimonialCard quote="Un accompagnement rare dans la durée." author="Lyon" />
          <TestimonialCard quote="Clarté et stabilité sur le long terme." author="Lisbonne" />
          <TestimonialCard quote="Présence constante et juste." author="Toulouse" />
          <TestimonialCard quote="Un travail sérieux, sans promesse creuse." author="Madrid" />
          <TestimonialCard quote="Une relation de confiance." author="Porto" />
        </div>

        <SectionSeparator />

      </div>
    </section>
  );
}
