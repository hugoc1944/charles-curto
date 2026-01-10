"use client";

import { Button } from "@/components/ui/Button";

interface ContactStepProps {
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    location?: "paris" | "nice" | "other";
  };
  onUpdate: (data: Partial<ContactStepProps["data"]>) => void;
  onNext: () => void;
}

export function ContactStep({
  data,
  onUpdate,
  onNext,
}: ContactStepProps) {
  const isValid =
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phone &&
    data.location;

  return (
    <div className="max-w-[520px] mx-auto space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <h2 className="font-title text-[28px] text-[#1F2E5A]">
          Vos coordonnées
        </h2>
        <p className="font-body text-[15px] text-[#6B6B6B]">
          Ces informations nous permettent de vous recontacter
          afin de confirmer votre consultation.
        </p>
      </div>

      {/* Fields */}
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Prénom"
            value={data.firstName || ""}
            onChange={(v) => onUpdate({ firstName: v })}
          />
          <Field
            label="Nom"
            value={data.lastName || ""}
            onChange={(v) => onUpdate({ lastName: v })}
          />
        </div>

        <Field
          label="Adresse e-mail"
          type="email"
          value={data.email || ""}
          onChange={(v) => onUpdate({ email: v })}
        />
        <div className="space-y-1">
        <label className="font-body text-[14px] text-[#5F5B52]">
            Lieu de consultation souhaité
        </label>

        <select
            value={data.location || ""}
            onChange={(e) =>
            onUpdate({
                location: e.target.value as "paris" | "nice" | "other",
            })
            }
            className="
            w-full
            rounded-[14px]
            px-4
            py-3
            bg-white
            border
            border-[#E5E2DA]
            focus:outline-none
            focus:border-[#C7A36A]
            text-[#1F2E5A]
            "
        >
            <option value="" disabled>
            Sélectionnez une option
            </option>
            <option value="paris">Paris</option>
            <option value="nice">Nice</option>
            <option value="other">Autre ville / À distance</option>
        </select>

        <p className="font-body text-[13px] text-[#8F8A7E]">
            Les consultations en cabinet sont disponibles uniquement à Paris et Nice.
        </p>
        </div>

        <div className="space-y-1">
          <Field
            label="Téléphone"
            type="tel"
            value={data.phone || ""}
            onChange={(v) => onUpdate({ phone: v })}
          />
          <p className="font-body text-[13px] text-[#8F8A7E]">
            Nous vous contacterons à ce numéro pour confirmer la consultation.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Button
          variant="authority"
          size="lg"
          className="w-full"
          disabled={!isValid}
          onClick={onNext}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Field component (internal, controlled, elegant)
------------------------------------------------------- */

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="font-body text-[14px] text-[#5F5B52]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-[14px]
          px-4
          py-3
          bg-white
          border
          border-[#E5E2DA]
          focus:outline-none
          focus:border-[#C7A36A]
        "
      />
    </div>
  );
}
