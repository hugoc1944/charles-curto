"use client";

import { useScroll, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-[2px]
        origin-left
        bg-goldenLinear
        z-50
      "
    />
  );
}
