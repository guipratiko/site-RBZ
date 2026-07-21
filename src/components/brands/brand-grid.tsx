import { FadeIn } from "@/components/common/fade-in";
import { BrandCard } from "@/components/brands/brand-card";
import type { Brand } from "@/types/brand";

function BrandGrid({ brands }: { brands: Brand[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {brands.map((brand, index) => (
        <FadeIn key={brand.slug} delay={(index % 6) * 0.05}>
          <BrandCard brand={brand} />
        </FadeIn>
      ))}
    </div>
  );
}

export { BrandGrid };
