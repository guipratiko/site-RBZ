import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { PartnerForm } from "@/components/forms/partner-form";

export const metadata: Metadata = {
  title: "Seja Parceiro",
  description:
    "Cadastre sua loja e torne-se parceiro comercial da RBZ Representações para trabalhar com grandes marcas de moda.",
};

export default function SejaParceiroPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Seja Parceiro"
          title="Cadastre sua loja e amplie seu mix de marcas"
          description="Preencha o formulário abaixo com os dados da sua loja. Nosso time comercial vai analisar seu perfil e entrar em contato para os próximos passos."
        />

        <div className="mt-12 rounded-lg border border-border p-8">
          <PartnerForm />
        </div>
      </Container>
    </section>
  );
}
