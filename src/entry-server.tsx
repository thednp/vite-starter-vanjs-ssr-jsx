// entry-server.ts
import { renderPreloadLinks } from "./server-util/renderPreloadLinks.ts";
import { renderToHTML } from "./server-util/renderToHTML.ts";
import App from "./app";

export async function render(_url: string, manifest: Record<string, string[]>) {
  const head = '';
  const html = renderToHTML(<App /> as Element);
  const preloadLinks = renderPreloadLinks(Object.keys(manifest), manifest);
  return { html, head, preloadLinks };
}
