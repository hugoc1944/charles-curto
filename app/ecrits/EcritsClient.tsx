"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion as m } from "framer-motion";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import type { Ecrit } from "@/lib/ecrits";
import { PageFade } from "@/components/transitions/PageFade";
import { VeilLink } from "@/components/navigation/VeilLink";

interface Props {
  ecrits: Ecrit[];
}

export default function EcritsClient({ ecrits }: Props) {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);

  /* =========================================================
     DERIVED DATA (HOOKS MUST BE INSIDE COMPONENT)
  ========================================================= */

  const allThemes = useMemo(
    () => Array.from(new Set(ecrits.flatMap((e) => e.meta.themes))),
    [ecrits]
  );

  const filteredEcrits = useMemo(() => {
    if (!activeTheme) return ecrits;
    return ecrits.filter((e) =>
      e.meta.themes.includes(activeTheme)
    );
  }, [activeTheme, ecrits]);

  return (
    <PageFade>
    <section className="w-full pt-32 pb-40">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* =========================================================
           HEADER
        ========================================================== */}
        <div className="mb-10 md:mb-15">
          <h1 className="font-title text-[#1F2E5A] text-[56px] md:text-[80px] leading-[1] font-semibold md:font-normal">
            ÉCRITS
          </h1>

          <p className="mt-6 font-title text-[#1F2E5A] text-[26px] md:text-[40px] leading-[1.1] max-w-[620px]">
            Articles, ressources & réflexions
          </p>
        </div>

        {/* =========================================================
           THEMES — MOBILE
        ========================================================== */}
        <div className="mb-16 md:hidden">
          <p className="font-body text-[13px] tracking-[0.32em] uppercase text-[#8F8A7E] mb-5">
            Thématiques
          </p>

          <div className="flex flex-wrap gap-3">
            <ThemeButton
              label="Tous"
              active={activeTheme === null}
              onClick={() => setActiveTheme(null)}
            />

            {allThemes.map((theme) => (
              <ThemeButton
                key={theme}
                label={theme}
                active={activeTheme === theme}
                onClick={() => setActiveTheme(theme)}
              />
            ))}
          </div>
        </div>

        {/* =========================================================
           TWO COLUMN LAYOUT
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-20">

          {/* LEFT — ÉCRITS LIST */}
          <div className="space-y-2">
            {filteredEcrits.map((ecrit, index) => (
              <div key={ecrit.slug}>
                <m.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={{
                    rest: {
                      backgroundColor: "transparent",
                      paddingLeft: 0,
                      paddingRight: 0,
                    },
                    hover: {
                      backgroundColor: "#ECE9E2",
                      paddingLeft: 24,
                      paddingRight: 24,
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-[18px] "
                >
                  <VeilLink
                    href={`/ecrits/${ecrit.slug}`}
                    className="block py-8 text-left w-full cursor-pointer"
                  >
                    <h2 className="font-title text-[#1F2E5A] text-[30px] md:text-[38px] leading-[1.15] transition-colors duration-500 group-hover:text-[#C7A36A]">
                      {ecrit.meta.title}
                    </h2>

                    <p className="mt-4 font-body text-[18px] leading-[1.6] text-[#5F5B52] max-w-[640px]">
                      {ecrit.meta.description}
                    </p>

                    <p className="mt-3 font-body text-[14px] tracking-[0.18em] uppercase text-[#8F8A7E]">
                      Lecture {ecrit.meta.readingTime}
                    </p>
                  </VeilLink>
                </m.div>

                {index < filteredEcrits.length - 1 && (
                  <div className="py-2">
                    <SectionSeparator />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT — THEMES (DESKTOP) */}
          <aside className="hidden md:block md:pt-2">
            <p className="font-body text-[13px] tracking-[0.32em] uppercase text-[#8F8A7E] mb-6">
              Thématiques
            </p>

            <div className="flex flex-wrap gap-3">
              <ThemeButton
                label="Tous"
                active={activeTheme === null}
                onClick={() => setActiveTheme(null)}
              />

              {allThemes.map((theme) => (
                <ThemeButton
                  key={theme}
                  label={theme}
                  active={activeTheme === theme}
                  onClick={() => setActiveTheme(theme)}
                />
              ))}
            </div>
          </aside>
        </div>

        {/* SOFT CLOSING CTA */}
        <div className="mt-40 text-center">
          <p className="font-body text-[17px] leading-[1.6] text-[#5F5B52] max-w-[420px] mx-auto">
            Certaines réflexions appellent parfois un échange plus personnel.
          </p>

          <div className="mt-6">
            <Link
              href="/consultations"
              className="inline-block font-body text-[16px] tracking-[0.2em] uppercase text-[#1F2E5A] hover:text-[#C7A36A] transition"
            >
              Éclairer une situation
            </Link>
          </div>
        </div>

      </div>
    </section>
    </PageFade>
  );
}

/* =========================================================
   THEME BUTTON
========================================================= */
function ThemeButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-[14px] cursor-pointer font-body transition ${
        active
          ? "bg-[#1F2E5A] text-white"
          : "bg-white text-[#1F2E5A] hover:bg-[#ECE9E2]"
      }`}
    >
      {label}
    </button>
  );
}
