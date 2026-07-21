// Placeholder contact details - replace with real values before launch.
export const siteConfig = {
  name: "RBZ Representações",
  founder: "Rogerio Bozo",
  description:
    "Gestão de marcas e desenvolvimento de negócios para o varejo de moda. Representação comercial de grandes grifes em Goiás, Tocantins e Distrito Federal.",
  url: "https://www.rbzrepresentacoes.com.br",
  phone: "+55 62 0000-0000",
  whatsapp: "5562000000000",
  email: "contato@rbzrepresentacoes.com.br",
  address: {
    street: "Showroom RBZ",
    city: "Goiânia",
    state: "GO",
    country: "BR",
  },
  mapEmbedSrc: "https://maps.google.com/maps?q=Goiania,GO&output=embed",
  social: {
    instagram: "https://instagram.com/rbzrepresentacoes",
  },
  statesServed: ["Goiás", "Tocantins", "Distrito Federal"],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
