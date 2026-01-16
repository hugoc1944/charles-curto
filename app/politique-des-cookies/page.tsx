import type { Metadata } from "next";

/* ---------------------------------------------
   Metadata (Server-safe)
---------------------------------------------- */
export const metadata: Metadata = {
  title: "Politique des cookies — Charles Curto",
  description:
    "Politique des cookies du site Charles Curto, expliquant l’utilisation des cookies et traceurs conformément au RGPD et aux recommandations de la CNIL.",
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
            Politique des cookies
          </h1>

          <p className="mt-6 font-body text-[15px] tracking-[0.18em] uppercase text-[#9A9A9A]">
            Information & gestion des traceurs
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
            La présente politique des cookies a pour objectif d’informer les
            utilisateurs du site <strong>Charles Curto</strong> sur l’utilisation
            des cookies et autres traceurs, conformément au Règlement Général
            sur la Protection des Données (RGPD) et aux recommandations de la CNIL.
          </p>

          <h2>1. Qu’est-ce qu’un cookie&nbsp;?</h2>

          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal
            (ordinateur, tablette ou mobile) lors de la consultation d’un site
            internet. Il permet notamment de reconnaître un utilisateur,
            d’analyser la fréquentation du site ou de faciliter la navigation.
          </p>

          <h2>2. Cookies strictement nécessaires</h2>

          <p>
            Ces cookies sont indispensables au bon fonctionnement du site.
            Ils permettent notamment&nbsp;:
          </p>

          <ul>
            <li>La navigation sur le site</li>
            <li>L’accès aux fonctionnalités essentielles</li>
            <li>L’envoi et le traitement des demandes de consultation</li>
            <li>La sécurité du site</li>
          </ul>

          <p>
            Ces cookies ne nécessitent pas votre consentement et ne peuvent
            pas être désactivés.
          </p>

          <h2>3. Cookies de mesure d’audience</h2>

          <p>
            Avec votre accord, le site utilise des cookies de mesure d’audience
            via <strong>Google Analytics</strong>.
          </p>

          <p>
            Ces cookies permettent de recueillir des statistiques anonymes
            sur la fréquentation et l’utilisation du site, afin d’en améliorer
            le contenu et l’expérience proposée.
          </p>

          <p>
            Les données collectées ne permettent pas de vous identifier
            personnellement.
          </p>

          <p>
            Durée maximale de conservation&nbsp;: <strong>14 mois</strong>.
          </p>

          <h2>4. Cookies marketing</h2>

          <p>
            Avec votre accord, des cookies peuvent être utilisés à des fins
            de mesure publicitaire via <strong>Meta (Facebook / Instagram)</strong>.
          </p>

          <p>
            Ces cookies permettent notamment&nbsp;:
          </p>

          <ul>
            <li>De mesurer l’efficacité des campagnes de communication</li>
            <li>De constituer des audiences anonymes</li>
            <li>D’éviter l’affichage de contenus inadaptés</li>
          </ul>

          <p>
            Aucune donnée personnelle sensible n’est transmise à des tiers.
          </p>

          <h2>5. Gestion de vos préférences</h2>

          <p>
            Lors de votre première visite sur le site, un bandeau d’information
            vous permet d’accepter, de refuser ou de personnaliser l’utilisation
            des cookies non essentiels.
          </p>

          <p>
            Vous pouvez modifier votre choix à tout moment en cliquant sur
            le lien <strong>«&nbsp;Gestion des cookies&nbsp;»</strong> disponible en bas de page.
          </p>

          <h2>6. Contact</h2>

          <p>
            Pour toute question relative à l’utilisation des cookies,
            vous pouvez nous contacter via la page <strong>Contact</strong>.
          </p>

          <p className="mt-12 text-[15px] text-[#6B6B6B]">
            Dernière mise à jour : 16/01/2026
          </p>
        </div>
      </article>
    </section>
  );
}
