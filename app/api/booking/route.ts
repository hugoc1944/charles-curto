import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================================
   Helpers
========================================================= */

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const SERVICE_LABELS: Record<string, string> = {
  classic: "Consultation classique",
  signature: "Séance Signature",
  urgent: "Consultation urgente",
};

const MODE_LABELS: Record<string, string> = {
  presential: "En cabinet",
  phone: "Par téléphone",
  visio: "En visioconférence",
};

const TIME_LABELS: Record<string, string> = {
  morning: "Matin (07h - 12h)",
  afternoon: "Après-midi (14h - 18h)",
  night: "Soir (20h - 22h)",
};

/* =========================================================
   POST
========================================================= */

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let {
      firstName,
      lastName,
      email,
      phone,
      availability,
      serviceType,
      mode,
      date,
      timeSlot,
      company,
      elapsedTime,
    } = body;

    /* ---------- Spam protection ---------- */

    // Honeypot
    if (company && company.length > 0) {
      return NextResponse.json({ success: true });
    }

    // Time-based trap
    if (typeof elapsedTime === "number" && elapsedTime < 3000) {
      return NextResponse.json({ success: true });
    }

    /* ---------- Normalize ---------- */

    firstName = firstName?.trim();
    lastName = lastName?.trim();
    email = email?.trim();
    phone = phone?.trim();
    availability = availability?.trim();

    /* ---------- Validation ---------- */

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !serviceType ||
      !mode ||
      !date ||
      !timeSlot
    ) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    const serviceLabel = SERVICE_LABELS[serviceType] ?? serviceType;
    const modeLabel = MODE_LABELS[mode] ?? mode;
    const timeLabel = TIME_LABELS[timeSlot] ?? timeSlot;

    const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    /* =========================================================
       1. EMAIL TO SECRETARIAT
    ========================================================== */

    const adminResult = await resend.emails.send({
      from: "Site Charles Curto <no-reply@charlescurto.fr>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Demande de consultation - ${serviceLabel}`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
          <tr>
            <td align="center">
              <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">
                
                <tr>
                  <td style="font-size:20px;font-weight:600;padding-bottom:24px;">
                    Nouvelle demande de consultation
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;">
                    <strong>Type :</strong> ${serviceLabel}<br />
                    <strong>Mode :</strong> ${modeLabel}<br />
                    <strong>Date :</strong> ${formattedDate}<br />
                    <strong>Créneau :</strong> ${timeLabel}<br /><br />
                    <strong>Nom :</strong> ${firstName} ${lastName}<br />
                    <strong>Email :</strong> ${email}<br />
                    <strong>Téléphone :</strong> ${phone}
                  </td>
                </tr>

                ${
                  availability
                    ? `
                  <tr>
                    <td style="padding-top:20px;font-size:15px;line-height:1.7;">
                      <strong>Disponibilités complémentaires :</strong><br />
                      ${escapeHtml(availability).replace(/\n/g, "<br />")}
                    </td>
                  </tr>
                `
                    : ""
                }

                <tr>
                  <td style="padding-top:28px;">
                    <hr style="border:none;border-top:1px solid #E5E2DA;" />
                  </td>
                </tr>

                <tr>
                  <td style="font-size:13px;color:#6B6B6B;padding-top:12px;">
                    Message généré automatiquement depuis le site.
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      `,
    });

    if (adminResult.error || !adminResult.data?.id) {
      throw new Error("Admin booking email failed");
    }

    /* =========================================================
       2. CONFIRMATION TO CLIENT
    ========================================================== */

    await resend.emails.send({
      from: "Charles Curto - Secrétariat <contact@charlescurto.fr>",
      to: [email],
      subject: "Votre demande de consultation a bien été transmise",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
        <tr>
            <td align="center">
            <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">

                <tr>
                <td style="font-size:18px;padding-bottom:20px;">
                    Bonjour ${firstName},
                </td>
                </tr>

                <tr>
                <td style="font-size:15px;line-height:1.7;padding-bottom:18px;">
                    Votre demande de consultation a bien été transmise au secrétariat
                    de <strong>Charles Curto</strong>.
                </td>
                </tr>

                <tr>
                <td style="font-size:15px;line-height:1.7;padding-bottom:24px;">
                    Nous vous contacterons par téléphone dans les meilleurs délais
                    afin de confirmer les modalités de votre consultation.
                </td>
                </tr>

                <!-- Summary block -->
                <tr>
                <td style="background:#f7f6f2;border-radius:12px;padding:20px 22px;font-size:14px;line-height:1.7;">
                    <strong style="display:block;font-size:15px;margin-bottom:10px;">
                    Récapitulatif de votre demande
                    </strong>

                    <strong>Type de consultation :</strong> ${serviceLabel}<br />
                    <strong>Mode :</strong> ${modeLabel}<br />

                    ${
                    mode === "presential"
                        ? `
                        <strong>Date :</strong> À définir<br />
                        <strong>Créneau :</strong> À définir
                        `
                        : `
                        <strong>Date :</strong> ${formattedDate}<br />
                        <strong>Créneau :</strong> ${timeLabel}
                        `
                    }
                </td>
                </tr>

                <tr>
                <td style="font-size:14px;line-height:1.7;padding-top:22px;">
                    Aucune action n’est requise de votre part à ce stade.
                    Les informations ci-dessus sont communiquées à titre indicatif
                    et seront confirmées lors de notre échange.
                </td>
                </tr>

                <tr>
                <td style="font-size:15px;line-height:1.7;padding-top:22px;">
                    Avec nos salutations distinguées,<br />
                    <strong>Le secrétariat de Charles Curto</strong>
                </td>
                </tr>

                <tr>
                <td style="padding-top:28px;">
                    <hr style="border:none;border-top:1px solid #E5E2DA;" />
                </td>
                </tr>

                <tr>
                <td style="font-size:12px;color:#6B6B6B;padding-top:12px;">
                    Ceci est un message de confirmation automatique.
                </td>
                </tr>

            </table>
            </td>
        </tr>
        </table>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi de la demande." },
      { status: 500 }
    );
  }
}
