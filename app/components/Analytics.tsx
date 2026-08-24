"use client";

import {useEffect} from "react";

declare global {interface Window {dataLayer?: unknown[][]; gtag?: (...args:unknown[])=>void}}

export function Analytics(){
  useEffect(()=>{
    const id=process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if(!id||!/^G-[A-Z0-9]+$/i.test(id))return;
    window.dataLayer=window.dataLayer||[];
    window.gtag=(...args:unknown[])=>window.dataLayer?.push(args);
    window.gtag("js",new Date());
    window.gtag("config",id,{anonymize_ip:true});
    const script=document.createElement("script");
    script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
    return()=>script.remove();
  },[]);
  return null;
}

export function trackConversion(name:string,params:Record<string,string>={}){window.gtag?.("event",name,params)}
