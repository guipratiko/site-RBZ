export interface Brand {
  slug: string;
  name: string;
  logoSrc: string;
  /** True when the logo artwork is white/light and should be inverted to dark on light surfaces. */
  logoOnDark: boolean;
  tagline: string;
  history: string;
  audience: string;
  collections: string[];
  gallery: string[];
  featured: boolean;
}
