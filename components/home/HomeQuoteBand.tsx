"use client";

import { FullBleed } from "@/components/layout/FullBleed";

export function HomeQuoteBand() {
  return (
    <FullBleed>
      <section className="w-full bg-[#FCFAF5] mt-25 lg:mt-50">
        {/* =========================================================
           Decorative band (GIF)
        ========================================================== */}
        <div
          className="
            w-full
            h-[120px]
            md:h-[220px]
            lg:h-[241px]
            bg-center
            bg-cover
          "
          style={{
            backgroundImage: "url('/gifs/band.gif')",
          }}
        />

        {/* =========================================================
           Quote content
        ========================================================== */}
        <div
          className="
            w-full
            flex
            justify-center
            text-center
            px-4
            md:px-6
            pt-35
            md:py-10
            md:mt-50
          "
        >
          <div className="max-w-[940px] mx-auto space-y-10">
            {/* Quote */}
            <p
              className="
                font-title
                italic
                font-semibold
                lg:font-medium
                text-[#1F2E5A]
                text-[42px]
                leading-[1.1]
                lg:leading-[1.3]
                md:text-[48px]
                md:leading-[1]
                lg:text-[64px]
              "
            >
              “N’oublie jamais d’apaiser ton esprit.
              <br />
              C’est ainsi que s’ouvrent les chemins de ta vie.”
            </p>

            {/* Attribution */}
            <p
              className="
                font-body
                font-light
                text-text
                text-[22px]

                md:text-[28px]

                tracking-[0.04em]
              "
            >
              — Charles Curto
            </p>

            {/* Mission */}
            <p
              className="
                mt-25
                lg:mt-30
                font-body
                font-light
                text-[#1F2E5A]
                text-[22px]

                md:text-[26px]
                tracking-[0.04em]
              "
            >
              Accompagner chacun vers cette paix <br/>intérieure
              est le cœur de ma mission.
            </p>
          </div>
        </div>
      </section>
    </FullBleed>
  );
}
