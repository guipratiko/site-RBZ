"use client";

import Link from "next/link";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { BrandLogo } from "@/components/brands/brand-logo";
import { brands } from "@/lib/data/brands";

function FeaturedBrands() {
  // Duplica a lista para o loop infinito ficar contínuo
  const loop = [...brands, ...brands];

  return (
    <section className="overflow-hidden py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Marcas que representamos"
          description="Uma seleção criteriosa de grifes reconhecidas, escolhidas para gerar resultado real no ponto de venda."
        />
      </Container>

      <div className="brand-marquee group relative mt-14">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20"
          aria-hidden
        />

        <div className="brand-marquee-track flex w-max gap-5 py-2 pl-5 sm:gap-6">
          {loop.map((brand, index) => (
            <Link
              key={`${brand.slug}-${index}`}
              href={`/marcas/${brand.slug}`}
              className="block w-40 shrink-0 sm:w-44"
              tabIndex={index >= brands.length ? -1 : 0}
              aria-hidden={index >= brands.length}
            >
              <BrandLogo
                brand={brand}
                className="h-28 overflow-hidden p-5 transition-opacity hover:opacity-80"
                imageClassName="max-h-16 scale-[1.2]"
              />
            </Link>
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-10 text-center">
          <Link
            href="/marcas"
            className="text-sm font-medium text-accent underline underline-offset-4"
          >
            Ver todas as marcas
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { FeaturedBrands };
