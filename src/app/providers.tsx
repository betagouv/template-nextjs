"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DsfrProviderBase,
  StartDsfrOnHydration,
} from "@codegouvfr/react-dsfr/next-app-router";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { fr } from "@codegouvfr/react-dsfr";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import NextAppDirEmotionCacheProvider from "tss-react/next/appDir";
import { MatomoTracker } from "./MatomoTracker";
import pkg from "../../package.json";

declare module "@codegouvfr/react-dsfr" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

const brandTop = (
  <>
    République
    <br />
    Française
  </>
);

const homeLinkProps = {
  href: "/",
  title:
    "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
};

const bottomLinks = [
  { text: "Conditions d'utilisation", linkProps: { href: "/cgu" } },
  { text: "Statistiques", linkProps: { href: "/stats" } },
  { text: "Budget", linkProps: { href: "/budget" } },
  {
    text: "Politique de confidentialité",
    linkProps: { href: "/politique-confidentialite" },
  },
  { text: "Aide", linkProps: { href: "/aide" } },
  {
    text: "Contribuer sur GitHub",
    linkProps: {
      href: `${process.env.NEXT_PUBLIC_APP_REPOSITORY_URL}${
        process.env.NEXT_PUBLIC_APP_VERSION
          ? `/releases/tag/v${process.env.NEXT_PUBLIC_APP_VERSION}`
          : process.env.NEXT_PUBLIC_APP_VERSION_COMMIT
          ? `/commit/${process.env.NEXT_PUBLIC_APP_VERSION}`
          : ""
      }`,
    },
  },
];

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <DsfrProviderBase Link={Link} defaultColorScheme="system" lang="fr">
      <StartDsfrOnHydration />
      <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
        <MuiDsfrThemeProvider>
          <MatomoTracker />
          <SkipLinks
            links={[
              { anchor: "#fr-header-main-navigation", label: "Menu" },
              { anchor: "#content", label: "Contenu" },
              { anchor: "#fr-footer", label: "Pied de page" },
            ]}
          />
          <Header
            brandTop={brandTop}
            serviceTitle="Nom du service numérique"
            serviceTagline="Description du service numérique"
            homeLinkProps={homeLinkProps}
            navigation={[
              {
                text: "Accueil",
                linkProps: { href: "/" },
                isActive: pathname === "/",
              },
              {
                text: "DSFR playground",
                linkProps: { href: "/dsfr" },
                isActive: pathname === "/dsfr",
              },
              {
                text: "Mui playground",
                linkProps: { href: "/mui" },
                isActive: pathname === "/mui",
              },
              {
                text: "Article",
                linkProps: { href: "/article" },
                isActive: pathname === "/article",
              },
            ]}
            quickAccessItems={[headerFooterDisplayItem]}
          />
          <div
            className={fr.cx("fr-container", "fr-container--fluid", "fr-p-5w")}
            id="content"
          >
            {children}
          </div>
          <Footer
            brandTop={brandTop}
            accessibility="non compliant"
            contentDescription={`
    Ce message est à remplacer par les informations de votre site.

    Comme exemple de contenu, vous pouvez indiquer les informations
    suivantes : Le site officiel d'information administrative pour les entreprises.
            `}
            homeLinkProps={homeLinkProps}
            license={`Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence ${pkg.license}`}
            accessibilityLinkProps={{ href: "/accessibilite" }}
            termsLinkProps={{ href: "/mentions-legales" }}
            bottomItems={[...bottomLinks, headerFooterDisplayItem]}
          />
        </MuiDsfrThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </DsfrProviderBase>
  );
}
