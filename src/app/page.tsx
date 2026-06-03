"use client";

import * as React from "react";
import Link from "next/link";

import { push as matomoPush } from "@socialgouv/matomo-next";
import { Accordion } from "@codegouvfr/react-dsfr/Accordion";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { fr } from "@codegouvfr/react-dsfr";

export default function Home() {
  const onClick1 = () => {
    throw new Error("Hello, sentry");
  };

  return (
    <div className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
      <div className={fr.cx("fr-col-12")}>
        <h1>Template</h1>
        Ce template minimal en Next.js met en oeuvre les pratiques recommandées
        chez betagouv et peut vous faire <b>gagner du temps</b>.
        <br />
        <br />
        Il permet de déployer rapidement une application web qui respecte nos
        standards de <b>conformité, accessibilité et sécurité</b>.
        <br />
        <br />
        Vous pouvez vous en servir comme base de départ ou comme référence
        d&apos;implémentation.{" "}
        <b>
          <a
            href="https://github.com/betagouv/template-nextjs"
            target="_blank"
            rel="noreferrer noopener"
          >
            Les contributions sont bienvenues.
          </a>
        </b>
        <br />
        <br />
        <Accordion label="🇫🇷 Système de design de l'état (DSFR)" titleAs="h2">
          Intègre la dernière version du kit{" "}
          <a
            href="https://github.com/codegouvfr/react-dsfr"
            target="_blank"
            rel="noreferrer noopener"
          >
            @codegouvfr/react-dsfr
          </a>
          . Compatible avec{" "}
          <a href="https://mui.com" target="_blank" rel="noreferrer noopener">
            la librairie MUI
          </a>
          .<br />
          <br />
        </Accordion>
        <Accordion label="📊 Matomo Analytics" titleAs="h2">
          Intègre le tracker matomo pour analyser l&apos;usage du service.
          <br />
          <br />
          Le lien de désinscription réglementaire est intégré dans la politique
          de confidentialité.
        </Accordion>
        <Accordion label="🚨 Alertes sentry" titleAs="h2">
          Intègre une sonde sentry pour être alerté en temps réel des erreurs
          applicatives et monitorer les performances de votre service.
        </Accordion>
        <Accordion label="⚖️ Conformité juridique" titleAs="h2">
          Des modèles pré-rédigés pour :
          <ul>
            <li>
              <Link href="/accessibilite">
                Déclaration d&apos;accessibilité numérique
              </Link>
            </li>
            <li>
              <Link href="/cgu">Conditions d&apos;utilisation</Link>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/politique-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </Accordion>
        <Accordion label="✅ Standards beta" titleAs="h2">
          <ul>
            <li>Site web accessible</li>
            <li>
              <Link href="/stats">Page de statistiques</Link> pour suivre les
              KPIs
            </li>
            <li>
              <Link href="/budget">Page de budget</Link> pour publier son budget
            </li>
            <li>
              <Link href="/aide">Page d&apos;aide</Link> vos usager(e)s
            </li>
          </ul>
        </Accordion>
        <Accordion label="🔐 Sécurité" titleAs="h2">
          <ul>
            <li>Gestion des headers CSP</li>
            <li>Image docker root-less</li>
            <li>Pre-commit hooks anti fuite de secrets</li>
          </ul>
        </Accordion>
        <Accordion label="🔎 Testing" titleAs="h2">
          <ul>
            <li>
              Testing de bout-en-bout avec{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://playwright.dev"
              >
                Playwright
              </a>
            </li>
            <li>
              Tests unitaires avec{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://vitest.dev"
              >
                vitest
              </a>
            </li>
            <li>CI de lint, test et scan statique</li>
          </ul>
        </Accordion>
        <Accordion label="📦 Delivery" titleAs="h2">
          <ul>
            <li>
              Workflows de release automatisés (
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/semantic-release/semantic-release"
              >
                semantic-release
              </a>
              )
            </li>
            <li>Compatible scalingo, clever cloud avec des reviews-branches</li>
          </ul>
        </Accordion>
        <h2 className={fr.cx("fr-mt-4w")}>Exemples d&apos;intégrations</h2>
        <Button
          title="Trigger sentry event"
          onClick={onClick1}
          priority="secondary"
          className={fr.cx("fr-mr-1w")}
        >
          Déclencher une erreur Sentry
        </Button>
        <Button
          title="Trigger matomo event"
          priority="secondary"
          onClick={() => {
            matomoPush(["trackEvent", "click", "home"]);
          }}
        >
          Déclencher un évènement Matomo
        </Button>
      </div>
    </div>
  );
}
