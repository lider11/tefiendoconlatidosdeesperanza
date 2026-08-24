import type {Metadata} from "next";
import {JsonLd} from "../components/JsonLd";
import {PrivacySection} from "../components/home/StaticSections";
import {ProgramFooter,ProgramHeader} from "../programas/components";
import {SITE_URL} from "../site";

export const metadata:Metadata={title:"Privacidad y tratamiento de datos",description:"Información sobre el tratamiento inicial de datos enviados a la Fundación Tejiendo con Latidos de Esperanza.",alternates:{canonical:"/privacidad"}};
export default function Page(){const structured={"@context":"https://schema.org","@type":"WebPage",name:"Privacidad y tratamiento de datos",url:`${SITE_URL}/privacidad`,inLanguage:"es-CO"};return <><ProgramHeader/><main id="contenido"><header className="action-hero"><div><span>Protección de información</span><h1>Privacidad y tratamiento responsable de datos</h1><p>Conoce el alcance del uso de la información enviada mediante nuestros canales digitales.</p></div></header><PrivacySection/></main><ProgramFooter/><JsonLd data={structured}/></>}
