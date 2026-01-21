"use client";

import { useEffect, useState } from "react";

type Consent = {
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "cc_cookie_consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
      document.body.style.overflow = "hidden"; // prevent scroll
    }
  }, []);

  function saveConsent(value: Consent) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
    document.body.style.overflow = "";
    location.reload(); // intentional + correct
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      {/* Consent card */}
      <div
        className="
          relative
          z-[310]
          w-[92%]
          max-w-[520px]
          rounded-[18px]
          bg-[#FCFAF5]
          px-6
          py-7
          shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        "
      >
        {/* Title */}
        <h2 className="font-title text-[22px] text-[#1F2E5A] leading-[1.3]">
          Respect de votre confidentialité
        </h2>

        {/* Text */}
        <p className="mt-3 font-body text-[14.5px] leading-[1.65] text-[#2A2A2A]">
          Ce site utilise des cookies pour mesurer l’audience et améliorer
          l’expérience proposée. Vous pouvez accepter, refuser ou personnaliser
          votre choix à tout moment.
        </p>

        {/* Actions */}
        {!customizing ? (
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() =>
                saveConsent({ analytics: true, marketing: true })
              }
              className="
                h-[46px]
                rounded-[10px]
                bg-[#1F2E5A]
                text-[14px]
                text-white
                transition-opacity
                hover:opacity-90
                active:opacity-85
              "
            >
              Accepter
            </button>

            <button
              onClick={() =>
                saveConsent({ analytics: false, marketing: false })
              }
              className="
                h-[46px]
                rounded-[10px]
                border
                border-[#D6D3CC]
                text-[14px]
                text-[#1F2E5A]
                hover:bg-[#F3F1EC]
              "
            >
              Refuser
            </button>

            <button
              onClick={() => setCustomizing(true)}
              className="
                mt-1
                text-[13.5px]
                underline
                underline-offset-4
                text-[#1F2E5A]
                hover:opacity-80
              "
            >
              Personnaliser
            </button>
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-4 text-[14px]">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) =>
                  setConsent({ ...consent, analytics: e.target.checked })
                }
                className="mt-[3px]"
              />
              <span>
                Cookies de mesure d’audience (Google Analytics)
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) =>
                  setConsent({ ...consent, marketing: e.target.checked })
                }
                className="mt-[3px]"
              />
              <span>
                Cookies marketing (Meta / Facebook / Instagram)
              </span>
            </label>

            <button
              onClick={() => saveConsent(consent)}
              className="
                mt-4
                h-[46px]
                self-start
                rounded-[10px]
                bg-[#1F2E5A]
                px-6
                text-[14px]
                text-white
                hover:opacity-90
              "
            >
              Enregistrer mes choix
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
