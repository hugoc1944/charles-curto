"use client";

import { useState, useRef } from "react";
import { ContactStep } from "./steps/ContactStep";
import { ModeStep } from "./steps/ModeStep";
import { CalendarStep } from "./steps/CalendarStep";
import { TimeStep } from "./steps/TimeStep";
import { ReviewStep } from "./steps/ReviewStep";
import { SuccessStep } from "./steps/SuccessStep";
import { AnimatePresence, motion } from "framer-motion";
import { PresentialInfoStep } from "./steps/PresentialInfoStep";


type BookingStep =
  | "contact"
  | "mode"
  | "presential-info"
  | "date"
  | "time"
  | "review"
  | "success";

interface BookingData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  location?: "paris" | "nice" | "other";
  mode?: "presential" | "phone" | "visio";
  date?: string;
  timeSlot?: "morning" | "afternoon" | "night";
}

export function BookingFlow({
  serviceType,
  onClose,
}: {
  serviceType: "classic" | "signature" | "urgent";
  onClose: () => void;
}) {
  const [step, setStep] = useState<BookingStep>("contact");
  const [data, setData] = useState<BookingData>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);


function updateData(partial: Partial<BookingData>) {
  setData((prev) => {
    let next = { ...prev, ...partial };

    if ("location" in partial && partial.location !== prev.location) {
      next.mode = undefined;
      next.date = undefined;
      next.timeSlot = undefined;

      if (step !== "contact") {
        setStep("mode");
      }
    }

    if ("mode" in partial && partial.mode !== prev.mode) {
        next.date = undefined;
        next.timeSlot = undefined;

        if (partial.mode === "presential") {
            setStep("presential-info");
        } else if (step === "presential-info") {
            setStep("date");
        }
    }

    return next;
  });
}



    const stepOrder: BookingStep[] = data.mode === "presential"
  ? ["contact", "mode", "presential-info", "review"]
  : ["contact", "mode", "date", "time", "review"];

    const leftSteps: Array<[BookingStep, string]> =
    data.mode === "presential"
        ? [
            ["contact", "Contact"],
            ["mode", "Type de consultation"],
            ["presential-info", "Organisation"],
            ["review", "Validation"],
        ]
        : [
            ["contact", "Contact"],
            ["mode", "Type de consultation"],
            ["date", "Date"],
            ["time", "Horaire"],
            ["review", "Validation"],
        ];
  function canAccess(target: BookingStep) {
    const currentIndex = stepOrder.indexOf(step);
    const targetIndex = stepOrder.indexOf(target);
    return targetIndex <= currentIndex;
  }

  function goToStep(next: BookingStep) {
    setStep(next);
  
    // Ensure scroll resets on every step change
    requestAnimationFrame(() => {
      contentRef.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }


  async function submitBooking() {
    setSubmitting(true);
    setError(null);
  
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          serviceType,
        }),
      });
  
      if (!res.ok) {
        throw new Error("Booking failed");
      }
    } catch (err) {
      setError(
        "Une erreur est survenue lors de l’envoi. Merci de réessayer."
      );
      throw err;
    } finally {
      setSubmitting(false);
    }
  }
  
  return (
        <div className="
        flex
        flex-col
        md:flex-row
        flex-1
        min-h-0
        rounded-none md:rounded-[18px]
        bg-[#F7F6F2]
        ">

        <div className="
            md:hidden
            mb-5
            flex
            items-center
            justify-between
            text-[12px]
            uppercase
            tracking-[0.22em]
            text-[#8F8A7E]
            ">
            <span>
                Étape {stepOrder.indexOf(step) + 1}
            </span>
            <span>
                / {stepOrder.length}
            </span>
        </div>

        {/* LEFT — Steps */}
        <aside className="
        hidden
        md:block
        w-[180px]
        border-r border-[#E5E2DA]
        p-6
        space-y-3
        text-[14px]
        shrink-0
        ">        
        {leftSteps.map(([key, label]) => (
        <button
            key={key}
            disabled={!canAccess(key)}
            onClick={() => goToStep(key)}
            className={`block text-left transition ${
            step === key
                ? "font-semibold text-[#1F2E5A]"
                : "text-[#8F8A7E] hover:text-[#1F2E5A]"
            } disabled:opacity-40 disabled:cursor-not-allowed`}
        >
            {label}
        </button>
        ))}
        </aside>

        {/* RIGHT — Scrollable content */}
        <div
        ref={contentRef}
        className="
            flex-1
            min-h-0
            overflow-y-auto
            px-4 py-6
            md:px-8 md:py-8
        "
        >
        <AnimatePresence mode="wait">
            <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            >
            {step === "contact" && (
                <ContactStep
                data={data}
                onNext={() => goToStep("mode")}
                onUpdate={updateData}
                />
            )}

           {step === "mode" && (
            <ModeStep
                value={data.mode}
                location={data.location}
                onChange={(mode) => updateData({ mode })}
                onBack={() => goToStep("contact")}
                onNext={() => {
                if (data.mode === "presential") {
                    goToStep("presential-info");
                } else {
                    goToStep("date");
                }
                }}
            />
            )}

            {step === "presential-info" && (
            <PresentialInfoStep
                onBack={() => goToStep("mode")}
                onNext={() => goToStep("review")}
            />
            )}

            {step === "date" && (
            <CalendarStep
                serviceType={serviceType}
                data={data}
                onUpdate={updateData}
                onNext={() => goToStep("time")}
                onBack={() => goToStep("mode")}
            />
            )}

            {step === "time" && data.date && (
                <TimeStep
                serviceType={serviceType}
                date={new Date(data.date)}
                selected={data.timeSlot}
                onSelect={(slot) => {
                    updateData({ timeSlot: slot });
                    goToStep("review");
                }}
                onBack={() => goToStep("date")}
                />
            )}

            {step === "review" && (
                <ReviewStep
                data={data}
                onBack={() => goToStep("time")}
                loading={submitting}
                error={error}
                onSubmit={async () => {
                    await submitBooking();
                    goToStep("success");
                }}
                />
            )}

            {step === "success" && (
                <SuccessStep onClose={onClose} />
            )}
            </motion.div>
        </AnimatePresence>

        </div>
    </div>
    );
    }
