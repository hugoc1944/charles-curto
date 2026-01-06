"use client";

import { motion as m } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";
import { motion } from "@/styles/motion";

/**
 * BookToggle
 *
 * Persistent navigation trigger.
 * This component is always visible and fixed to the viewport.
 *
 * Responsibilities:
 * - Display open / close state
 * - Trigger navigation toggle
 * - Provide subtle, calm micro-interactions
 *
 * IMPORTANT:
 * - This component does NOT control routing
 * - This component does NOT render the overlay
 */
export function BookToggle() {
  const { isOpen, toggle } = useNavigation();

  return (
    <m.button
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
      className={`
        fixed
        top-6
        left-6
        md:left-20
        lg:left-28
        xl:left-32
        z-[120]
        flex items-center gap-3
        rounded-full
        px-4 py-3
        bg-transparent
        ${isOpen ? "text-white" : "text-[#C7A36A]"}
        select-none
        cursor-pointer
      `}
      initial={false}
      animate={{
        opacity: 1,
      }}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: motion.duration.fast,
        ease: motion.ease.calm,
      }}
    >
      {/* Book icon */}
      <m.span
        className="flex h-6 w-6 items-center justify-center"
        animate={{
          rotate: isOpen ? 0 : 0,
        }}
        transition={{
          duration: motion.duration.base,
          ease: motion.ease.calm,
        }}
      >
        {/* 
          Inline SVG keeps this component self-contained.
          We will refine the icon later if needed.
        */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V21L12 18L4 21V5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </m.span>

      {/* Label */}
      <m.span
        className="text-sm tracking-widest uppercase"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{
          duration: motion.duration.fast,
          ease: motion.ease.calm,
        }}
      >
        {isOpen ? "Fermer" : "Menu"}
      </m.span>
    </m.button>
  );
}
