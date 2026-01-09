"use client";

import { TrustPill } from "@/components/ui/TrustPill";

export function ConsultationsHeader() {
  return (
    <section
      className="
        w-screen
        bg-[#FCFAF5]
        pt-28
        md:pt-36
        pb-25
        md:pb-52
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
          Consultations
          <br />
          Privées
        </h1>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
            font-title
            text-[#1F2E5A]
            text-[32px]
            md:text-[46px]
            leading-[1]
            max-w-[250px]
            md:max-w-[640px]
            pt-10
          "
        >
          Éclairez une situation essentielle lors d’un échange
          confidentiel d’une heure.
        </p>

        {/* ================= TRUST PILLS ================= */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-1
            md:gap-3
            pt-5
            md:pt-5
          "
        >
          <TrustPill>Une pratique reconnue</TrustPill>
          <TrustPill>40+ ans d’expérience</TrustPill>
          <TrustPill>Guidance confidentielle</TrustPill>
          <TrustPill>Paris · Lyon</TrustPill>
        </div>
      </div>
    </section>
  );
}
