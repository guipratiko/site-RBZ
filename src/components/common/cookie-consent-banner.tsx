"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const CONSENT_KEY = "rbz-cookie-consent";

const emptySubscribe = () => () => {};

// Renders false during SSR and the first client render (matching hydration),
// then true afterwards - the standard way to gate browser-only reads without
// setState-in-effect.
function useHasMounted() {
  return React.useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function CookieConsentBanner() {
  const hasMounted = useHasMounted();
  const [dismissed, setDismissed] = React.useState(false);

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setDismissed(true);
  }

  if (!hasMounted || dismissed) return null;
  if (window.localStorage.getItem(CONSENT_KEY)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Usamos cookies para melhorar sua experiência neste site, em
          conformidade com a LGPD. Ao continuar navegando, você concorda com
          nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <Button size="sm" onClick={accept} className="shrink-0">
          Entendi
        </Button>
      </div>
    </div>
  );
}

export { CookieConsentBanner };
