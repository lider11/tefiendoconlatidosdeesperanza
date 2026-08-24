import type {MetadataRoute} from "next";
import {programs} from "./programas/data";
import {SITE_URL} from "./site";
export default function sitemap():MetadataRoute.Sitemap{return[{url:`${SITE_URL}/`,changeFrequency:"monthly",priority:1},{url:`${SITE_URL}/programas`,changeFrequency:"monthly",priority:.9},...programs.map(p=>({url:`${SITE_URL}/programas/${p.slug}`,changeFrequency:"monthly" as const,priority:.7}))]}
