import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
}

test("renders the redesigned home page with local business content", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Drehwald-Balz Elektrounternehmen Mainz/);
  assert.match(html, /Elektroinstallation/);
  assert.match(html, /E-Check/);
  assert.match(html, /EDV-Verkabelung/);
  assert.match(html, /06131 682038/);
  assert.match(html, /Erzbergerstraße 20/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("renders legal pages", async () => {
  const impressum = await render("/impressum");
  const datenschutz = await render("/datenschutz");

  assert.equal(impressum.status, 200);
  assert.equal(datenschutz.status, 200);

  assert.match(await impressum.text(), /Angaben gemäß § 5 DDG/);
  assert.match(await datenschutz.text(), /Datenschutzerklärung/);
});
