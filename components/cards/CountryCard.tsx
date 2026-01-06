// components/cards/CountryCard.tsx
"use client";

import { CardElement } from "@/components/ui/CardElement";
import { CardBadge } from "@/components/ui/card/CardBadge";
import { CardTitle } from "@/components/ui/card/CardTitle";
import { CardDescription } from "@/components/ui/card/CardDescription";
import { Button } from "@/components/ui/Button";

interface CountryCardProps {
  country: string;
  title: string;
  description: string;
  domain: string;
}

export function CountryCard({
  country,
  title,
  description,
  domain,
}: CountryCardProps) {
  return (
    <CardElement className="w-[360px] p-8 flex flex-col">
      <CardBadge variant="outline">
        {country}
      </CardBadge>

      <CardTitle className="mt-5">
        {title}
      </CardTitle>

      <CardDescription className="mt-3">
        {description}
      </CardDescription>

      {/* Domain line — follows same rhythm slot as feature list */}
      <div className="mt-4 font-body text-[16px] text-[#6B6B6B] flex items-center gap-2">
        <span className="text-accent">✦</span>
        <span className="italic">{domain}</span>
      </div>

      <div className="flex-1" />

      <Button
        variant="primary"
        size="md"
        className="w-full text-[16px] leading-[1.2] tracking-[0.08em] font-semibold normal-case py-[15px] mt-5"
      >
        Accéder au site
      </Button>
    </CardElement>
  );
}
