"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { motion as motionTokens } from "@/styles/motion";

const faqItems = [
  {
    question: "En quoi consiste le coaching privé exclusif ?",
    answer:
      "Le coaching privé exclusif est un accompagnement individuel dans la durée. Il permet d’aborder des périodes clés de votre vie avec continuité, clarté et profondeur, en adaptant le rythme et les séances à vos besoins.",
  },
  {
    question: "Comment débute un accompagnement ?",
    answer:
      "Chaque accompagnement débute par une Séance Signature. Cette première rencontre permet de poser un cadre clair, d’évaluer la nature du travail à engager et de vérifier si un accompagnement dans la durée est pertinent.",
  },
  {
    question: "Quelle est la différence avec une consultation privée ?",
    answer:
      "La consultation privée répond à une question ou une situation précise. Le coaching exclusif s’inscrit dans le temps, avec un suivi régulier et une relation de travail construite séance après séance.",
  },
  {
    question: "À quelle fréquence ont lieu les séances ?",
    answer:
      "La fréquence est définie ensemble, en fonction de votre situation, de vos périodes de vie et de votre rythme personnel. Elle peut évoluer au fil du temps.",
  },
  {
    question: "Y a-t-il un engagement dans la durée ?",
    answer:
      "Non. Le coaching repose sur une relation libre et ajustée. Chaque accompagnement se construit progressivement, sans engagement imposé, dans le respect de votre cheminement.",
  },
  {
    question: "Le coaching peut-il se faire à distance ?",
    answer:
      "Oui. Les séances peuvent avoir lieu par téléphone ou en visio, avec la même qualité de présence, d’écoute et de guidance qu’en cabinet.",
  },
  {
    question: "Les échanges sont-ils confidentiels ?",
    answer:
      "Absolument. Le coaching exclusif repose sur une relation de confiance. Tous les échanges sont strictement confidentiels et respectent pleinement votre vie privée.",
  },
];

export function CoachingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full py-10 mb-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Title */}
        <h2 className="font-title text-[48px] leading-[1] md:leading-[1.5] md:text-[64px] text-center mb-6 md:mb-10">
          Avant votre accompagnement
        </h2>

        {/* Accordion */}
        <div className="space-y-10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                {/* Question row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-title text-[22px] md:text-[24px]">
                    {item.question}
                  </span>

                  {/* Arrow */}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{
                      duration: motionTokens.duration.base,
                      ease: motionTokens.ease.calm,
                    }}
                    className="ml-4 text-[#1F2E5A]"
                  >
                    →
                  </motion.span>
                </button>

                {/* Separator */}
                <div className="mt-4">
                  <SectionSeparator />
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: motionTokens.duration.slow,
                        ease: motionTokens.ease.calm,
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        exit={{ y: -6 }}
                        transition={{
                          duration: motionTokens.duration.base,
                          ease: motionTokens.ease.calm,
                        }}
                        className="
                          mt-6
                          font-body
                          text-[17px]
                          leading-[1.7]
                          text-[#6B6B6B]
                        "
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
