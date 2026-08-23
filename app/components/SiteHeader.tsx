"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

export function SiteHeader() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-header">
      <a href="#inicio" aria-label="Ir al inicio">
        <Brand compact />
      </a>
      <button
        className="menu-button"
        onClick={() => setMenu(!menu)}
        aria-label={menu ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menu}
        aria-controls="main-navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="main-navigation"
        className={menu ? "open" : ""}
        aria-label="Navegación principal"
      >
        <a href="#nosotros" onClick={() => setMenu(false)}>
          Quiénes somos
        </a>
        <Link href="/programas" onClick={() => setMenu(false)}>
          Programas
        </Link>
        <a href="#impacto" onClick={() => setMenu(false)}>
          Impacto
        </a>
        <a href="#transparencia" onClick={() => setMenu(false)}>
          Transparencia
        </a>
        <a href="#aportes" onClick={() => setMenu(false)}>
          Cómo ayudar
        </a>
        <a href="#solicitar-apoyo" onClick={() => setMenu(false)}>
          Solicitar apoyo
        </a>
      </nav>
      <a className="button button-sm header-cta" href="#aportes">
        Aportar
      </a>
    </header>
  );
}
