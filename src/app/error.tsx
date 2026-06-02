"use client";

import { useEffect } from "react";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import { push } from "@socialgouv/matomo-next";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
    push(["trackEvent", "500", "Error500"]);
  }, [error]);

  return (
    <div>
      <div className="fr-container fr-my-6w">
        <div className="fr-grid-row fr-grid-row--center fr-grid-row--gutters">
          <div className="fr-server__body fr-col-12 fr-col-md-8">
            <h1 className="fr-h1">Erreur 500</h1>
            <p>Un erreur s&apos;est produite lors de l&apos;execution de la page</p>
            <p className="fr-text--xl">
              Nos équipes ont été notifiées et interviendront dans les meilleurs
              délais.
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
