"use client";

import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { estadosBrasil } from "@/lib/data/estados-brasil";
import {
  popupLeadSchema,
  type PopupLeadInput,
} from "@/lib/validations/popup-lead-schema";

const STORAGE_KEY = "rbz-popup-loja-seen";
const emptySubscribe = () => () => {};

function useHasMounted() {
  return React.useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function WelcomePopup() {
  const hasMounted = useHasMounted();
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PopupLeadInput>({
    resolver: zodResolver(popupLeadSchema),
    defaultValues: {
      storeName: "",
      state: undefined,
      whatsapp: "",
      instagram: "",
      website: "",
    },
  });

  React.useEffect(() => {
    if (!hasMounted) return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, [hasMounted]);

  React.useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  function onSubmit(data: PopupLeadInput) {
    window.localStorage.setItem(STORAGE_KEY, "1");
    // Dispara o POST antes de fechar; não aguarda a resposta
    void fetch("/api/popup-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      keepalive: true,
    });
    setOpen(false);
  }

  if (!hasMounted || !open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-popup-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/45 backdrop-blur-[2px] transition-opacity"
        aria-label="Fechar"
        onClick={dismiss}
      />

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background shadow-[0_25px_80px_-20px_rgba(13,13,13,0.45)] transition duration-300 ease-out">
        <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#2b2b2b] to-[#6b6b6b] px-6 pb-8 pt-6 text-accent-foreground">
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-3 top-3 rounded-full p-2 text-accent-foreground/70 transition hover:bg-white/10 hover:text-accent-foreground"
            aria-label="Fechar formulário"
          >
            <X className="h-4 w-4" />
          </button>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground/70">
            Bem-vindo à RBZ
          </p>
          <h2
            id="welcome-popup-title"
            className="mt-2 font-display text-2xl leading-tight sm:text-[1.75rem]"
          >
            Conte um pouco sobre a sua loja
          </h2>
          <p className="mt-2 text-sm text-accent-foreground/75">
            Leva menos de 30 segundos. Assim conseguimos te atender melhor.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 px-6 py-6"
          noValidate
        >
          <input
            type="text"
            {...register("website")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="space-y-1.5">
            <Label htmlFor="popup-store">Nome da loja</Label>
            <Input
              id="popup-store"
              placeholder="Ex.: Boutique Aurora"
              autoFocus
              {...register("storeName")}
            />
            {errors.storeName && (
              <p className="text-xs text-red-600">{errors.storeName.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="popup-state">Estado</Label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="popup-state">
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent className="z-[80]">
                    {estadosBrasil.map((estado) => (
                      <SelectItem key={estado.uf} value={estado.uf}>
                        {estado.uf} - {estado.nome}
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

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="popup-whatsapp">WhatsApp</Label>
              <Input
                id="popup-whatsapp"
                type="tel"
                inputMode="tel"
                placeholder="(62) 99999-0000"
                {...register("whatsapp")}
              />
              {errors.whatsapp && (
                <p className="text-xs text-red-600">{errors.whatsapp.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-instagram">Instagram</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">
                  @
                </span>
                <Input
                  id="popup-instagram"
                  className="pl-8"
                  placeholder="sualoja"
                  {...register("instagram")}
                />
              </div>
              {errors.instagram && (
                <p className="text-xs text-red-600">{errors.instagram.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={dismiss}
              className="order-2 text-sm text-muted underline-offset-2 hover:text-foreground hover:underline sm:order-1"
            >
              Agora não
            </button>
            <Button type="submit" variant="accent" className="order-1 w-full sm:order-2 sm:w-auto">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { WelcomePopup };
