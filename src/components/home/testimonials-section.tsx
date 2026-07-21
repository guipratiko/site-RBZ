import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/data/testimonials";

function TestimonialsSection() {
  return (
    <section className="bg-muted-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem trabalha com a RBZ"
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author + index} delay={index * 0.08}>
              <Card className="h-full bg-background">
                <p className="text-sm leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted">{testimonial.role}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { TestimonialsSection };
