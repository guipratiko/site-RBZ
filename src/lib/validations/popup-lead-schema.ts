import { z } from "zod";

import { estadosBrasil } from "@/lib/data/estados-brasil";

const ufs = estadosBrasil.map((e) => e.uf) as [string, ...string[]];

export const popupLeadSchema = z.object({
  storeName: z.string().trim().min(2, "Informe o nome da loja"),
  state: z.enum(ufs, { error: "Selecione o estado" }),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido")
    .max(20, "WhatsApp inválido"),
  instagram: z
    .string()
    .trim()
    .min(2, "Informe o Instagram")
    .max(120, "Instagram inválido")
    .transform((value) => value.replace(/^@+/, "")),
  // Honeypot
  website: z.string().max(200).optional(),
});

export type PopupLeadInput = z.infer<typeof popupLeadSchema>;
