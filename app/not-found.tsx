import Link from "next/link";
import {ProgramFooter,ProgramHeader} from "./programas/components";

export default function NotFound(){return <><ProgramHeader/><main className="program-not-found"><span aria-hidden="true">404</span><h1>No encontramos esta página</h1><p>La dirección puede haber cambiado o no estar disponible. Puedes regresar al inicio o explorar nuestros programas.</p><div><Link className="button" href="/">Volver al inicio</Link> <Link className="button button-ghost" href="/programas">Ver programas</Link></div></main><ProgramFooter/></>}
