import type { Metadata } from "next";

/* ---------------------------------------------
   Metadata (Server-safe)
---------------------------------------------- */
export const metadata: Metadata = {
  title: "Politique de confidentialité — Charles Curto",
  description:
    "Politique de confidentialité du site Charles Curto, détaillant la collecte, l’utilisation et la protection des données personnelles conformément au RGPD.",
};

/* ---------------------------------------------
   Page component
---------------------------------------------- */
export default function Page() {
  return (
    <section className="w-full pt-32 pb-40">
      <article className="max-w-[780px] mx-auto px-6">
        {/* Header */}
        <header className="mb-20">
          <h1 className="font-title text-[#1F2E5A] text-[40px] md:text-[56px] leading-[1.1]">
            Politique de confidentialité
          </h1>

          <p className="mt-6 font-body text-[15px] tracking-[0.18em] uppercase text-[#9A9A9A]">
            Données personnelles & RGPD
          </p>
        </header>

        {/* Content */}
        <div
          className="
            font-body
            text-[17px]
            md:text-[18px]
            leading-[1.65]
            md:leading-[1.7]
            text-[#2A2A2A]

            [&>h2]:mt-20
            [&>h2]:mb-6
            [&>h2]:font-title
            [&>h2]:text-[28px]
            [&>h2]:md:text-[32px]
            [&>h2]:text-[#1F2E5A]

            [&>p]:mb-4
            [&>ul]:mb-6
            [&>ul]:pl-6
            [&>ul>li]:mb-2
            [&>ul>li]:list-disc
          "
        >
          <p>
            La présente politique de confidentialité a pour objectif
            d’informer les utilisateurs du site <strong>Charles Curto</strong>{" "}
            de la manière dont leurs données personnelles sont collectées,
            utilisées et protégées, conformément au Règlement Général sur la
            Protection des Données (RGPD).
          </p>

          <h2>1. Responsable du traitement</h2>

          <p>Le site Charles Curto est géré par :</p>

          <ul>
            <li><strong>Hugo Alberto Soares Curto</strong></li>
            <li>ENI sous la désignation <strong>WebtoGO</strong></li>
            <li>R. Conselheiro Luís de Magalhães n°31B, 3800-137 Aveiro, Portugal</li>
            <li>Téléphone : +351 234 036 491</li>
            <li>Email : hello@webtogo.pt</li>
            <li>
            Site web :{" "}
                <a
                    href="https://www.webtogo.pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    underline
                    underline-offset-4
                    transition-colors
                    hover:text-[#C7A36A]
                    "
                >
                    https://www.webtogo.pt
                </a>
            </li>

          </ul>

          <h2>2. Données collectées</h2>

          <p>Les données personnelles collectées peuvent inclure :</p>

          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Localisation (Paris, Nice ou autre)</li>
            <li>Informations liées aux demandes de consultation</li>
            <li>Messages envoyés via le formulaire de contact</li>
          </ul>

          <h2>3. Finalités du traitement</h2>

          <ul>
            <li>Traitement des demandes de contact</li>
            <li>Gestion des demandes de rendez-vous</li>
            <li>Envoi d’emails automatiques liés aux formulaires</li>
            <li>Analyse statistique de la navigation</li>
            <li>Optimisation des campagnes publicitaires</li>
          </ul>

          <h2>4. Outils de mesure et services tiers</h2>

          <ul>
            <li>Google Analytics</li>
            <li>Google Tag Manager</li>
            <li>Google Ads</li>
            <li>Meta Pixel</li>
          </ul>

          <h2>5. Cookies</h2>

          <p>
            Le site utilise des cookies à des fins techniques, analytiques
            et publicitaires. Une politique spécifique dédiée aux cookies
            est disponible sur une page distincte.
          </p>

          <h2>6. Conservation et sécurité</h2>

          <p>
            Les données sont conservées pour la durée strictement nécessaire
            aux finalités prévues et sont protégées par des mesures de sécurité
            appropriées.
          </p>

          <h2>7. Droits des utilisateurs</h2>

          <ul>
            <li>Droit d’accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l’effacement</li>
            <li>Droit d’opposition</li>
            <li>Droit à la portabilité</li>
          </ul>

          <p>
            Toute demande peut être adressée à :
            <strong> hello@webtogo.pt</strong>
          </p>

          <h2>8. Mise à jour</h2>

          <p>
            Cette politique peut être modifiée à tout moment afin de rester
            conforme aux évolutions légales et techniques.
          </p>

          <p className="mt-12 text-[15px] text-[#6B6B6B]">
            Dernière mise à jour : 11/01/2026
          </p>
        </div>
      </article>
    </section>
  );
}
