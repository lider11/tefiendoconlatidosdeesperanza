"use client";

import {useEffect,useState} from "react";
import Link from "next/link";
import {Brand} from "./Brand";

export function SiteHeader(){
  const[open,setOpen]=useState(false);
  useEffect(()=>{const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close)},[]);
  const close=()=>setOpen(false);
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
    <header className="site-header">
      <a href="#inicio" aria-label="Ir al inicio"><Brand compact/></a>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Cerrar menú":"Abrir menú"} aria-expanded={open} aria-controls="main-navigation"><span/><span/><span/></button>
      <nav id="main-navigation" className={open?"open":""} aria-label="Navegación principal">
        <a href="#nosotros" onClick={close}>Quiénes somos</a><Link href="/programas" onClick={close}>Programas</Link><a href="#impacto" onClick={close}>Impacto</a><a href="#transparencia" onClick={close}>Transparencia</a><a href="#aportes" onClick={close}>Cómo ayudar</a><a href="#solicitar-apoyo" onClick={close}>Solicitar apoyo</a>
      </nav>
      <a className="button button-sm header-cta" href="#aportes">Aportar</a>
    </header>
  </>
}
