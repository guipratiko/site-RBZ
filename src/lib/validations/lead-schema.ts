import { z } from "zod";

const baseLeadFields = {
  name: z.string().trim().min(2, "Informe seu nome completo"),
  email: z.email("Informe um e-mail válido"),
  phone: z.string().trim().min(8, "Informe um telefone válido"),
  message: z.string().trim().max(2000).optional(),
  // Honeypot - real users never populate this hidden field. Deliberately
  // unconstrained so a filled-in value still passes validation and reaches
  // the route handler, which silently no-ops instead of forwarding it.
  website: z.string().max(200).optional(),
};

export const partnerLeadSchema = z.object({
  ...baseLeadFields,
  formType: z.literal("seja-parceiro"),
  storeSegment: z.string().trim().min(2, "Informe o segmento da loja"),
  city: z.string().trim().min(2, "Informe a cidade"),
  state: z.string().trim().length(2, "Selecione o estado"),
  instagram: z.string().trim().max(120).optional(),
  revenue: z.string().trim().min(1, "Selecione a faixa de faturamento"),
  currentBrands: z.string().trim().max(500).optional(),
  interestArea: z.string().trim().min(2, "Informe a área de interesse"),
});

export const contactLeadSchema = z.object({
  ...baseLeadFields,
  formType: z.literal("contato"),
});

export const leadSchema = z.discriminatedUnion("formType", [
  partnerLeadSchema,
  contactLeadSchema,
]);

export type PartnerLeadInput = z.infer<typeof partnerLeadSchema>;
export type ContactLeadInput = z.infer<typeof contactLeadSchema>;
export type LeadInput = z.infer<typeof leadSchema>;
