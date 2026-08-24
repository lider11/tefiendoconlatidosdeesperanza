import Link from "next/link";
import {Brand} from "./Brand";

export function SiteFooter(){
  return <footer><div><Brand compact/><p>Uniendo corazones, transformando realidades.</p></div><div><strong>Explora</strong><Link href="/#nosotros">Quiénes somos</Link><Link href="/programas">Programas</Link><Link href="/#transparencia">Transparencia</Link></div><div><strong>Participa</strong><Link href="/aportes">Aportar</Link><Link href="/voluntariado">Voluntariado</Link><Link href="/alianzas">Alianzas</Link><Link href="/solicitar-orientacion">Solicitar orientación</Link></div><div className="footer-note"><span>Barranquilla, Colombia</span><Link href="/#privacidad">Privacidad</Link><small>© 2026 Fundación Tejiendo con Latidos de Esperanza.</small></div></footer>
}
