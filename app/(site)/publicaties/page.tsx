import type { Metadata } from "next";
import PublicatiesClient from "./PublicatiesClient";

export const metadata: Metadata = {
  title: "Stiefkompas – Publicaties & Artikelen",
  description:
    "Artikelen, whitepapers en publicaties over de Stiefkompas-methodiek en dynamiek in samengestelde gezinnen.",
};

export default function PublicatiesPage() {
  return <PublicatiesClient />;
}