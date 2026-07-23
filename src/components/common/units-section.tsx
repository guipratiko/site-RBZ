import { MapPin } from "lucide-react";

import {
  siteConfig,
  unitFullAddress,
  unitMapEmbedSrc,
  type SiteUnit,
} from "@/lib/data/site-config";
import { cn } from "@/lib/utils";

interface UnitsSectionProps {
  className?: string;
  mapClassName?: string;
}

function UnitCard({
  unit,
  mapClassName,
}: {
  unit: SiteUnit;
  mapClassName?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-base font-semibold text-foreground">{unit.name}</h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-muted">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span>{unitFullAddress(unit)}</span>
        </p>
      </div>
      <iframe
        src={unitMapEmbedSrc(unit)}
        title={`Mapa - ${unit.name}`}
        className={cn("h-64 w-full", mapClassName)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function UnitsSection({ className, mapClassName }: UnitsSectionProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2", className)}>
      {siteConfig.units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} mapClassName={mapClassName} />
      ))}
    </div>
  );
}

export { UnitsSection };
