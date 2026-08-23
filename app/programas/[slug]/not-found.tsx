import Link from "next/link";
import {ProgramFooter,ProgramHeader} from "../components";
export default function NotFound(){return <><ProgramHeader/><main className="program-not-found"><span>404</span><h1>Programa no encontrado</h1><p>La línea solicitada no existe o fue actualizada.</p><Link className="button" href="/programas">Ver todos los programas</Link></main><ProgramFooter/></>}
