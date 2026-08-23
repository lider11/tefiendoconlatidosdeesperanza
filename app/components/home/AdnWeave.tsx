"use client";

import {useState} from "react";
import {Brand} from "../Brand";
import {adnThreads} from "./data";

export function AdnWeave(){
  const[active,setActive]=useState<keyof typeof adnThreads>("corazon");
  const item=adnThreads[active];
  return <section className="adn-weave" id="adn"><div className="section">
    <div className="adn-weave-head"><div className="section-kicker">Nuestro ADN</div><h2>El tejido que <em>nos une</em></h2><p>Una transformación no se construye con un solo hilo. Se teje cuando comunidades, voluntarios, aliados y donantes unen sus capacidades alrededor de un propósito común.</p></div>
    <div className="weave-stage" aria-label="Cuatro hilos institucionales convergen en un mismo propósito"><svg viewBox="0 0 700 340" role="img" aria-labelledby="weave-title weave-desc"><title id="weave-title">El tejido que nos une</title><desc id="weave-desc">Los hilos Corazón, Raíces, Manos y Horizonte convergen en el corazón de la Fundación.</desc><path className={"weave-thread corazon "+(active==="corazon"?"active":"")} d="M30 55 C190 35 190 175 315 165"/><path className={"weave-thread raices "+(active==="raices"?"active":"")} d="M30 280 C170 305 210 205 320 180"/><path className={"weave-thread manos "+(active==="manos"?"active":"")} d="M670 55 C510 35 510 175 385 165"/><path className={"weave-thread horizonte "+(active==="horizonte"?"active":"")} d="M670 280 C530 305 490 205 380 180"/><circle className="thread-node corazon" cx="30" cy="55" r="10"/><circle className="thread-node raices" cx="30" cy="280" r="10"/><circle className="thread-node manos" cx="670" cy="55" r="10"/><circle className="thread-node horizonte" cx="670" cy="280" r="10"/><path className="weave-heart" d="M350 270 C320 235 265 205 265 155 C265 112 318 92 350 132 C382 92 435 112 435 155 C435 205 380 235 350 270Z"/><path className="weave-pulse" d="M295 177 L326 177 L339 149 L359 205 L374 166 L389 177 L411 177"/><text x="350" y="304">Un mismo propósito</text></svg></div>
    <div className="weave-tabs" role="tablist" aria-label="Pilares de nuestro ADN">{(Object.keys(adnThreads) as Array<keyof typeof adnThreads>).map(key=><button key={key} role="tab" aria-selected={active===key} className={active===key?"active":""} onClick={()=>setActive(key)}><strong>{adnThreads[key].title}</strong><span>{adnThreads[key].subtitle}</span></button>)}</div>
    <div className="weave-detail" role="tabpanel" aria-live="polite"><div className={"weave-symbol "+active}><Brand compact/></div><div><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.text}</p><div className="weave-values">{item.values.map(value=><b key={value}>{value}</b>)}</div></div></div>
    <div className="weave-join"><div><span>Somos muchos hilos, un mismo propósito</span><p>Cada persona puede aportar una capacidad distinta. Cuando las entrelazamos, construimos comunidades más fuertes, justas e inclusivas.</p></div><div><a className="button" href="#participa">Quiero ser parte</a><a className="button button-ghost" href="/programas">Conocer nuestros programas</a></div></div>
  </div></section>
}
