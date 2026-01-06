"use client";

import { motion as m } from "framer-motion";
import clsx from "clsx";
import { motion as motionTokens } from "@/styles/motion";

type ButtonVariant = "primary" | "discover" | "soft" | "dark" | "authority" | "softFilled";
type ButtonSize = "md" | "lg" | "discoverCompact";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const shadowVariants = {
  primary: {
    rest: "0 8px 24px rgba(199,163,106,0.25)",
    hover: "0 18px 48px rgba(199,163,106,0.45)",
    tap: "0 6px 16px rgba(199,163,106,0.25)",
  },
  dark: {
    rest: "0 8px 24px rgba(15,30,74,0.35)",
    hover: "0 18px 48px rgba(15,30,74,0.55)",
    tap: "0 6px 16px rgba(15,30,74,0.35)",
  },
  soft: {
    rest: "0 8px 24px rgba(199,163,106,0.25)",
    hover: "0 18px 48px rgba(199,163,106,0.45)",
    tap: "0 6px 16px rgba(199,163,106,0.25)",
  },
  discover: {
    rest: "none",
    hover: "none",
    tap: "none",
  },
  authority: {
    rest: "0 4px 4px rgba(0,0,0,0.25)",
    hover: "0 6px 8px rgba(0,0,0,0.28)",
    tap: "0 3px 3px rgba(0,0,0,0.22)",
  },
  softFilled: {
    rest: "0 4px 4px rgba(0,0,0,0.25)",
    hover: "0 6px 8px rgba(0,0,0,0.28)",
    tap: "0 3px 3px rgba(0,0,0,0.22)",
  },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const isDiscover = variant === "discover";

  return (
    <m.button
      type={type}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap={isDiscover ? "rest" : "tap"}
      variants={{
        rest: {
          y: 0,
          scale: 1,
          boxShadow: shadowVariants[variant].rest,
        },
        hover: {
          y: isDiscover ? 0 : -4,
          scale: isDiscover ? 1 : 1.015,
          boxShadow: shadowVariants[variant].hover,
        },
        tap: {
          y: 0,
          scale: isDiscover ? 1 : 0.97,
          boxShadow: shadowVariants[variant].tap,
        },
      }}
      transition={{
        duration: motionTokens.duration.base,
        ease: motionTokens.ease.calm,
      }}
      className={clsx(
        "relative overflow-hidden",
        "inline-flex items-center justify-center",
        "font-body tracking-wide",
        "focus:outline-none",

        // Sizes (default buttons)
        size === "md" && !isDiscover && "px-8 py-3 text-[15px]",
        size === "lg" && !isDiscover && "px-10 py-4 text-[19px]",

        // Discover spacing (wider)
        size === "md" && isDiscover && "px-16 py-3 text-[15px]",
        size === "lg" && isDiscover && "px-16 md:px-26 py-3 md:py-4 text-[21px]",

        // Variants
        variant === "primary" &&
          "bg-goldenLinear text-[#1B1E23] rounded-full font-semibold ",

        variant === "discover" &&
          [
            "bg-goldenLinear",
            "font-title font-bold",     // Garamond + bold
            "text-primary [color:#1F2E5A]",               // #1F2E5A
            "uppercase tracking-[0.2em]",
            "rounded-none",
          ],

        variant === "soft" &&
          "gradient-stroke-gold text-text rounded-[15px]",

        variant === "dark" &&
          "gradient-stroke-gold-dark text-white rounded-[15px]",

        variant === "authority" &&
          [
            "bg-[#1B1E23]",
            "text-white",
            "font-body font-semibold",
            "text-[19px]",
            "tracking-[0.05em]",
            "rounded-[14px]",
            "px-15 md:px-25 py-4",
          ],
          variant === "softFilled" &&
            [
              "bg-softButtonLinear",
              "gradient-stroke-gold",
              "text-[#1B1E23]",
              "rounded-[14px]",
              "font-body",
              "tracking-[0.04em]",
            ],
        className
      )}
    >
      {/* Premium shine layer (hover only, no physical motion) */}
      <m.span
        className="button-shine"
        variants={{
          rest: { opacity: 0, x: "-30%" },
          hover: { opacity: 1, x: "30%" },
          tap: { opacity: 0 },
        }}
        transition={{
          duration: 0.9,
          ease: motionTokens.ease.calm,
        }}
      />

      {/* Content */}
      <span className="relative z-20">{children}</span>
    </m.button>
  );
}
