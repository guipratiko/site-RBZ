import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { siteConfig } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da RBZ Representações, em conformidade com a LGPD.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl text-foreground">Política de Privacidade</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Esta Política de Privacidade descreve como a {siteConfig.name}{" "}
          coleta, usa e protege as informações fornecidas por visitantes e
          parceiros através deste site, em conformidade com a Lei Geral de
          Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>

        <h2 className="mt-10 text-xl text-foreground">
          Quais dados coletamos
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Coletamos os dados que você nos fornece voluntariamente através dos
          formulários de contato e de cadastro de parceiros, como nome,
          e-mail, telefone, cidade, estado e informações sobre sua loja.
        </p>

        <h2 className="mt-10 text-xl text-foreground">
          Como usamos seus dados
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Os dados enviados por formulários são utilizados exclusivamente
          para viabilizar o contato comercial entre você e a{" "}
          {siteConfig.name}, incluindo o registro da sua solicitação em nosso
          sistema de CRM e o envio de mensagens relacionadas à sua
          solicitação.
        </p>

        <h2 className="mt-10 text-xl text-foreground">Cookies</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Utilizamos cookies para melhorar sua experiência de navegação neste
          site. Você pode gerenciar suas preferências de cookies a qualquer
          momento nas configurações do seu navegador.
        </p>

        <h2 className="mt-10 text-xl text-foreground">Seus direitos</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Você pode solicitar a qualquer momento a confirmação, o acesso, a
          correção ou a exclusão dos seus dados pessoais, entrando em contato
          pelo e-mail{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent underline underline-offset-2"
          >
            {siteConfig.email}
          </a>
          .
        </p>

        <h2 className="mt-10 text-xl text-foreground">Contato</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Em caso de dúvidas sobre esta Política de Privacidade, entre em
          contato pelo e-mail {siteConfig.email} ou pelo telefone{" "}
          {siteConfig.phone}.
        </p>
      </Container>
    </section>
  );
}
