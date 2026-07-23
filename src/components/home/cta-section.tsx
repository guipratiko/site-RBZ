import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/fade-in";

function CtaSection() {
  return (
    <section className="py-24">
      <Container>
        <FadeIn className="rounded-2xl bg-foreground px-8 py-16 text-center text-background sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl">
            Pronto para elevar o mix de marcas da sua loja?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-background/80">
            Fale com a RBZ Representações e descubra como nossas marcas podem
            gerar mais resultado para o seu negócio.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-background text-foreground hover:bg-[#bdbdbd]"
          >
            <Link href="/seja-parceiro">Seja Parceiro</Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}

export { CtaSection };
