"use client";

import { motion as m } from "framer-motion";
import { useNavigation } from "@/navigation/NavigationContext";
import { fadeUp, motion } from "@/styles/motion";
import { useState } from "react";




/**
 * NavigationMenu
 *
 * Typography-first ceremonial navigation.
 * All text uses Garamond in this section.
 */
export function NavigationMenu() {
  const { navigateTo } = useNavigation();
  const [clickedHref, setClickedHref] = useState<string | null>(null);

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
      href: "/contact",
    },
  ];

  return (
    <nav className="w-full">
      <ul className="mx-auto max-w-5xl space-y-8 md:space-y-20">
        {items.map((item) => (
          <m.li
            key={item.href}
            variants={fadeUp}
            transition={{
              duration: motion.duration.slow,
              ease: motion.ease.calm,
            }}
            initial="rest"
            animate={clickedHref === item.href ? "rest" : "rest"}
            whileHover={clickedHref === item.href ? undefined : "hover"}
            className="relative"
          >
            <button
              onClick={() => {
                setClickedHref(item.href);
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
          </m.li>
        ))}
      </ul>
    </nav>
  );
}
