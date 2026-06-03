import type { Metadata } from "next";
import { MuiPage } from "./MuiPage";

export const metadata: Metadata = {
  title: "MUI playground | Template",
};

export default function Page() {
  return <MuiPage />;
}
