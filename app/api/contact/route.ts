import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let {
      firstName,
      lastName,
      email,
      phone,
      message,
    } = body;

    // Normalize
    firstName = firstName?.trim();
    lastName = lastName?.trim();
    email = email?.trim();
    phone = phone?.trim();
    message = message?.trim();

    if (!firstName || !lastName || !email || !message) {
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

    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    /* =========================================================
       1. ADMIN EMAIL (PRIVATE, STRUCTURED)
    ========================================================== */
    const adminResult = await resend.emails.send({
      from: "Site Charles Curto <no-reply@charlescurto.fr>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: "Nouveau message - Site Charles Curto",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f6f2;padding:32px 0;">
          <tr>
            <td align="center">
              <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:32px;font-family:Georgia,serif;color:#1B1E23;">
                <tr>
                  <td style="font-size:20px;font-weight:600;padding-bottom:24px;">
                    Nouveau message reçu
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.6;">
                    <strong>Nom :</strong> ${firstName} ${lastName}<br />
                    <strong>Email :</strong> ${email}<br />
                    ${phone ? `<strong>Téléphone :</strong> ${phone}<br />` : ""}
                  </td>
                </tr>

                <tr>
                  <td style="padding:24px 0;">
                    <hr style="border:none;border-top:1px solid #E5E2DA;" />
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;">
                    ${safeMessage}
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      `,
    });

    if (adminResult.error || !adminResult.data?.id) {
        throw new Error("Admin email failed");
    }

    /* =========================================================
       2. USER CONFIRMATION (ELEGANT, HUMAN)
    ========================================================== */
    await resend.emails.send({
      from: "Charles Curto - Secrétariat <contact@charlescurto.fr>",
      to: [email],
      subject: "Votre message a bien été reçu",
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
                  <td style="font-size:15px;line-height:1.7;padding-bottom:16px;">
                    Votre message a bien été transmis au secrétariat de
                    <strong>Charles Curto</strong>.
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;padding-bottom:16px;">
                    Il sera étudié avec attention. Une réponse vous sera apportée
                    dans les meilleurs délais, selon les disponibilités.
                  </td>
                </tr>

                <tr>
                  <td style="font-size:15px;line-height:1.7;">
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
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}
