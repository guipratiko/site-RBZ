import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brands/brand-logo";
import { brands, getBrandBySlug } from "@/lib/data/brands";

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: brand.name,
    description: brand.tagline,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  return (
    <>
      <section className="border-b border-border bg-muted-background py-16">
        <Container>
          <BrandLogo
            brand={brand}
            className="h-24 w-fit p-5"
            imageClassName="max-h-16"
          />
          <h1 className="mt-6 text-3xl text-foreground sm:text-4xl">
            {brand.name}
          </h1>
          <p className="mt-2 max-w-xl text-muted">{brand.tagline}</p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-xl text-foreground">História</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {brand.history}
              </p>
            </div>
            <div>
              <h2 className="text-xl text-foreground">Público</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {brand.audience}
              </p>
            </div>
            <div>
              <h2 className="text-xl text-foreground">Coleções</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {brand.collections.map((collection) => (
                  <li
                    key={collection}
                    className="rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                  >
                    {collection}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl text-foreground">Galeria</h2>
              {brand.gallery.length > 0 ? (
                <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {brand.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      <Image
                        src={src}
                        alt={brand.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted">
                  Galeria em produção - fotos da coleção em breve.
                </p>
              )}
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-border p-6">
            <h2 className="text-lg text-foreground">
              Quer representar {brand.name} na sua loja?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Fale com nosso time comercial e saiba como se tornar parceiro.
            </p>
            <Button asChild className="mt-6 w-full">
              <Link href="/seja-parceiro">Seja Parceiro</Link>
            </Button>
          </aside>
        </Container>
      </section>
    </>
  );
}
