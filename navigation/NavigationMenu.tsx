"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";
import { motion } from "@/styles/motion";
import { useState } from "react";

type NavMode = "root" | "ecrits";

export function NavigationMenu() {
  const { navigateTo } = useNavigation();
  const [navMode, setNavMode] = useState<NavMode>("root");

  const items = [
    {
      title: "CONSULTATIONS",
      description: "Éclairer une situation\nessentielle",
      href: "/consultations",
    },
    {
      title: "COACHING EXCLUSIF",
      description: "Un accompagnement\ndans la durée",
      href: "/coaching",
    },
    {
      eyebrow: "AU-DELÀ DES FRONTIÈRES",
      title: "INTERNATIONAL",
      description: "Consultations à distance ·\nFrance & international",
      href: "/international",
    },
    {
      title: "ÉCRITS & CONTACT",
      description: "Articles, ressources\n& échanges",
      action: () => setNavMode("ecrits"),
    },
  ];

  const subItems = [
    {
      title: "ÉCRITS",
      description: "Articles, ressources\n& réflexions",
      href: "/ecrits",
    },
    {
      title: "CONTACT",
      description: "Entrer en relation\n& échanges",
      href: "/contact",
    },
  ];

  /** Renders ONLY the inner content (no <li>) */
  const ItemContent = (item: any) => (
    <button
      onClick={() => {
        if (item.action) {
          item.action();
          return;
        }
        navigateTo(item.href);
      }}
      className="relative w-full text-left cursor-pointer"
    >
      {/* Hover background */}
      <m.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 0.8 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="
          absolute
          inset-y-[-15px]
          md:inset-y-[-32px]
          left-1/2
          -translate-x-1/2
          w-[105%]
          md:w-[calc(100%+224px)]
          rounded-l
          bg-[#FCFAF5]
          z-0
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {item.eyebrow && (
          <m.div
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#1E3EC9" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              font-title
              font-semibold
              text-[16px] md:text-[18px]
              tracking-[0.4em]
            "
          >
            {item.eyebrow}
          </m.div>
        )}

        <div className="flex flex-col md:flex-row md:items-center">
          <m.h2
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#1E3EC9" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              font-title
              text-[36px] md:text-[64px]
              leading-[0.9] md:leading-[0.82]
              tracking-wide
            "
          >
            {item.title}
          </m.h2>

          <m.p
            variants={{
              rest: { color: "#ffffff" },
              hover: { color: "#1E3EC9" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="
              mt-2
              md:mt-0
              md:ml-4
              font-title
              text-[17px] md:text-[20px]
              leading-[1.1] md:leading-[1]
              whitespace-normal md:whitespace-pre-line
              max-w-md
            "
          >
            {item.description}
          </m.p>
        </div>
      </div>
    </button>
  );

  return (
    <nav className="w-full">
      <AnimatePresence mode="wait">
        {navMode === "root" && (
          <m.ul
            key="root"
            className="mx-auto max-w-5xl space-y-8 md:space-y-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: motion.duration.base,
              ease: motion.ease.calm,
            }}
          >
            {items.map((item) => (
              <m.li
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="hover"
                transition={{
                  duration: motion.duration.slow,
                  ease: motion.ease.calm,
                }}
                className="relative"
              >
                {ItemContent(item)}
              </m.li>
            ))}
          </m.ul>
        )}

        {navMode === "ecrits" && (
          <m.ul
            key="ecrits"
            className="mx-auto max-w-5xl space-y-8 md:space-y-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: motion.duration.base,
              ease: motion.ease.calm,
            }}
          >
            {/* Retour */}
            <m.li
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: motion.duration.base,
                ease: motion.ease.calm,
              }}
            >
              <button
                onClick={() => setNavMode("root")}
                className="font-title text-[#ffffff] text-[20px] cursor-pointer"
              >
                ← RETOUR
              </button>
            </m.li>

            {subItems.map((item, index) => (
              <m.li
                key={item.title}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="hover"
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: motion.duration.slow,
                  ease: motion.ease.calm,
                }}
                className="relative"
              >
                {ItemContent(item)}
              </m.li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
