import type { Metadata } from "next";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { siteConfig } from "@/lib/data/site-config";
import { timeline } from "@/lib/data/timeline";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, a missão e a equipe por trás da RBZ Representações.",
};

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-border bg-muted-background py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Sobre a RBZ"
            title="Elo entre grandes marcas e o varejo de moda"
            description={`A RBZ Representações é especializada na gestão comercial e representação de grandes marcas de moda, atuando como elo entre indústrias e lojistas em ${siteConfig.statesServed.join(", ")}. Fundada por ${siteConfig.founder}, a empresa construiu uma reputação baseada em relacionamento, credibilidade e geração de resultados para seus parceiros.`}
          />
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Trajetória" title="Nossa história" />
          <ol className="mt-12 space-y-10 border-l border-border pl-8">
            {timeline.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <li>
                  <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-muted-background py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Missão e valores" title="O que nos move" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg text-foreground">Credibilidade</h3>
              <p className="mt-2 text-sm text-muted">
                Décadas de experiência e relacionamento sólido com grandes
                marcas.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-foreground">Estrutura</h3>
              <p className="mt-2 text-sm text-muted">
                Showroom de 1.700m² preparado para receber compradores com
                excelência.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-foreground">Atendimento</h3>
              <p className="mt-2 text-sm text-muted">
                Consultoria comercial próxima e conhecimento profundo do
                mercado.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Equipe" title="Quem lidera a RBZ" />
          <div className="mt-10 space-y-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex items-start gap-5 rounded-lg border border-border p-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-foreground text-lg font-semibold text-background">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h3 className="text-lg text-foreground">{member.name}</h3>
                  <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
