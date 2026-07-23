import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { UnitsSection } from "@/components/common/units-section";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "Conheça o showroom de 1.700m² da RBZ Representações em Goiânia, preparado para receber lojistas e apresentar coleções.",
};

// Gallery tiles are stylized placeholders - swap for real photos in
// public/images/showroom/ once photography is available.
const galleryTiles = Array.from({ length: 6 });

export default function ShowroomPage() {
  return (
    <>
      <section className="border-b border-border bg-muted-background py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Showroom"
            title="Um espaço para receber, apresentar e negociar"
            description="Mais de 1.700m² dedicados a apresentar as coleções das marcas que representamos, receber compradores e construir relacionamentos comerciais de longo prazo."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-xl text-foreground">Galeria</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryTiles.map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg bg-gradient-to-br from-muted-background to-border"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16">
        <Container>
          <h2 className="text-xl text-foreground">Nossas unidades</h2>
          <p className="mt-2 text-sm text-muted">
            A RBZ conta com duas unidades em Goiânia.
          </p>
          <UnitsSection className="mt-6" mapClassName="h-80" />
        </Container>
      </section>
    </>
  );
}
