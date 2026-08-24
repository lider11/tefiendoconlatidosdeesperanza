import type {ReactNode} from "react";
import {JsonLd} from "./JsonLd";
import {ProgramFooter,ProgramHeader} from "../programas/components";
import {SITE_URL} from "../site";

export function ActionPage({kicker,title,description,path,children}:{kicker:string;title:string;description:string;path:string;children:ReactNode}){
  const structured={"@context":"https://schema.org","@type":"WebPage","@id":`${SITE_URL}${path}#page`,url:`${SITE_URL}${path}`,name:title,description,inLanguage:"es-CO",isPartOf:{"@id":`${SITE_URL}/#website`},about:{"@id":`${SITE_URL}/#organization`}};
  return <><ProgramHeader/><main id="contenido"><header className="action-hero"><div><span>{kicker}</span><h1>{title}</h1><p>{description}</p></div></header>{children}</main><ProgramFooter/><JsonLd data={structured}/></>;
}
