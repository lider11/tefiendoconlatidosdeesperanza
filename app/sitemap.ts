import type {MetadataRoute} from "next";
import {programs} from "./programas/data";
import {SITE_URL} from "./site";
import {resources} from "./recursos/data";
export default function sitemap():MetadataRoute.Sitemap{return[{url:`${SITE_URL}/`,changeFrequency:"monthly",priority:1},{url:`${SITE_URL}/programas`,changeFrequency:"monthly",priority:.9},{url:`${SITE_URL}/recursos`,changeFrequency:"monthly",priority:.9},...['aportes','voluntariado','alianzas','solicitar-orientacion'].map(path=>({url:`${SITE_URL}/${path}`,changeFrequency:"monthly" as const,priority:.8})),...programs.map(p=>({url:`${SITE_URL}/programas/${p.slug}`,changeFrequency:"monthly" as const,priority:.7})),...resources.map(resource=>({url:`${SITE_URL}/recursos/${resource.slug}`,lastModified:new Date(resource.updated),changeFrequency:"monthly" as const,priority:.75}))]}
