import assert from "node:assert/strict";
import test from "node:test";

test("renders accessible institutional metadata and navigation", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html=await response.text();
  assert.match(html,/<title>Fundación Tejiendo con Latidos de Esperanza<\/title>/i);
  assert.match(html,/rel="canonical" href="https:\/\/www\.tejiendoconlatidodeesperanza\.site\/"/i);
  assert.match(html,/property="og:image" content="https:\/\/www\.tejiendoconlatidodeesperanza\.site\/og\.png"/i);
  assert.match(html,/"@type":"WebSite"/i);
  assert.match(html,/"@type":"NGO"/i);
  assert.match(html,/class="skip-link" href="#contenido"/i);
  assert.match(html,/aria-label="Navegación principal"/i);
  assert.match(html,/href="\/solicitar-orientacion"/i);
  assert.match(html,/href="\/privacidad"/i);
  assert.match(html,/<summary>Participa<\/summary>/i);
  assert.doesNotMatch(html,/class="contribution-form"/i);
});

test("renders strategic SEO routes with canonical metadata and structured data",async()=>{
  const workerUrl=new URL("../dist/server/index.js",import.meta.url);
  workerUrl.searchParams.set("routes",`${process.pid}-${Date.now()}`);
  const{default:worker}=await import(workerUrl.href);
  const routes=[
    ["/recursos","Centro de conocimiento"],
    ["/recursos/derecho-peticion-ruta-basica","Derecho de petición en Colombia"],
    ["/proyectos","Proyectos y evidencias"],
    ["/transparencia","Transparencia y rendición de cuentas"],
    ["/aportes","Realizar aportes"],
    ["/solicitar-orientacion","Solicitar orientación"],
    ["/privacidad","Privacidad y tratamiento de datos"],
  ];
  for(const[path,title]of routes){
    const response=await worker.fetch(new Request(`http://localhost${path}`,{headers:{accept:"text/html"}}),{ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},{waitUntil(){},passThroughOnException(){}});
    assert.equal(response.status,200,`${path} debe responder 200`);
    const html=await response.text();
    assert.match(html,new RegExp(`<title>[^<]*${title.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}`,"i"),`${path} debe tener título propio`);
    assert.match(html,new RegExp(`rel="canonical" href="https://www\\.tejiendoconlatidodeesperanza\\.site${path.replaceAll("/","\\/")}"`,"i"),`${path} debe tener canónica propia`);
    assert.match(html,/application\/ld\+json/i,`${path} debe incluir datos estructurados`);
    assert.doesNotMatch(html,/noindex/i,`${path} no debe bloquear indexación`);
  }
});
