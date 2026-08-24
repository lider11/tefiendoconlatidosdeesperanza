"use client";

import {useFormSubmit} from "./useFormSubmit";
import Link from "next/link";

type Kind="voluntariado"|"alianza";

export function ParticipationForm({kind}:{kind:Kind}){
  const volunteer=kind==="voluntariado";
  const {status,submit}=useFormSubmit(volunteer?"voluntariado_enviado":"alianza_enviada");
  return <form className="support-form" action="https://formsubmit.co/karinnalozz20@gmail.com" method="POST" onSubmit={submit}>
    <input type="hidden" name="_subject" value={volunteer?"Nueva postulación de voluntariado — Fundación Tejiendo":"Nueva propuesta de alianza — Fundación Tejiendo"}/>
    <input type="hidden" name="_template" value="table"/><input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off"/>
    <label>{volunteer?"Nombre completo":"Nombre de la organización"}<input name={volunteer?"Nombre":"Organización"} autoComplete={volunteer?"name":"organization"} required/></label>
    <div className="form-row"><label>Correo electrónico<input name="email" type="email" autoComplete="email" required/></label><label>Ciudad o municipio<input name="Ubicación" autoComplete="address-level2" required/></label></div>
    <label>{volunteer?"¿Cómo deseas contribuir?":"Tipo de organización"}<select name={volunteer?"Área de interés":"Tipo de organización"} defaultValue="" required><option value="" disabled>Selecciona</option>{(volunteer?["Acompañamiento territorial","Conocimiento profesional","Comunicaciones y logística","Formación e investigación"]:["Empresa","Entidad pública","Universidad o centro de conocimiento","Organización social","Cooperación internacional","Otra"]).map(option=><option key={option}>{option}</option>)}</select></label>
    <label>{volunteer?"Experiencia, disponibilidad y motivación":"Propósito y alcance de la alianza"}<textarea name="Mensaje" rows={5} maxLength={1500} required/></label>
    <label className="consent"><input type="checkbox" name="Autorización de tratamiento" value="Autorizada" required/><span>Autorizo el tratamiento de mis datos para estudiar y responder esta solicitud conforme a la <Link href="/privacidad">política de privacidad</Link>.</span></label>
    <button className="button" type="submit">{volunteer?"Enviar postulación":"Presentar propuesta"}</button><p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
