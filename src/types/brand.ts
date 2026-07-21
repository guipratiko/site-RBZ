export interface Brand {
  slug: string;
  name: string;
  logoSrc: string;
  /** True when the logo artwork is white/light and needs a dark tile behind it to be visible. */
  logoOnDark: boolean;
  tagline: string;
  history: string;
  audience: string;
  collections: string[];
  gallery: string[];
  featured: boolean;
}
