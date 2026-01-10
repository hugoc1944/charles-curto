"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { motion as motionTokens } from "@/styles/motion";

const faqItems = [
  {
    question: "Quels types de situations peut-on aborder en consultation ?",
    answer:
      "Situations familiales, décisions importantes, périodes de blocage, relations, schémas répétitifs, orientation personnelle ou professionnelle, déséquilibres émotionnels ou énergétiques.",
  },
  {
    question: "Comment se déroule une première consultation ?",
    answer:
      "La séance dure une heure. Elle commence par un échange permettant de clarifier votre situation, suivi d’une guidance adaptée à vos besoins, dans un cadre calme, confidentiel et sans jugement.",
  },
  {
    question:
      "Quelle est la différence entre consultation privée et coaching exclusif ?",
    answer:
      "La consultation privée répond à une question ou une situation précise. Le coaching exclusif s’inscrit dans la durée, avec un accompagnement plus approfondi et évolutif.",
  },
  {
    question: "Les consultations peuvent-elles se faire à distance ?",
    answer:
      "Oui. Les consultations peuvent avoir lieu par téléphone ou en visio, avec la même qualité d’écoute et de guidance qu’en présentiel.",
  },
  {
    question: "Proposez-vous des consultations en urgence ?",
    answer:
      "Oui. Une formule spécifique est proposée pour les situations urgentes nécessitant une réponse rapide, sous réserve de disponibilités.",
  },
  {
    question: "Faut-il se préparer avant une consultation ?",
    answer:
      "Aucune préparation particulière n’est nécessaire. Il suffit d’aborder la séance avec ouverture et sincérité.",
  },
  {
    question: "Les consultations sont-elles confidentielles ?",
    answer:
      "Absolument. Tous les échanges sont strictement confidentiels et menés dans le respect total de votre vie privée.",
  },
];

export function ConsultationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full bg-[#FCFAF5] py-10">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Title */}
        <h2 className="font-title text-[48px] leading-[1] md:leading-[1.5] md:text-[64px] text-[#1F2E5A] text-center mb-6 md:mb-10">
          Avant votre consultation
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
