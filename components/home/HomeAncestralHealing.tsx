"use client";

import { SectionPill } from "@/components/ui/SectionPill";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HomeAncestralHealing() {
  return (
    <section
      className="
        bg-white
        px-3 md:px-4
        pt-7
        mt-16 md:mt-20
      "
    >
      {/* DARK BLOCK */}
      <div
        className="
          max-w-[1170px]
          mx-auto
          bg-[#3A332C]

          px-6 sm:px-8
          py-14 sm:py-16 md:py-20

          grid
          grid-cols-1
          lg:grid-cols-[3fr_2fr]
          items-center
        "
      >
        {/* LEFT — TEXT */}
        <div className="flex justify-center">
          <div
            className="
              flex
              flex-col
              items-center
              text-center
              gap-4 sm:gap-5 md:gap-6
              max-w-[520px]
              w-full
            "
          >
            <SectionPill className="text-[14px] sm:text-[16px]">
              LIBÉREZ VOS LIGNÉES
            </SectionPill>

            <h2
              className="
                font-title
                font-semibold
                text-white
                text-[32px]
                leading-[1.1]

                sm:text-[36px]
                md:text-[48px]
              "
            >
              GUÉRISON ANCESTRALE &amp; HARMONISATION
            </h2>

            {/* CTA — smaller on mobile */}
            <div className="mt-2 sm:mt-4">
              <Link
                href="/ecrits/guerison-ancestrale-et-lignees"
                aria-label="Lire l’écrit sur la guérison ancestrale et les lignées"
              >
                <Button
                  variant="discover"
                  size="lg"
                >
                  DÉCOUVRIR
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT — VIDEO */}
        <div
          className="
            relative
            w-full
            h-[260px] sm:h-[320px]
            lg:h-[500px]
            mt-10 sm:mt-12 lg:mt-0
            bg-[#151a20]
            overflow-hidden
          "
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/liberer_les_chaines.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
