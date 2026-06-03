"use client";

import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { push } from "@socialgouv/matomo-next";

export default function NotFound() {
  useEffect(() => {
    Sentry.captureMessage("Page non trouvée");
    push(["trackEvent", "404", "Page non trouvée"]);
  }, []);

  return (
    <div>
      <div className="fr-container fr-my-6w">
        <div className="fr-grid-row fr-grid-row--center fr-grid-row--gutters">
          <div className="fr-server__body fr-col-12 fr-col-md-8">
            <h1 className="fr-h1" data-h1="Erreur 404">
              Erreur 404
            </h1>
            <p data-p="La page n'a pas été trouvée">
              La page n&apos;a pas été trouvée
            </p>
            <p className="fr-text--xl">
              Impossible de trouver la ressource demandée.
              <br />
              Ré-essayez en passant par la{" "}
              <Link href="/">Page d&apos;accueil</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
