"use client";

import { Button } from "@/components/ui/Button";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (sent && successRef.current) {
      successRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [sent]);
  return (
    <section className="w-full bg-[#FCFAF5] py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* =========================================================
             LEFT — CONTACT INFO
          ========================================================== */}
          <div>
            <h1 className="
              font-title
              text-[59px]
              md:text-[82px]
              leading-[1]
              text-[#1F2E5A]
            ">
              Contact
            </h1>

            <p className="
              mt-3
              md:mt-6
              font-body
              text-[18px]
              leading-[1.6]
              max-w-[420px]
              text-[#1B1E23]
            ">
              Pour toute question, demande spécifique ou prise de contact
              préalable, vous pouvez joindre Charles et son équipe via
              les canaux ci-dessous.
            </p>

            {/* Email */}
            <div className="mt-10">
              <h3 className="
                font-body
                font-semibold
                text-[20px]
                mb-1
              ">
                Par e-mail
              </h3>

              <p className="font-body text-[17px]">
                contact@charlescurto.fr
              </p>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h3 className="
                font-body
                font-semibold
                text-[20px]
                mb-3
              ">
                Via les réseaux officiels
              </h3>

              <div className="flex gap-1">
                {/* Instagram */}
                <a
                    href="#"
                    aria-label="Instagram"
                    className="
                    text-[#1F2E5A]
                    transition-transform
                    duration-300
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-1
                    "
                >
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    />
                    <circle cx="17" cy="7" r="1.3" fill="currentColor" />
                    </svg>
                </a>

                {/* Facebook – square version */}
                <a
                    href="#"
                    aria-label="Facebook"
                    className="
                    text-[#1F2E5A]
                    transition-transform
                    duration-300
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-1
                    "
                >
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                    <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    />
                    <path
                        d="M13.5 9H15V6.8h-1.8c-2 0-3.2 1.2-3.2 3.4V12H8.5v2.4H10V19h2.6v-4.6h2l.4-2.4h-2.4v-1.6c0-.7.2-1.4 1.3-1.4Z"
                        fill="currentColor"
                    />
                    </svg>
                </a>
                </div>

            </div>
          </div>

          {/* =========================================================
             RIGHT — FORM
          ========================================================== */}
          <div>
            <h2
                className="
                font-title
                text-[36px]
                md:text-[42px]
                leading-[1.1]
                text-[#1F2E5A]
                mb-3
                "
            >
                Écrire un message
            </h2>
            <AnimatePresence mode="wait">

            {!sent ? (
                <motion.form
                className="space-y-3"
                key="contact-form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1], // premium ease
                }}
                onSubmit={async (e) => {
                    e.preventDefault();
                    setLoading(true);
                    setError(null);

                    const formData = new FormData(e.currentTarget);

                    const payload = {
                    firstName: formData.get("firstName"),
                    lastName: formData.get("lastName"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                    };

                    try {
                    const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                    });

                    if (!res.ok) throw new Error();

                    setSent(true);
                    (e.currentTarget as HTMLFormElement).reset();
                    } catch {
                    setError("Une erreur est survenue. Merci de réessayer.");
                    } finally {
                    setLoading(false);
                    }
                }}
                >
                {/* NAME */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="font-body text-[15px]">Prénom*</label>
                    <input
                        name="firstName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                    />
                    </div>

                    <div>
                    <label className="font-body text-[15px]">Nom*</label>
                    <input
                        name="lastName"
                        type="text"
                        required
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                    />
                    </div>
                </div>

                {/* EMAIL / PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="font-body text-[15px]">Adresse e-mail*</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                    />
                    </div>

                    <div>
                    <label className="font-body text-[15px]">
                        Téléphone{" "}
                        <span className="text-[13px] text-[#6B6B6B]">(optionnel)</span>
                    </label>
                    <input
                        name="phone"
                        type="tel"
                        className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none"
                    />
                    </div>
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="font-body text-[15px]">Votre message*</label>
                    <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full rounded-md px-4 py-3 bg-white border border-[#E5E2DA] focus:outline-none resize-none"
                    />
                </div>

                {/* CONSENT */}
                <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <p className="font-body text-[14px] text-[#6B6B6B] leading-[1.5]">
                    J’accepte que mes données soient utilisées uniquement dans le cadre de
                    cette prise de contact, conformément à la{" "}
                    <a
                        href="/politique-de-confidentialite"
                        className="underline hover:opacity-80 transition"
                    >
                        politique de confidentialité
                    </a>.
                    </p>
                </div>

                {/* SUBMIT */}
                <div className="pt-4">
                    <Button variant="authority" type="submit">
                    {loading ? "Envoi en cours…" : "Envoyer le message"}
                    </Button>

                    {error && (
                    <p className="font-body text-[15px] text-red-600 mt-4">
                        {error}
                    </p>
                            )}
                        </div>
                        </motion.form>
                    ) : (
                        <motion.div
                        ref={successRef}
                        className="
                            mt-12
                            max-w-[420px]
                            font-body
                            text-[#1F2E5A]
                            space-y-4
                        "
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        >
                        <p className="text-[20px] font-medium">
                            Votre message a bien été envoyé.
                        </p>

                        <p className="text-[17px] leading-[1.6]">
                            Le secrétariat de <strong>Charles Curto</strong> a bien reçu votre
                            demande. Elle sera étudiée avec attention, et une réponse vous sera
                            apportée dans les meilleurs délais.
                        </p>

                        <p className="text-[16px] text-[#6B6B6B]">
                            Vous pouvez désormais quitter cette page en toute tranquillité.
                        </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


        </div>
      </div>
    </section>
  );
}
