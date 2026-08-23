import type {MetadataRoute} from "next";
import {programs} from "./programas/data";
const base="https://fundacion-tejiendo-latidos.devergel1980.chatgpt.site";
export default function sitemap():MetadataRoute.Sitemap{return[{url:base,changeFrequency:"monthly",priority:1},{url:`${base}/programas`,changeFrequency:"monthly",priority:.9},...programs.map(p=>({url:`${base}/programas/${p.slug}`,changeFrequency:"monthly" as const,priority:.7}))]}
