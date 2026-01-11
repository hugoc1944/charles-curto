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
          max-w-[1200px]
          mx-auto
          bg-[#3A332C]

          px-6 sm:px-8
          py-14 sm:py-16 md:py-20

          grid
          grid-cols-1
          lg:grid-cols-[2.7fr_2.3fr]
          items-center
          gap-8 lg:gap-10
        "
      >
        {/* LEFT — TEXT (fully centered) */}
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

            {/* Title */}
            <h2 className="font-title text-white leading-[1.05]">
              <span
                className="
                  block
                  px-10
                  md:px-0
                  text-[24px]
                  sm:text-[24px]
                  md:text-[28px]
                  font-medium
                  tracking-[0.04em]
                  opacity-90
                "
              >
                GUÉRISON ANCESTRALE &amp;
              </span>

              <span
                className="
                  block
                  text-[36px]
                  sm:text-[44px]
                  md:text-[56px]
                  font-semibold
                "
              >
                HARMONISATION
              </span>
            </h2>

            {/* CTA */}
            <div className="mt-2 sm:mt-4">
              <Link
                href="/ecrits/guerison-ancestrale-et-lignees"
                aria-label="Lire l’écrit sur la guérison ancestrale et les lignées"
              >
                <Button variant="discover" size="lg">
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
            h-[300px] sm:h-[360px]
            lg:h-[520px]
            bg-[#151a20]
            overflow-hidden
          "
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/placeholder/guerison_ancestral.png"
          >
            <source
              src="/videos/guerison_ancestral.webm"
              type="video/webm"
            />
            <source
              src="/videos/guerison_ancestral.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
