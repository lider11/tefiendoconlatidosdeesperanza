import type {Metadata} from "next";
import Link from "next/link";
import {JsonLd} from "../components/JsonLd";
import {ProgramFooter,ProgramHeader} from "../programas/components";
import {SITE_URL} from "../site";
import {resources} from "./data";

export const metadata:Metadata={title:"Centro de conocimiento",description:"Guías prácticas sobre derechos, empleo, vivienda y orientación social elaboradas con fuentes oficiales.",alternates:{canonical:"/recursos"}};
export default function Page(){const structured={"@context":"https://schema.org","@type":"CollectionPage",name:"Centro de conocimiento",url:`${SITE_URL}/recursos`,inLanguage:"es-CO",mainEntity:{"@type":"ItemList",itemListElement:resources.map((resource,index)=>({"@type":"ListItem",position:index+1,url:`${SITE_URL}/recursos/${resource.slug}`,name:resource.title}))}};return <><ProgramHeader/><main id="contenido"><header className="knowledge-hero"><div><span>Conocimiento para actuar</span><h1>Guías claras para tomar el siguiente paso con información confiable</h1><p>Recursos educativos construidos a partir de fuentes oficiales y conectados con nuestras líneas de acción. No reemplazan la valoración individual de cada caso.</p></div></header><section className="section"><div className="knowledge-clusters">{["Derechos","Empleo","Vivienda","Atención social"].map(cluster=><span key={cluster}>{cluster}</span>)}</div><div className="resource-grid">{resources.map(resource=><article key={resource.slug}><span>{resource.cluster} · {resource.readingTime}</span><h2>{resource.title}</h2><p>{resource.summary}</p><div><small>Actualizado: 24 de agosto de 2026</small><Link href={`/recursos/${resource.slug}`}>Leer guía →</Link></div></article>)}</div></section></main><ProgramFooter/><JsonLd data={structured}/></>}
