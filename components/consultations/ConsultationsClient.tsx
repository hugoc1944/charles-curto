"use client";

import { motion as m } from "framer-motion";
import { containerStagger } from "@/styles/motion";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageSection } from "@/components/layout/PageSection";

import { ConsultationsHeader } from "@/components/consultations/ConsultationsHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { ConsultationsThemes } from "@/components/consultations/ConsultationsThemes";
import { ConsultationsBooking } from "@/components/consultations/ConsultationsBooking";
import { AboutCharles } from "@/components/consultations/AboutCharles";
import { ConsultationsFAQ } from "@/components/consultations/ConsultationsFAQ";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export default function ConsultationsPage() {
  useScrollToHash(600);
  return (
    <PageTransition>
        <m.main
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="w-full"
        >
        {/* ===================== HEADER (FULL BLEED) ===================== */}
        <ConsultationsHeader />
        <ConsultationsThemes />
        <ConsultationsBooking />
        <AboutCharles/>
        <ConsultationsFAQ />

        </m.main>
    </PageTransition>
  );
}
