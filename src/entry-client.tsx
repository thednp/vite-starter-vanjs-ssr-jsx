// entry-client.ts
import van from "@vanjs/van";
import App from "./app";

const root = document.getElementById("app") as HTMLElement;

van.hydrate(root, (dom) => {
  dom.replaceChildren(<App /> as Element);
  return dom;
});
