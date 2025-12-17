"use client";

import { motion as m } from "framer-motion";
import { motion, fadeUp, containerStagger } from "@/styles/motion";

export default function Home() {
  return (
    <m.main
      className="p-16 space-y-16"
      variants={containerStagger}
      initial="hidden"
      animate="visible"
    >
      {/* Titles */}
      <m.section
        variants={fadeUp}
        transition={{
          duration: motion.duration.slow,
          ease: motion.ease.calm,
        }}
      >
        <h1 className="font-title text-5xl text-primary">
          Cormorant Garamond Title
        </h1>
        <p className="font-body mt-4">
          Source Sans Pro body text for reading comfort.
        </p>
        <p className="font-brand text-accent text-3xl mt-2">
          Charles Curto
        </p>
      </m.section>

      {/* Gradients */}
      <m.section
        className="space-y-4"
        variants={fadeUp}
        transition={{
          duration: motion.duration.base,
          ease: motion.ease.calm,
        }}
      >
        <div className="h-20 rounded-xl bg-goldenLinear shadow-goldCTA" />
        <div className="h-20 rounded-xl bg-softButtonLinear shadow-softCard" />
        <div className="h-20 rounded-xl bg-textHighlightGolden" />
        <div className="h-20 rounded-xl bg-navGradient" />
      </m.section>

      {/* Cards */}
      <m.section
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={fadeUp}
        transition={{
          duration: motion.duration.base,
          ease: motion.ease.calm,
        }}
      >
        <div className="rounded-2xl bg-white p-6 shadow-softCard">
          <h3 className="font-title text-xl">Consultation</h3>
          <p className="font-body mt-2">Soft spiritual container.</p>
        </div>

        <div className="rounded-2xl bg-goldenLinear p-6 shadow-goldCTA space-y-4">
          <button
            className="
              font-body
              px-10 py-4
              rounded-full
              bg-goldenLinear
              shadow-goldCTA
              text-[#1B1E23]
              tracking-wide
              transition-all
              duration-300
              hover:brightness-105
              active:translate-y-[1px]
            "
          >
            Réserver la Séance Signature
          </button>

          <button
            className="
              font-body
              px-10 py-4
              rounded-full
              bg-softButtonLinear
              shadow-softCard
              text-text
              transition-all
              duration-300
              hover:brightness-105
            "
          >
            Une question avant de réserver ?
          </button>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-darkSm">
          <p className="font-body">Dark subtle shadow</p>
        </div>
      </m.section>
    </m.main>
  );
}
