import type { Metadata } from "next";
import { StatsPage } from "./StatsPage";

export const metadata: Metadata = {
  title: "Statistiques d'utilisation | template",
};

export default function Page() {
  return <StatsPage />;
}
