// Contact and location details for the institutional site.
export const siteConfig = {
  name: "RBZ Representações",
  founder: "Rogerio Bozo",
  description:
    "Gestão de marcas e desenvolvimento de negócios para o varejo de moda. Representação comercial de grandes grifes em todo o Brasil.",
  url: "https://www.rbzrepresentacoes.com.br",
  phone: "(62) 9 8126-9405",
  whatsapp: "5562981269405",
  email: "contato@rbzrepresentacoes.com.br",
  address: {
    street: "Showroom RBZ",
    city: "Goiânia",
    state: "GO",
    country: "BR",
  },
  units: [
    {
      id: "jardim-america",
      name: "Jardim América",
      street: "R. C-134 - Jardim América",
      city: "Goiânia",
      state: "GO",
      zip: "74255-480",
      lat: -16.70823099943958,
      lng: -49.29049571589219,
    },
    {
      id: "jardim-goias",
      name: "Jardim Goiás",
      street: "R. 52, 593 - Jardim Goiás",
      city: "Goiânia",
      state: "GO",
      zip: "74810-200",
      lat: -16.70192450237668,
      lng: -49.242568107654606,
    },
  ],
  social: {
    instagram: "https://instagram.com/rbzrepresentacoes",
  },
  statesServed: ["Todo o Brasil"],
} as const;

export type SiteUnit = (typeof siteConfig.units)[number];

export function unitMapEmbedSrc(unit: SiteUnit) {
  return `https://maps.google.com/maps?q=${unit.lat},${unit.lng}&z=16&output=embed`;
}

export function unitFullAddress(unit: SiteUnit) {
  return `${unit.street}, ${unit.city} - ${unit.state}, ${unit.zip}`;
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
