"use client";

import {FormEvent, useState} from "react";
import {trackConversion} from "../Analytics";

export function useFormSubmit(conversion="generate_lead"){
  const[status,setStatus]=useState("");
  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setStatus("Enviando…");
    const form=event.currentTarget;
    try{
      const response=await fetch(form.action.replace("formsubmit.co/","formsubmit.co/ajax/"),{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
      if(!response.ok)throw new Error();
      const reference=`FTE-${new Date().toISOString().slice(0,10).replaceAll("-","")}-${Math.random().toString(36).slice(2,7).toUpperCase()}`;
      setStatus(`Solicitud recibida. Referencia: ${reference}`);
      trackConversion(conversion,{form_name:conversion});
      form.reset();
    }catch{
      setStatus("No fue posible enviar el formulario. Intenta nuevamente o escribe al correo institucional.");
    }
  }
  return{status,submit};
}
