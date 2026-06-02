import type { Metadata } from "next";
import { DsfrPage } from "./DsfrPage";

export const metadata: Metadata = {
  title: "Template | Fabrique numérique des ministères sociaux",
};

export default function Page() {
  return <DsfrPage />;
}
