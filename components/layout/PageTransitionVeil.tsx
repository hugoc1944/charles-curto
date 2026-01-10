"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";

export function PageTransitionVeil() {
  const { isTransitioning } = useNavigation();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <m.div
          key="page-veil"
          className="
            fixed inset-0 z-[200]
            bg-[#FCFAF5]
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      )}
    </AnimatePresence>
  );
}
