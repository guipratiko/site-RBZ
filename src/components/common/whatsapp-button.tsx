import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/data/site-config";

function WhatsappButton() {
  return (
    <a
      href={whatsappLink(
        "Olá! Vim pelo site da RBZ Representações e gostaria de saber mais.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}

export { WhatsappButton };
