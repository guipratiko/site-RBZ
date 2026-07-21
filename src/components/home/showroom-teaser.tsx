import Link from "next/link";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";

// Placeholder tiles in place of real showroom photography - swap for
// <Image> once photos are available in public/images/showroom/.
function ShowroomTeaser() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionHeading
            eyebrow="Showroom"
            title="1.700m² dedicados ao relacionamento com lojistas"
            description="Um espaço pensado para apresentar coleções, receber compradores e fortalecer parcerias comerciais em Goiânia."
          />
          <Button asChild className="mt-8">
            <Link href="/showroom">Conhecer o showroom</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-foreground to-accent" />
            <div className="mt-8 aspect-square rounded-lg bg-gradient-to-tr from-muted-background to-border" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export { ShowroomTeaser };
