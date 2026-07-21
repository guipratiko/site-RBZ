import Link from "next/link";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { BrandLogo } from "@/components/brands/brand-logo";
import { getFeaturedBrands } from "@/lib/data/brands";

function FeaturedBrands() {
  const brands = getFeaturedBrands();

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Marcas que representamos"
          description="Uma seleção criteriosa de grifes reconhecidas, escolhidas para gerar resultado real no ponto de venda."
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <FadeIn key={brand.slug} delay={index * 0.05}>
              <Link href={`/marcas/${brand.slug}`} className="block">
                <BrandLogo
                  brand={brand}
                  className="h-28 p-5 transition-opacity hover:opacity-80"
                  imageClassName="max-h-16"
                />
              </Link>
            </FadeIn>
          ))}
        </div>

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
