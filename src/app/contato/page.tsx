import type { Metadata } from "next";
import { AtSign, Mail, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { UnitsSection } from "@/components/common/units-section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig, whatsappLink } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a RBZ Representações: WhatsApp, e-mail, redes sociais e formulário de contato.",
};

export default function ContatoPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a nossa equipe"
            description="Tire dúvidas, agende uma visita ao showroom ou envie sua mensagem - respondemos o mais rápido possível."
          />

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-accent" />
              <a
                href={whatsappLink()}
                className="text-sm text-muted hover:text-foreground"
              >
                {siteConfig.phone} (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-accent" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <AtSign className="mt-0.5 h-5 w-5 text-accent" />
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                Instagram
              </a>
            </li>
          </ul>

          <div className="mt-10">
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
              Nossas unidades
            </h3>
            <UnitsSection mapClassName="h-56" />
          </div>
        </div>

        <div className="rounded-lg border border-border p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
