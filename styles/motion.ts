// styles/motion.ts
import type { Easing } from "framer-motion";

export const motion = {
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.7,
  },

  ease: {
    calm: [0.4, 0.0, 0.2, 1] as Easing,
    enter: [0.2, 0.0, 0.0, 1] as Easing,
    exit: [0.4, 0.0, 1, 1] as Easing,
  },

  stagger: {
    items: 0.08,
    sections: 0.16,
  },
};

/* -------------------------------------------------
   Reusable variants
------------------------------------------------- */

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motion.stagger.items,
    },
  },
};
