"use client";

import { SectionPill } from "@/components/ui/SectionPill";
import { Button } from "@/components/ui/Button";

export function HomeHeroMessage() {
  return (
    <section
      className="
        w-full
        bg-white
        px-3 md:px-4
        pt-20 md:pt-28
        pb-12 md:pb-20
        flex
        items-center
        justify-center
      "
    >
      {/* VIDEO FRAME */}
      <div
        className="
          relative
          w-full
          min-h-[85vh] md:min-h-[95vh]
          overflow-hidden
          bg-black
        "
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/liberer_les_chaines.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
          <div
            className="
              max-w-[340px]
              sm:max-w-[390px]
              lg:max-w-[1170px]
              mx-auto
              flex
              flex-col
              items-center
              gap-4 sm:gap-5 lg:gap-2
            "
          >
            {/* Pill */}
            <SectionPill className="text-[14px] sm:text-[16px]">
              ALIGNEMENT SPIRITUEL
            </SectionPill>

            {/* Title */}
            <h1
              className="
                font-title
                font-semibold
                text-white
                text-[36px]
                leading-[1.08]

                sm:text-[42px]
                sm:leading-[1.05]

                md:text-[56px]
                md:leading-[0.9]

                lg:text-[64px]
              "
            >
              LIBÉRER LES CHAÎNES
              <br />
              QUI FREINENT VOTRE VIE
            </h1>

            {/* Subtitle */}
            <p
              className="
                font-title
                text-white
                text-[20px]
                sm:text-[24px]
                md:text-[36px]
                uppercase
                tracking-[0.04em] md:tracking-[0.05em]
                leading-[1.15]
              "
            >
              RÉÉQUILIBRER VOS CENTRES
              <br />
              ÉNERGÉTIQUES
            </p>

            {/* CTA */}
            <div className="mt-5 sm:mt-6">
              <Button
                variant="discover"
                size="lg"
              >
                DÉCOUVRIR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
