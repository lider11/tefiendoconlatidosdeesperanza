"use client";

import { FormEvent, useState } from "react";

export function useFormSubmit() {
  const [status, setStatus] = useState<Record<string, string>>({});

  async function submit(e: FormEvent<HTMLFormElement>, key: string) {
    e.preventDefault();
    setStatus((s) => ({ ...s, [key]: "Enviando…" }));
    const form = e.currentTarget;
    try {
      const response = await fetch(
        form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"),
        {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        },
      );
      if (!response.ok) throw new Error();
      const ref = `FTE-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
      setStatus((s) => ({ ...s, [key]: `Solicitud recibida. Referencia: ${ref}` }));
      form.reset();
    } catch {
      setStatus((s) => ({
        ...s,
        [key]:
          "No fue posible enviar el formulario. Intenta nuevamente o escribe al correo institucional.",
      }));
    }
  }

  return { status, submit };
}
