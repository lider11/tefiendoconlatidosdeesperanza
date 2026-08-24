import {readFileSync,readdirSync,statSync} from "node:fs";
import {gzipSync} from "node:zlib";

const root=new URL("../app/styles/",import.meta.url);
const files=readdirSync(root).filter(name=>name.endsWith(".css"));
const css=files.map(name=>readFileSync(new URL(name,root),"utf8")).join("\n");
const gzipBytes=gzipSync(css).byteLength;
const important=(css.match(/!important/g)||[]).length;
const externalImports=(css.match(/@import\s+url\(/g)||[]).length;
const hexColors=new Set(css.match(/#[0-9a-fA-F]{3,8}\b/g)||[]).size;
const maxGzipBytes=16*1024;

console.log(JSON.stringify({files:files.length,sourceBytes:Buffer.byteLength(css),gzipBytes,important,externalImports,hexColors},null,2));
if(gzipBytes>maxGzipBytes)throw new Error(`CSS gzip ${gzipBytes} supera el presupuesto ${maxGzipBytes}`);
if(externalImports>0)throw new Error("No se permiten fuentes o CSS externos mediante @import url()");
if(!statSync(new URL("tokens.css",root)).isFile())throw new Error("Falta el archivo canónico de tokens");
