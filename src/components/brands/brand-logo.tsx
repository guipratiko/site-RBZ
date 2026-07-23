import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Brand } from "@/types/brand";

interface BrandLogoProps {
  brand: Brand;
  className?: string;
  imageClassName?: string;
}

// Logos are white on transparent; on light surfaces we invert to near-black
// so they stay legible without a dark tile behind them.
function BrandLogo({ brand, className, imageClassName }: BrandLogoProps) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
    >
      <Image
        src={brand.logoSrc}
        alt={brand.name}
        width={160}
        height={80}
        unoptimized
        className={cn(
          "h-auto max-h-full w-auto max-w-full object-contain",
          brand.logoOnDark && "brightness-0",
          imageClassName,
        )}
      />
    </div>
  );
}

export { BrandLogo };
