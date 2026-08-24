import type { Metadata } from "next";
import {DM_Sans,Source_Serif_4} from "next/font/google";
import "./globals.css";
import {JsonLd} from "./components/JsonLd";
import {SITE_NAME,SITE_URL} from "./site";
import {Analytics} from "./components/Analytics";

const bodyFont=DM_Sans({subsets:["latin"],variable:"--font-body",display:"swap"});
const displayFont=Source_Serif_4({subsets:["latin"],variable:"--font-display",display:"swap"});

export const metadata:Metadata={metadataBase:new URL(SITE_URL),title:{default:SITE_NAME,template:"%s | Fundación Tejiendo"},description:"Fundación en Barranquilla que promueve redes de apoyo, derechos, educación, vivienda digna, cooperación e inclusión social en Colombia.",keywords:["fundación Colombia","fundación social Barranquilla","desarrollo social","garantía de derechos","vivienda digna","cooperación","inclusión social"],alternates:{canonical:"/"},openGraph:{title:SITE_NAME,description:"Uniendo corazones, transformando realidades.",type:"website",locale:"es_CO",siteName:SITE_NAME,url:SITE_URL,images:[{url:"/og.png",width:1200,height:630,alt:`${SITE_NAME} — Uniendo corazones, transformando realidades.`}]},twitter:{card:"summary_large_image",title:SITE_NAME,description:"Uniendo corazones, transformando realidades.",images:["/og.png"]},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){const structured={"@context":"https://schema.org","@graph":[{"@type":"NGO","@id":`${SITE_URL}/#organization`,name:SITE_NAME,url:`${SITE_URL}/`,logo:{"@type":"ImageObject",url:`${SITE_URL}/favicon.svg`},slogan:"Uniendo corazones, transformando realidades.",areaServed:{"@type":"Country",name:"Colombia"},address:{"@type":"PostalAddress",addressLocality:"Barranquilla",addressRegion:"Atlántico",addressCountry:"CO"}},{"@type":"WebSite","@id":`${SITE_URL}/#website`,url:`${SITE_URL}/`,name:SITE_NAME,inLanguage:"es-CO",publisher:{"@id":`${SITE_URL}/#organization`}}]};return <html lang="es" className={`${bodyFont.variable} ${displayFont.variable}`}><body>{children}<Analytics/><JsonLd data={structured}/></body></html>}
