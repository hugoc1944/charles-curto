"use client";

import { Button } from "@/components/ui/Button";
import { isToday } from "date-fns";
import { useEffect } from "react";

type TimeSlot = "morning" | "afternoon" | "night";

interface TimeStepProps {
  serviceType: "classic" | "signature" | "urgent";
  date: Date;
  selected?: TimeSlot;
  onSelect: (slot: TimeSlot) => void;
  onBack: () => void;
}

const SLOTS: {
  key: TimeSlot;
  label: string;
  range: string;
}[] = [
  { key: "morning", label: "Matin", range: "07:00 – 12:00" },
  { key: "afternoon", label: "Après-midi", range: "14:00 – 18:00" },
  { key: "night", label: "Soir", range: "20:00 – 22:00" },
];
const SLOT_START_HOURS: Record<TimeSlot, number> = {
  morning: 7,
  afternoon: 14,
  night: 20,
};

export function TimeStep({
  serviceType,
  date,
  selected,
  onSelect,
  onBack,
}: TimeStepProps) {
  const now = new Date();

  function getNextAvailableSlot(): TimeSlot | null {
    if (serviceType !== "urgent") return null;
    if (!isToday(date)) return null;

    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;

    return (
        (["morning", "afternoon", "night"] as TimeSlot[]).find(
        (slot) => currentHour < SLOT_START_HOURS[slot]
        ) ?? null
    );
    }
    const nextAvailableSlot = getNextAvailableSlot();

    function isSlotDisabled(slot: TimeSlot) {
    if (serviceType !== "urgent") return false;
    if (!isToday(date)) return false;

    return slot !== nextAvailableSlot;
    }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-title text-[26px] text-[#1F2E5A]">
          Choisissez un créneau
        </h2>
        <p className="mt-2 font-body text-[15px] text-[#6B6B6B]">
          Les horaires exacts seront confirmés lors de l’appel.
        </p>
      </div>

      {/* Slots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SLOTS.map((slot) => {
          const disabled = isSlotDisabled(slot.key);
          const active = selected === slot.key;

          return (
            <button
                key={slot.key}
                type="button"
                disabled={disabled}
                onClick={disabled ? undefined : () => onSelect(slot.key)}
                className={`
                    rounded-[16px]
                    border
                    px-6
                    py-6
                    text-left
                    transition
                    ${
                    active
                        ? "bg-[#1F2E5A] text-white border-[#1F2E5A] cursor-pointer"
                        : disabled
                        ? "bg-[#F1F0EB] text-[#9A9A9A] border-[#E5E2DA] cursor-not-allowed"
                        : "bg-white border-[#E5E2DA] hover:bg-[#ECE9E2] cursor-pointer"
                    }
                `}
              >
              <div className="font-title text-[20px]">
                {slot.label}
              </div>

              <div
                className={`mt-1 text-[14px] ${
                  active ? "text-white/80" : "text-[#6B6B6B]"
                }`}
              >
                {slot.range}
              </div>

              {disabled && (
                <div className="mt-3 text-[12px] italic">
                  Indisponible aujourd’hui
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBack}
          className="text-[14px]  text-[#6B6B6B] cursor-pointer hover:text-[#1F2E5A]"
        >
          ← Modifier la date
        </button>

        <Button
          variant="authority"
          size="md"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}
