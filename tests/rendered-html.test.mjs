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
  assert.match(html,/href="#solicitar-apoyo"/i);
  assert.match(html,/id="privacidad"/i);
});
