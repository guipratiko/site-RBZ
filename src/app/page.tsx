import { Hero } from "@/components/home/hero";
import { FeaturedBrands } from "@/components/home/featured-brands";
import { StatsSection } from "@/components/home/stats-section";
import { ShowroomTeaser } from "@/components/home/showroom-teaser";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

// Garante que o feed do Instagram use o token de runtime no Easypanel,
// em vez do HTML estático gerado no `next build`.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedBrands />
      <InstagramFeed />
      <ShowroomTeaser />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
