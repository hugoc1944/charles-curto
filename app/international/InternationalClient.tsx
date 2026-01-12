"use client";

import { motion as m } from "framer-motion";
import { containerStagger } from "@/styles/motion";

import { PageContainer } from "@/components/layout/PageContainer";
import { PageSection } from "@/components/layout/PageSection";

import { InternationalHeader } from "@/components/international/InternationalHeader";
import { InternationalIntro } from "@/components/international/InternationalIntro";
import { InternationalCountries } from "@/components/international/InternationalCountries";
import { InternationalClosingNote } from "@/components/international/InternationalClosingNote";

export default function InternationalClient() {
  return (
    <m.main
      variants={containerStagger}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <PageContainer>
        <PageSection>
          <InternationalHeader />
        </PageSection>

        <PageSection>
          <InternationalIntro />
        </PageSection>

        <PageSection>
          <InternationalCountries />
        </PageSection>

        <PageSection>
          <InternationalClosingNote />
        </PageSection>
      </PageContainer>
    </m.main>
  );
}
