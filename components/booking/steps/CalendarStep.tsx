"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  addMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameDay,
  isSameMonth,
  isBefore,
  isAfter,
  startOfDay,
} from "date-fns";
import { fr } from "date-fns/locale";

interface CalendarStepProps {
  serviceType: "classic" | "signature" | "urgent";
  data: {
    date?: string;
  };
  onUpdate: (data: { date: string }) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CalendarStep({
  serviceType,
  data,
  onUpdate,
  onNext,
  onBack,
}: CalendarStepProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = startOfDay(new Date());

  const minDate = useMemo(() => {
    if (serviceType === "urgent") return today;
    return addDays(today, 2);
  }, [serviceType, today]);

  const maxDate = addMonths(today, 6);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });

    const days = [];
    let day = start;

    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  }, [currentMonth]);

  function isDisabled(date: Date) {
    if (!isSameMonth(date, currentMonth)) return true;
    if (isBefore(date, minDate)) return true;
    if (isAfter(date, maxDate)) return true;
    return false;
  }

  function selectDate(date: Date) {
    if (isDisabled(date)) return;

    onUpdate({
      date: date.toISOString(),
    });

    onNext();
  }

  return (
    <div className="space-y-8 max-w-[520px] mx-auto">
      {/* Header */}
      <div>
        <h2 className="font-title text-[28px] text-[#1F2E5A]">
          Choisissez une date
        </h2>
        <p className="mt-2 font-body text-[15px] text-[#6B6B6B]">
          Les disponibilités affichées correspondent aux prochains créneaux
          possibles.
        </p>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
          className="text-[#8F8A7E] cursor-pointer hover:text-[#1F2E5A] transition"
        >
          ←
        </button>

        <div className="font-title text-[18px] text-[#1F2E5A]">
          {format(currentMonth, "MMMM yyyy", { locale: fr })}
        </div>

        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="text-[#8F8A7E] cursor-pointer hover:text-[#1F2E5A] transition"
        >
          →
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-[13px] text-[#8F8A7E]">
        {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
        <div key={i}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const disabled = isDisabled(day);
          const selected =
            data.date && isSameDay(new Date(data.date), day);
          const isToday = isSameDay(day, today);

          return (
            <button
              key={day.toISOString()}
              onClick={() => selectDate(day)}
              disabled={disabled}
              className={`
                h-[42px]
                rounded-full
                text-[14px]
                transition
                ${
                disabled
                    ? "text-[#C8C5BE] cursor-not-allowed"
                    : "cursor-pointer text-[#1F2E5A] hover:bg-[#ECE9E2]"
                }
                ${selected ? "bg-[#C7A36A] text-white cursor-pointer" : ""}
                ${isToday && !selected ? "ring-1 ring-[#C7A36A]" : ""}
            `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>

      {/* Footer hint */}
      {serviceType !== "urgent" && (
        <p className="font-body text-[13px] text-[#8F8A7E]">
          Les consultations standards sont proposées à partir de J+2.
        </p>
      )}

      {/* Navigation */}
    <div className="flex items-center justify-between pt-4">
    <button
        onClick={onBack}
        className="
        text-[14px]
        text-[#6B6B6B]
        cursor-pointer
        hover:text-[#1F2E5A]
        transition
        "
    >
        ← Modifier le mode de consultation
    </button>
    </div>
    </div>
  );
}
