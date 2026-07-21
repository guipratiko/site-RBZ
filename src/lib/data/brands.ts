import type { Brand } from "@/types/brand";

/**
 * Placeholder history/audience/collections copy - replace with real content
 * per brand before launch. Shape is CMS-ready: swapping this array for a
 * fetch to a headless CMS requires no changes to consuming components.
 */
export const brands: Brand[] = [
  {
    slug: "oficina",
    name: "Oficina",
    logoSrc: "/images/brands/oficina.png",
    logoOnDark: true,
    tagline: "Design autoral para o guarda-roupa contemporâneo",
    history:
      "A Oficina constrói coleções que equilibram alfaiataria e conforto, com peças pensadas para durar várias estações. A marca é uma das principais parceiras da RBZ em Goiás, Tocantins e Distrito Federal.",
    audience:
      "Lojistas multimarca e boutiques que buscam um mix autoral, com forte apelo de design e boa margem de revenda.",
    collections: ["Alto Verão", "Inverno Essencial", "Cápsula Alfaiataria"],
    gallery: [],
    featured: true,
  },
  {
    slug: "open",
    name: "Open",
    logoSrc: "/images/brands/open.png",
    logoOnDark: true,
    tagline: "Moda versátil para o dia a dia urbano",
    history:
      "A Open é referência em peças coringa, fáceis de compor e vender durante o ano inteiro. Presente no showroom da RBZ com coleções renovadas em ciclos curtos.",
    audience:
      "Multimarcas com giro rápido de estoque e clientes que valorizam praticidade sem abrir mão de estilo.",
    collections: ["Verão Urbano", "Básicos Premium", "Edição Cápsula"],
    gallery: [],
    featured: true,
  },
  {
    slug: "lenny",
    name: "Lenny Niemeyer",
    logoSrc: "/images/brands/lenny.png",
    logoOnDark: true,
    tagline: "Referência em beachwear de alto padrão",
    history:
      "Lenny Niemeyer é sinônimo de moda praia premium no Brasil, com peças reconhecidas internacionalmente pela qualidade de tecido e caimento. A RBZ representa a marca em todo o Centro-Oeste.",
    audience:
      "Boutiques de praia e resort wear, lojas de alto padrão em cidades com forte sazonalidade de verão.",
    collections: ["Resort Collection", "Alta Praia", "Loungewear"],
    gallery: [],
    featured: true,
  },
  {
    slug: "osklen",
    name: "Osklen",
    logoSrc: "/images/brands/osklen.png",
    logoOnDark: true,
    tagline: "Moda consciente com espírito brasileiro",
    history:
      "A Osklen une sustentabilidade, esporte e design em coleções que já viraram referência de moda contemporânea brasileira. Uma das grifes mais reconhecidas do portfólio da RBZ.",
    audience:
      "Lojas conceito e multimarcas premium com público exigente e conectado a moda consciente.",
    collections: ["New Basics", "Expedição", "Verão Consciente"],
    gallery: [],
    featured: true,
  },
  {
    slug: "john-john",
    name: "John John",
    logoSrc: "/images/brands/john-john.png",
    logoOnDark: true,
    tagline: "Denim e streetwear com atitude",
    history:
      "John John é uma das marcas de denim mais desejadas do país, com forte apelo jovem e coleções que dialogam com moda de rua e tendências internacionais.",
    audience:
      "Multimarcas com público jovem-adulto e boutiques de moda urbana/streetwear.",
    collections: ["Denim Icons", "Street Capsule", "Verão"],
    gallery: [],
    featured: true,
  },
  {
    slug: "reserva",
    name: "Reserva",
    logoSrc: "/images/brands/reserva.png",
    logoOnDark: true,
    tagline: "Estilo despretensioso, qualidade em primeiro lugar",
    history:
      "A Reserva é uma das marcas de moda masculina mais queridas do Brasil, com um posicionamento leve e uma comunidade de clientes fiéis. Parceria consolidada da RBZ na região.",
    audience:
      "Multimarcas masculinas e lojas com forte relação de proximidade com o cliente final.",
    collections: ["Inverno", "Verão", "Reserva Go"],
    gallery: [],
    featured: false,
  },
  {
    slug: "reserva-go",
    name: "Reserva Go",
    logoSrc: "/images/brands/reserva-go.png",
    logoOnDark: true,
    tagline: "A linha esportiva da Reserva",
    history:
      "Reserva Go traz performance e conforto para o dia a dia ativo, com tecidos tecnológicos e cortes modernos, ampliando o portfólio esportivo representado pela RBZ.",
    audience:
      "Lojas especializadas em moda esportiva/casual e multimarcas com seção fitness.",
    collections: ["Performance", "Training Capsule", "Verão Ativo"],
    gallery: [],
    featured: false,
  },
  {
    slug: "dress-to",
    name: "Dress To",
    logoSrc: "/images/brands/dress-to.png",
    logoOnDark: true,
    tagline: "Moda feminina com identidade autoral",
    history:
      "Dress To é reconhecida por estampas exclusivas e modelagens que valorizam a mulher contemporânea, com coleções completas de prontas-para-vestir.",
    audience:
      "Boutiques femininas e multimarcas com público que busca peças de ocasião e autorais.",
    collections: ["Alto Verão", "Festa", "Cotidiano"],
    gallery: [],
    featured: false,
  },
  {
    slug: "individual",
    name: "Individual",
    logoSrc: "/images/brands/individual.png",
    logoOnDark: true,
    tagline: "Alfaiataria e sportswear premium",
    history:
      "A Individual é referência em alfaiataria masculina de alto padrão, com tecidos nobres e acabamento impecável, presente nas melhores lojas do Centro-Oeste através da RBZ.",
    audience:
      "Lojas masculinas premium e multimarcas com forte demanda por social e alfaiataria.",
    collections: ["Social Inverno", "Sportswear", "Casamentos"],
    gallery: [],
    featured: false,
  },
  {
    slug: "sergio-k",
    name: "Sergio K",
    logoSrc: "/images/brands/sergio-k.png",
    logoOnDark: true,
    tagline: "Moda autoral de vanguarda",
    history:
      "Sergio K é um dos nomes mais respeitados da moda autoral brasileira, com peças que unem arquitetura, arte e vestuário em coleções conceituais.",
    audience:
      "Boutiques e lojas conceito voltadas a um público de moda com alto poder aquisitivo.",
    collections: ["Coleção Assinatura", "Cápsula Preto & Branco"],
    gallery: [],
    featured: false,
  },
  {
    slug: "mob",
    name: "Mob",
    logoSrc: "/images/brands/mob.png",
    logoOnDark: false,
    tagline: "Moda praia e casual jovem",
    history:
      "Mob traz propostas descontraídas para o verão, com estampas exclusivas e peças versáteis entre praia e cidade.",
    audience:
      "Multimarcas de praia/casual com público jovem e turístico.",
    collections: ["Verão", "Praia & Cidade"],
    gallery: [],
    featured: false,
  },
  {
    slug: "isy",
    name: "Isy",
    logoSrc: "/images/brands/isy.png",
    logoOnDark: true,
    tagline: "Moda feminina para o dia a dia",
    history:
      "Isy aposta em peças confortáveis e atemporais, com bom giro de estoque e preço competitivo para o varejo multimarcas.",
    audience:
      "Lojas multimarcas femininas com foco em básicos de qualidade e boa margem.",
    collections: ["Cotidiano", "Verão", "Inverno"],
    gallery: [],
    featured: false,
  },
  {
    slug: "agua-de-coco",
    name: "Água de Coco",
    logoSrc: "/images/brands/agua-de-coco.png",
    logoOnDark: true,
    tagline: "Ícone do beachwear brasileiro",
    history:
      "Água de Coco é um dos nomes mais tradicionais da moda praia nacional, com peças reconhecidas por estampas exclusivas e cortes lisonjeiros.",
    audience:
      "Boutiques de praia e resort wear de alto padrão.",
    collections: ["Alta Praia", "Resort", "Loungewear"],
    gallery: [],
    featured: false,
  },
  {
    slug: "replay",
    name: "Replay",
    logoSrc: "/images/brands/replay.png",
    logoOnDark: false,
    tagline: "Denim premium internacional",
    history:
      "Replay é uma grife italiana de denim premium, com presença global e forte reconhecimento de marca, representada pela RBZ na região Centro-Oeste.",
    audience:
      "Multimarcas premium e lojas especializadas em denim internacional.",
    collections: ["Denim Icons", "Coleção Internacional"],
    gallery: [],
    featured: false,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((brand) => brand.featured);
}
