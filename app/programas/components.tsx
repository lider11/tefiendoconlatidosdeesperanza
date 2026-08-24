"use client";
import {SiteHeader} from "../components/SiteHeader";
import {SiteFooter} from "../components/SiteFooter";
export function ProgramHeader(){return <SiteHeader/>}
export function ProgramFooter(){return <SiteFooter/>}
export function LineIcon({number}:{number:string}){return <span className="line-icon" aria-hidden="true">{number}</span>}
