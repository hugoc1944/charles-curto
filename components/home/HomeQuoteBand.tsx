"use client";

import { FullBleed } from "@/components/layout/FullBleed";

export function HomeQuoteBand() {
  return (
    <FullBleed>
      <section className="w-full mt-25 lg:mt-50">
        {/* =========================================================
           Decorative band (VIDEO)
        ========================================================== */}
        <div
          className="
            relative
            w-full
            h-[120px]
            md:h-[220px]
            lg:h-[241px]
            overflow-hidden
            bg-black
          "
          aria-hidden="true"
        >
          <video
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover

            /* Mobile-only overscan fix */
            max-md:-top-[1px]
            max-md:-bottom-[1px]
            max-md:-left-[1px]
            max-md:-right-[1px]
            max-md:w-[calc(100%+2px)]
            max-md:h-[calc(100%+2px)]
          "
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/placeholder/band.png"
        >
          <source src="/videos/band.webm" type="video/webm" />
          <source src="/videos/band.mp4" type="video/mp4" />
        </video>
        </div>

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
              Accompagner chacun vers cette paix <br />
              intérieure est le cœur de ma mission.
            </p>
          </div>
        </div>
      </section>
    </FullBleed>
  );
}
