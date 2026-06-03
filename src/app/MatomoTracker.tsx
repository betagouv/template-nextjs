"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackAppRouter } from "@socialgouv/matomo-next";

export function MatomoTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackAppRouter({
      url: process.env.NEXT_PUBLIC_MATOMO_URL ?? "",
      siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? "",
      pathname,
    });
  }, [pathname]);

  return null;
}
