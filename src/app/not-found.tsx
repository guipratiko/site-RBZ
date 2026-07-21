import Link from "next/link";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 text-3xl text-foreground sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-muted">
          A página que você procura não existe ou foi movida.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar para a home</Link>
        </Button>
      </Container>
    </section>
  );
}
