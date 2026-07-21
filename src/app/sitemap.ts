import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { brands } from "@/lib/data/brands";

const staticRoutes = [
  "",
  "/sobre",
  "/marcas",
  "/showroom",
  "/seja-parceiro",
  "/contato",
  "/politica-de-privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));

  const brandEntries: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${siteConfig.url}/marcas/${brand.slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...brandEntries];
}
