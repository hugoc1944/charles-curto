"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";
import { motion, containerStagger, fadeUp } from "@/styles/motion";
import { NavigationMenu } from "@/navigation/NavigationMenu";
import { ReturnHome } from "@/navigation/ReturnHome";

export function NavigationOverlay() {
  const { isOpen } = useNavigation();

  return (
    <AnimatePresence >
      {isOpen && (
        <m.div
          key="navigation-overlay"
          className="
            fixed inset-0
            z-[110]
            bg-navGradient
            overflow-hidden
          "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: motion.duration.base,
                ease: motion.ease.calm,
              },
            },
          }}
        >
          {/* Grid layer */}
          <div className="pointer-events-none absolute inset-0 flex">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`d-${i}`}
                className="hidden md:block flex-1 border-l border-white/5"
              />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`m-${i}`}
                className="block md:hidden flex-1 border-l border-white/5"
              />
            ))}
          </div>

          {/* Content */}
          <m.div
            className="relative z-[1] flex h-full items-center"
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
                className="
                w-full
                px-6
                md:px-20
                lg:px-28
                xl:px-32
                "
            >
                  {/* Return to home */}
                <ReturnHome />
                <NavigationMenu />
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
