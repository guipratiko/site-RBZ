import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { stats } from "@/lib/data/stats";

function StatsSection() {
  return (
    <section className="border-y border-border bg-muted-background py-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.05} className="text-center">
              <p className="font-display text-4xl text-accent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { StatsSection };
