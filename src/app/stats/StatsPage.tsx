"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { StatTile } from "../../components/StatTile";
import { fetchMatomoData, MatomoResult } from "../../lib";

export function StatsPage() {
  const [matomoData, setMatomoData] = React.useState<MatomoResult>({
    nbPageViews: 0,
    nbVisits: 0,
    nbUniqPageViews: 0,
  });

  useEffect(() => {
    (async () => {
      const data = await fetchMatomoData();
      setMatomoData(data);
    })();
  }, []);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <>
      <Script src={`${basePath}/Charts/dsfr-chart.umd.js`} />
      <link rel="stylesheet" href={`${basePath}/Charts/dsfr-chart.css`} />
      <div className="fr-container fr-my-10w">
        <h1>Usage web</h1>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <StatTile
            title="Nombre de visites"
            stats={matomoData.nbVisits}
            description="C'est le nombre de visites total du site sur les 12 derniers mois"
          />
          <StatTile
            title="Nombre de pages vues (total)"
            stats={matomoData.nbPageViews}
            description="C'est le nombre de pages vues au total sur le site sur les 12 derniers mois"
          />
          <StatTile
            title="Nombre de pages vues (uniques)"
            stats={matomoData.nbUniqPageViews}
            description="C'est le nombre de pages vues uniques sur le site sur les 12 derniers mois"
          />
        </div>
      </div>
    </>
  );
}
