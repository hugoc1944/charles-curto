"use client";

import { motion as m } from "framer-motion";
import { containerStagger } from "@/styles/motion";

import { useScrollToHash } from "@/hooks/useScrollToHash";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageSection } from "@/components/layout/PageSection";
import { PageTransition } from "@/components/layout/PageTransition";

import { HomeHeroBanner } from "@/components/home/HomeHeroBanner";
import { HomeHeroMessage } from "@/components/home/HomeHeroMessage";
import { HomeAncestralHealing } from "@/components/home/HomeAncestralHealing";
import { HomeAboutCharles } from "@/components/home/HomeAboutCharles";
import { HomeQuoteBand } from "@/components/home/HomeQuoteBand";
import { HomeConsultationsSection } from "@/components/home/HomeConsultationsSection";
import { HomeAuthoritySection } from "@/components/home/HomeAuthoritySection";

/**
 * ACCUEIL (Home)
 *
 * Root page (/)
 * Uses Page Shell correctly.
 */
export default function HomeClient() {
  useScrollToHash(700);
  return (
    <PageTransition>
      <m.main
        variants={containerStagger}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* =========================================================
        ========================================================== */}
        <PageContainer>
          <PageSection>
            <HomeHeroBanner />
            <HomeHeroMessage />
          </PageSection>

          <PageSection>
            <HomeAncestralHealing />
            <HomeAboutCharles anchorId="home-a-propos"/>
          </PageSection>
        </PageContainer>

        {/* ===================== FULL BLEED ===================== */}
        <HomeQuoteBand />

        <PageContainer>
          <PageSection>
            <HomeConsultationsSection />
          </PageSection>
        </PageContainer>
        
        <HomeAuthoritySection />

      </m.main>
    </PageTransition>
  );
}
