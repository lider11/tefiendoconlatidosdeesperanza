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
      <Link href="/" aria-label="Ir al inicio"><Brand compact/></Link>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Cerrar menú":"Abrir menú"} aria-expanded={open} aria-controls="main-navigation"><span/><span/><span/></button>
      <nav id="main-navigation" className={open?"open":""} aria-label="Navegación principal">
        <Link href="/programas" onClick={close}>Programas</Link><Link href="/recursos" onClick={close}>Recursos</Link><Link href="/transparencia" onClick={close}>Transparencia</Link><details className="nav-group"><summary>Participa</summary><div><Link href="/voluntariado" onClick={close}>Voluntariado</Link><Link href="/alianzas" onClick={close}>Alianzas</Link><Link href="/solicitar-orientacion" onClick={close}>Solicitar orientación</Link></div></details>
      </nav>
      <Link className="button button-sm header-cta" href="/aportes">Aportar</Link>
    </header>
  </>
}
