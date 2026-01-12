"use client";

import { TrustPill } from "@/components/ui/TrustPill";

export function CoachingHeader() {
  return (
    <section
      className="
        w-full
        pt-28
        md:pt-36
      "
    >
      <div
        className="
          max-w-[980px]
          mx-auto
          px-0
          md:px-6
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* ================= TITLE ================= */}
        <h1
          className="
            font-title
            text-[#1F2E5A]
            text-[56px]
            font-semibold
            md:font-normal
            leading-[1]
            md:text-[80px]
          "
        >
          Coaching Privé
          <br />
          Exclusif
        </h1>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
            font-title
            text-[#1F2E5A]
            text-[32px]
            md:text-[46px]
            leading-[1]
            pt-10
            px-15
            mb:px-0
          "
        >
          <span className="text-[#C7A36A]">
            Un accompagnement dans la durée
          </span>
          , pour traverser les étapes essentielles de votre vie
          avec clarté et soutien.
        </p>

        {/* ================= TRUST PILLS ================= */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-1
            md:gap-3
            pt-7
            md:pt-5
          "
        >
          <TrustPill>Accompagnement dans la durée</TrustPill>
          <TrustPill>40+ ans d’expérience</TrustPill>
          <TrustPill>Relation de confiance</TrustPill>
          <TrustPill>Présence continue</TrustPill>
          <TrustPill>Coaching individuel</TrustPill>
          <TrustPill>Paris · Nice</TrustPill>
        </div>
      </div>
    </section>
  );
}
