"use client";

import { motion as m } from "framer-motion";
import { containerStagger } from "@/styles/motion";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageSection } from "@/components/layout/PageSection";
import { PageTransition } from "@/components/layout/PageTransition";
import { CoachingHeader } from "@/components/coaching/CoachingHeader";
import { CoachingStatement } from "@/components/coaching/CoachingStatement";
import { ConsultationsThemes } from "@/components/consultations/ConsultationsThemes";
import { CoachingCoreStatement } from "@/components/coaching/CoachingCoreStatement";
import { CoachingBooking } from "@/components/coaching/CoachingBooking";
import { AboutCharles } from "@/components/consultations/AboutCharles";
import { CoachingFAQ } from "@/components/coaching/CoachingFAQ";
import { useScrollToHash } from "@/hooks/useScrollToHash";



export default function CoachingClient() {
  useScrollToHash(600);
  return (
    <PageTransition>
        <m.main
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="w-full"
        >
          <CoachingHeader/>
          <CoachingStatement/>
          <ConsultationsThemes/>
          <CoachingCoreStatement/>
          <CoachingBooking/>
          <AboutCharles/>
          <CoachingFAQ/>
        </m.main>
    </PageTransition>
  );
}
