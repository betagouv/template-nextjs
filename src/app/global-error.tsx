"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="fr">
      <body>
        <div className="fr-container fr-my-6w">
          <h1>Une erreur inattendue s&apos;est produite</h1>
          <button onClick={reset}>Réessayer</button>
        </div>
      </body>
    </html>
  );
}
