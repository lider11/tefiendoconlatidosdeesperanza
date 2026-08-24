import type {Metadata} from "next";
import Link from "next/link";
import {JsonLd} from "../components/JsonLd";
import {ProgramFooter,ProgramHeader} from "../programas/components";
import {SITE_URL} from "../site";

export const metadata:Metadata={title:"Transparencia y rendición de cuentas",description:"Compromisos, categorías documentales y ruta de publicación responsable de la Fundación Tejiendo con Latidos de Esperanza.",alternates:{canonical:"/transparencia"}};
const categories=[
  ["Identidad y gobierno","Certificado de existencia, estatutos, identificación institucional y órganos de gobierno aprobados para publicación."],
  ["Políticas y salvaguardas","Protección de datos, conflictos de interés, prevención del fraude y protección de población vulnerable."],
  ["Gestión y resultados","Planes, informes de gestión, indicadores, aprendizajes y alcance real de los proyectos."],
  ["Recursos y aportes","Criterios de recepción, destinación, trazabilidad y soportes aplicables a contribuciones."],
];
export default function Page(){const structured={"@context":"https://schema.org","@type":"WebPage",name:"Transparencia y rendición de cuentas",url:`${SITE_URL}/transparencia`,inLanguage:"es-CO",about:{"@id":`${SITE_URL}/#organization`}};return <><ProgramHeader/><main id="contenido"><header className="evidence-hero"><div><span>Confianza verificable</span><h1>Transparencia que se demuestra con documentos, decisiones y resultados</h1><p>Este espacio organiza la información institucional que puede publicarse después de su aprobación jurídica y administrativa. No mostramos documentos provisionales como si fueran definitivos.</p></div></header><section className="section evidence-grid"><div><span className="section-kicker">Ruta documental</span><h2>Qué información organizaremos aquí</h2><p className="lead">Cada publicación debe indicar responsable, fecha, vigencia, versión y alcance.</p></div><div className="evidence-cards">{categories.map(([title,text],index)=><article key={title}><b>0{index+1}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section><section className="pending-band"><div><span>Estado de publicación</span><h2>Repositorio documental en proceso de validación institucional</h2><p>Las plantillas y controles ya están preparados. Los documentos se incorporarán cuando la Fundación confirme su versión aprobada y autorice expresamente su publicación.</p><Link className="button" href="/solicitar-orientacion">Solicitar información institucional</Link></div></section></main><ProgramFooter/><JsonLd data={structured}/></>}
