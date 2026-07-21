import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site-config";

// No hero photography/video is available yet - this uses a styled gradient
// in place of a full-bleed image. Drop a real asset in public/images/hero/
// and swap the background here once photography is ready.
function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-foreground text-background">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,109,59,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(138,109,59,0.25),transparent_50%)]"
      />
      <Container className="relative py-32">
        <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
          {siteConfig.statesServed.join(" · ")}
        </p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] font-normal sm:text-6xl">
          Gestão de marcas e desenvolvimento de negócios para o varejo de
          moda
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
          A RBZ Representações conecta grandes grifes a lojistas em Goiás,
          Tocantins e Distrito Federal, com um showroom de 1.700m² e décadas
          de relacionamento no varejo de moda.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" variant="accent">
            <Link href="/seja-parceiro">Seja Parceiro</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-foreground"
          >
            <Link href="/marcas">Conheça as marcas</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
