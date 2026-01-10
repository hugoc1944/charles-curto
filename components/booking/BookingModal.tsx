"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useBooking } from "@/contexts/BookingContext";
import { motion as motionTokens } from "@/styles/motion";
import { BookingFlow } from "./BookingFlow";

export function BookingModal() {
  const { isOpen, serviceType, closeBooking } = useBooking();

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-[120] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <m.div
            className="absolute inset-0 bg-black/40"
            onClick={closeBooking}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
            <m.div
            className="
                relative
                z-10
                w-full
                bg-[#FCFAF5]
                w-full
                h-full
                md:max-w-[760px]
                md:max-h-[85vh]
                md:h-auto
                mx-0 md:mx-4
                rounded-none md:rounded-[22px]
                px-4 py-4
                md:px-10 md:py-8
                flex
                flex-col
            "
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{
                duration: motionTokens.duration.base,
                ease: motionTokens.ease.calm,
            }}
            >
            {/* Close */}
            <button
              onClick={closeBooking}
              className="
                absolute
                top-4 right-4
                md:top-5 md:right-5
                text-[18px]
                md:text-[16px]
                cursor-pointer
                text-[#8F8A7E]
                hover:text-[#1F2E5A]
                transition
                "
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-4 md:mb-3">
              <p className="font-body text-[13px] tracking-[0.28em] uppercase text-[#8F8A7E] mb-2">
                Demande de réservation
              </p>

              <h2 className="font-title text-[#1F2E5A] text-[26px] md:text-[34px] leading-[1.1]">
                {serviceType === "classic" && "Consultation privée"}
                {serviceType === "signature" && "Séance Signature"}
                {serviceType === "urgent" && "Demande urgente"}
              </h2>

              <p className="mt-2 md:mt-3 font-body text-[15px] md:text-[17px] leading-[1.6] text-[#5F5B52]">
                Votre demande sera transmise au secrétariat.  
                Vous serez recontacté(e) par téléphone afin de confirmer
                les modalités.
              </p>
            </div>

            <BookingFlow
            serviceType={serviceType!}
            onClose={closeBooking}
            />          
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
