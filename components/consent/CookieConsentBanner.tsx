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
    }
  }, []);

  function saveConsent(value: Consent) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
    location.reload();
    }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] bg-[#FCFAF5] border-t border-[#E5E2DA] px-6 py-5">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-body text-[14px] leading-[1.6] text-[#2A2A2A] max-w-[700px]">
          Ce site utilise des cookies pour mesurer l’audience et améliorer
          l’expérience proposée. Vous pouvez accepter, refuser ou personnaliser
          votre choix.
        </p>

        {!customizing ? (
          <div className="flex gap-3">
            <button
              onClick={() =>
                saveConsent({ analytics: true, marketing: true })
              }
              className="px-4 py-2 text-[14px] rounded-[8px] bg-[#1F2E5A] text-white"
            >
              Accepter
            </button>

            <button
              onClick={() =>
                saveConsent({ analytics: false, marketing: false })
              }
              className="px-4 py-2 text-[14px] rounded-[8px] border border-[#D6D3CC]"
            >
              Refuser
            </button>

            <button
              onClick={() => setCustomizing(true)}
              className="px-4 py-2 text-[14px] underline underline-offset-4"
            >
              Personnaliser
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 text-[14px]">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) =>
                  setConsent({ ...consent, analytics: e.target.checked })
                }
              />
              Cookies de mesure d’audience (Google Analytics)
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) =>
                  setConsent({ ...consent, marketing: e.target.checked })
                }
              />
              Cookies marketing (Meta / Facebook / Instagram)
            </label>

            <button
              onClick={() => saveConsent(consent)}
              className="self-start mt-2 px-4 py-2 rounded-[8px] bg-[#1F2E5A] text-white"
            >
              Enregistrer mes choix
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
