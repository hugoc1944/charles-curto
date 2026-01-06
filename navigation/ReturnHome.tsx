"use client";

import { motion as m } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";
import { motion } from "@/styles/motion";

/**
 * ReturnHome
 *
 * Secondary navigation action.
 * Allows the user to return to the homepage
 * without scanning the main navigation list.
 */
export function ReturnHome() {
  const { navigateTo } = useNavigation();

  return (
    <m.button
      onClick={() => navigateTo("/")}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: motion.duration.base,
        ease: motion.ease.calm,
      }}
      className="
        absolute
        top-10
        right-6
        md:right-20
        lg:right-28
        xl:right-32
        text-white
        text-[18px]
        font-title
        tracking-wide
        opacity-80
        hover:opacity-100
        transition-opacity
        cursor-pointer
      "
    >
      <span className="italic lowercase">revenir</span>{" "}
      <span className="uppercase">à ACCUEIL</span>
    </m.button>
  );
}
