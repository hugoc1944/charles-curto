"use client";

import { RefObject } from "react";
import { useScroll, motion } from "framer-motion";

export function ScrollProgress({
  targetRef,
}: {
  targetRef: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

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
