"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { estadosBrasil } from "@/lib/data/estados-brasil";
import {
  partnerLeadSchema,
  type PartnerLeadInput,
} from "@/lib/validations/lead-schema";

type FormStatus = "idle" | "submitting" | "success" | "error";

const revenueRanges = [
  "Até R$ 50 mil/mês",
  "R$ 50 mil a R$ 150 mil/mês",
  "R$ 150 mil a R$ 500 mil/mês",
  "Acima de R$ 500 mil/mês",
];

function PartnerForm() {
  const [status, setStatus] = React.useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<PartnerLeadInput>({
    resolver: zodResolver(partnerLeadSchema),
    defaultValues: { formType: "seja-parceiro", website: "" },
  });

  async function onSubmit(data: PartnerLeadInput) {
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
        Recebemos seu cadastro! Nosso time comercial vai analisar e entrar em
        contato em breve.
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner-name">Nome</Label>
          <Input id="partner-name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="partner-segment">Segmento da loja</Label>
          <Input
            id="partner-segment"
            placeholder="Multimarcas, boutique, franquia..."
            {...register("storeSegment")}
          />
          {errors.storeSegment && (
            <p className="text-xs text-red-600">
              {errors.storeSegment.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner-email">E-mail</Label>
          <Input id="partner-email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="partner-phone">Telefone / WhatsApp</Label>
          <Input id="partner-phone" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner-city">Cidade</Label>
          <Input id="partner-city" {...register("city")} />
          {errors.city && (
            <p className="text-xs text-red-600">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="partner-state">Estado</Label>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="partner-state">
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  {estadosBrasil.map((estado) => (
                    <SelectItem key={estado.uf} value={estado.uf}>
                      {estado.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.state && (
            <p className="text-xs text-red-600">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="partner-instagram">Instagram da loja</Label>
          <Input
            id="partner-instagram"
            placeholder="@sualoja"
            {...register("instagram")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="partner-revenue">Faturamento médio mensal</Label>
          <Controller
            name="revenue"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="partner-revenue">
                  <SelectValue placeholder="Selecione uma faixa" />
                </SelectTrigger>
                <SelectContent>
                  {revenueRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.revenue && (
            <p className="text-xs text-red-600">{errors.revenue.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="partner-current-brands">
          Marcas que já trabalha atualmente
        </Label>
        <Input id="partner-current-brands" {...register("currentBrands")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="partner-interest">
          Marca(s) de interesse na RBZ
        </Label>
        <Input id="partner-interest" {...register("interestArea")} />
        {errors.interestArea && (
          <p className="text-xs text-red-600">
            {errors.interestArea.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="partner-message">Mensagem (opcional)</Label>
        <Textarea id="partner-message" {...register("message")} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Não foi possível enviar seu cadastro agora. Tente novamente ou fale
          pelo WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Enviando..." : "Quero ser parceiro"}
      </Button>
    </form>
  );
}

export { PartnerForm };
