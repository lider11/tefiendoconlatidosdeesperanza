"use client";

import {useState} from "react";
import {Brand} from "../Brand";
import {Icon} from "../Icon";
import {pillarPaths} from "./data";

export function PillarsSection(){
  const[active,setActive]=useState(0);
  const pillar=pillarPaths[active];
  return <section className="pillar-paths" id="pilares"><div className="section">
    <div className="pillar-paths-head"><div className="section-kicker light">Nuestros pilares</div><h2>Ocho caminos. <em>Un mismo propósito.</em></h2><p>Las necesidades sociales no aparecen de forma aislada. Por eso conectamos ocho caminos para avanzar desde la vulnerabilidad hacia la dignidad, las capacidades y la autonomía.</p></div>
    <div className="pillar-story"><span>Una respuesta integral</span><p>Una dificultad puede afectar al mismo tiempo los derechos, la vivienda, la alimentación, la educación y la estabilidad familiar. Cada pilar aporta una capacidad distinta para construir una ruta posible.</p><small>Este recorrido explica nuestro modelo institucional; no representa un caso particular ni resultados ya alcanzados.</small></div>
    <div className="path-explorer"><div className="path-nav" role="tablist" aria-label="Ocho caminos de transformación">{pillarPaths.map((item,index)=><button key={item.key} role="tab" aria-selected={active===index} className={active===index?"active":""} onClick={()=>setActive(index)}><span>{String(index+1).padStart(2,"0")}</span><Icon name={item.icon}/><strong>{item.short}</strong><small>{item.title}</small></button>)}</div><div className="path-center" aria-hidden="true"><div className="path-heart"><Brand compact/><span>Dignidad</span><span>Capacidades</span><span>Autonomía</span></div></div></div>
    <article className="pillar-detail" role="tabpanel" aria-live="polite"><header><div><span>Camino {String(active+1).padStart(2,"0")}</span><h3>{pillar.title}</h3><p>{pillar.promise}</p></div><b className="pillar-status">{pillar.status}</b></header><div className="pillar-narrative"><section><span>La realidad que nos moviliza</span><p>{pillar.reality}</p></section><section><span>Nuestra respuesta</span><p>{pillar.response}</p></section><section><span>La transformación que buscamos</span><p>{pillar.change}</p></section></div><div className="pillar-evidence"><div><span>Programa relacionado</span><a href={"/programas/"+pillar.slug}>{pillar.program} <b>→</b></a></div><div><span>Indicadores propuestos</span><p>{pillar.indicator}</p><small>Se publicarán resultados únicamente después de su validación institucional.</small></div><div><span>Evidencia y transparencia</span><p>Ficha técnica, población, territorio, actividades, aliados y resultados verificables.</p><small>Espacio preparado para documentos aprobados.</small></div></div></article>
    <div className="pillar-actions"><div><span>Cada transformación necesita muchos hilos.</span><p>Elige cómo quieres conectarte con este propósito.</p></div><div><a href="#solicitar-apoyo">Necesito orientación</a><a href="#participa">Quiero ser voluntario</a><a href="#aportes">Quiero aportar</a><a href="#participa">Quiero construir una alianza</a></div></div>
  </div></section>
}
