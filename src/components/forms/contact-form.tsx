"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactLeadSchema, type ContactLeadInput } from "@/lib/validations/lead-schema";

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactLeadInput>({
    resolver: zodResolver(contactLeadSchema),
    defaultValues: { formType: "contato", website: "" },
  });

  async function onSubmit(data: ContactLeadInput) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md border border-border bg-muted-background p-6 text-sm text-foreground">
        Mensagem enviada com sucesso! Nossa equipe vai entrar em contato em
        breve.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        {...register("website")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-2">
        <Label htmlFor="contact-name">Nome</Label>
        <Input id="contact-name" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-email">E-mail</Label>
          <Input id="contact-email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Telefone / WhatsApp</Label>
          <Input id="contact-phone" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Mensagem</Label>
        <Textarea id="contact-message" {...register("message")} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Não foi possível enviar sua mensagem agora. Tente novamente ou fale
          pelo WhatsApp.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}

export { ContactForm };
