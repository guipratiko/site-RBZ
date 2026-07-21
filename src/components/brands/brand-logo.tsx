import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Brand } from "@/types/brand";

interface BrandLogoProps {
  brand: Brand;
  className?: string;
  imageClassName?: string;
}

// Most brand logo files are supplied as white artwork on a transparent
// background, meant to sit on a dark surface - `logoOnDark` picks the tile
// background so every logo stays legible regardless of its own ink color.
function BrandLogo({ brand, className, imageClassName }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg",
        brand.logoOnDark
          ? "bg-foreground"
          : "bg-background border border-border",
        className,
      )}
    >
      <Image
        src={brand.logoSrc}
        alt={brand.name}
        width={160}
        height={80}
        className={cn(
          "h-auto max-h-full w-auto max-w-full object-contain",
          imageClassName,
        )}
      />
    </div>
  );
}

export { BrandLogo };
