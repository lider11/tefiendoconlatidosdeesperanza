import Link from "next/link";
import { Brand } from "./Brand";

export function SiteFooter() {
  return (
    <footer>
      <div>
        <Brand compact />
        <p>Uniendo corazones, transformando realidades.</p>
      </div>
      <div>
        <strong>Explora</strong>
        <a href="#nosotros">Quiénes somos</a>
        <Link href="/programas">Programas</Link>
        <a href="#transparencia">Transparencia</a>
      </div>
      <div>
        <strong>Participa</strong>
        <a href="#aportes">Aportar</a>
        <a href="#solicitar-apoyo">Solicitar apoyo</a>
        <a href="#privacidad">Privacidad</a>
      </div>
      <div className="footer-note">
        <span>Barranquilla, Colombia</span>
        <small>© 2026 Fundación Tejiendo con Latidos de Esperanza.</small>
      </div>
    </footer>
  );
}
