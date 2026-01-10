"use client";

import clsx from "clsx";

interface ModeCardProps {
  label: string;
  description: string;
  disabled?: boolean;
  note?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function ModeCard({
  label,
  description,
  disabled = false,
  note,
  selected,
  onClick,
}: ModeCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={clsx(
        "w-full text-left rounded-[18px] p-5 border transition",
        "flex flex-col gap-1",

        /* Visual state */
        selected
          ? "border-[#C7A36A] bg-[#F6F3EC]"
          : "border-[#E5E2DA] bg-white",

        /* Interaction state */
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "cursor-pointer hover:border-[#C7A36A]"
      )}
    >
      <div className="font-title text-[20px] text-[#1F2E5A]">
        {label}
      </div>

      <div className="font-body text-[15px] text-[#5F5B52]">
        {description}
      </div>

      {note && (
        <div className="mt-1 text-[13px] text-[#8F8A7E] italic">
          {note}
        </div>
      )}
    </button>
  );
}
