import Image from "next/image";
import Link from "next/link";
import { AtSign } from "lucide-react";

import { Container } from "@/components/common/container";
import { siteConfig, whatsappLink } from "@/lib/data/site-config";

const footerLinks = [
  { href: "/sobre", label: "Sobre" },
  { href: "/marcas", label: "Marcas" },
  { href: "/showroom", label: "Showroom" },
  { href: "/seja-parceiro", label: "Seja Parceiro" },
  { href: "/contato", label: "Contato" },
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-muted-background">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo/LogoRBZ.png"
            alt="RBZ Representações"
            width={116}
            height={100}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {siteConfig.units.map((unit) => (
              <li key={unit.id}>
                <span className="font-medium text-foreground">{unit.name}</span>
                <br />
                {unit.street}
                <br />
                {unit.city} - {unit.state}, {unit.zip}
              </li>
            ))}
            <li>
              <a href={whatsappLink()} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground">
            Atuação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {siteConfig.statesServed.map((state) => (
              <li key={state}>{state}</li>
            ))}
          </ul>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da RBZ Representações"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
          >
            <AtSign className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os
            direitos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
