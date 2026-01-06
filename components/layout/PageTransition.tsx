"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "@/styles/motion";
import { useReducedMotion } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";

export function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const { navigationKey } = useNavigation();

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={navigationKey}
        initial={{
          opacity: 0,
          filter: prefersReducedMotion ? "none" : "blur(8px)",
        }}
        animate={{
          opacity: 1,
          filter: "none",
        }}
        exit={{
          opacity: 0,
          filter: prefersReducedMotion ? "none" : "blur(8px)",
        }}
        transition={{
          duration: motion.duration.base + 0.15,
          ease: motion.ease.calm,
        }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
