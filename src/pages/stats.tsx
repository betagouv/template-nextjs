import React, { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { StatTile } from "../components/StatTile";

import { fetchMatomoData, MatomoResult } from "../lib";

import { ScatterChart, PieChart } from "../components/DsFrChart";

const Stats: NextPage = () => {
  // fetch stats from public matomo
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
      <Head>
        <title>Statistiques d&apos;utilisation | template</title>
        <link rel="stylesheet" href={`${basePath}/Charts/dsfr-chart.css`} />
      </Head>
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
        {/* <br />
        <br />
        <h1>Statistiques d&apos;impact</h1>
        <ScatterChart
          x={JSON.stringify([
            [1, 5, 8],
            [1, 2, 15],
          ])}
          y={JSON.stringify([
            [30, 10, 20],
            [10, 20, 30],
          ])}
        ></ScatterChart>
        <br />
        <br />
        <PieChart
          x={JSON.stringify([1, 2, 3])}
          y={JSON.stringify([10, 20, 30])}
        ></PieChart>
        <br />
        <br /> */}
      </div>
    </>
  );
};

export default Stats;
