import React, { useEffect, useState } from "react";

const MiseryWrapper = (props: any) => {
  const [ready, setReady] = useState(false);
  const check = () => {
    // @ts-ignore
    if ("dsfr" in window && window.dsfr.colors) {
      setReady(true);
    } else {
      setTimeout(check, 50);
    }
  };
  useEffect(() => {
    if (!ready) {
      check();
    }
  });

  if (!ready) {
    return null;
  }

  return props.children;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "scatter-chart": ScatterChartAttributes;
      "pie-chart": PieChartAttributes;
    }
  }
}

// https://github.com/GouvernementFR/dsfr-chart/blob/main/src/components/ScatterChart.vue#L75
interface ScatterChartAttributes {
  x: string;
  y: string;
}

// https://github.com/GouvernementFR/dsfr-chart/blob/main/src/components/PieChart.vue#L59
interface PieChartAttributes {
  x: string;
  y: string;
}

export const ScatterChart = (props: ScatterChartAttributes) => (
  <MiseryWrapper>
    <scatter-chart {...props} />
  </MiseryWrapper>
);

export const PieChart = (props: PieChartAttributes) => (
  <MiseryWrapper>
    <pie-chart {...props} />
  </MiseryWrapper>
);
