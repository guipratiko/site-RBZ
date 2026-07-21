import Link from "next/link";

import { BrandLogo } from "@/components/brands/brand-logo";
import type { Brand } from "@/types/brand";

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/marcas/${brand.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-accent"
    >
      <BrandLogo brand={brand} className="h-24 p-4" imageClassName="max-h-14" />
      <h3 className="mt-4 text-lg text-foreground">{brand.name}</h3>
      <p className="mt-1 text-sm text-muted">{brand.tagline}</p>
      <span className="mt-4 text-xs font-semibold tracking-wide text-accent uppercase opacity-0 transition-opacity group-hover:opacity-100">
        Ver marca →
      </span>
    </Link>
  );
}

export { BrandCard };
