import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { BrandGrid } from "@/components/brands/brand-grid";
import { brands } from "@/lib/data/brands";

export const metadata: Metadata = {
  title: "Marcas",
  description:
    "Conheça as marcas de moda representadas pela RBZ Representações em todo o Brasil.",
};

export default function MarcasPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Marcas representadas"
          description="Uma curadoria de grifes consolidadas, selecionadas para gerar resultado real no ponto de venda dos nossos parceiros."
        />
        <div className="mt-14">
          <BrandGrid brands={brands} />
        </div>
      </Container>
    </section>
  );
}
