import { type Element as VanElement } from "mini-van-plate/van-plate";
// import van from "mini-van-plate/van-plate";
// import { ChildDom } from "vanjs-core";
type Source = number | string | VanElement | VanElement[] | Element | undefined;

// export const Fragment = (children: (Source | (() => Source))): VanElement => {
//   return { render: () => renderToHTML(children)};
// };

export function renderToHTML(
  source: Source | (() => Source),
): string {
  console.log('renderToHTML', typeof source, source);

  if (typeof source === "number") {
    return String(source);
  }
  if (typeof source === "string") {
    return source.trim();
  }
  if (typeof source === "function") {
    console.log('renderToHTML isFunction', { source });
    // const wrapper = van.tags.div({}, source() as any);
    // van.add(wrapper, source);
    // console.log('renderToHTML.wrapper', wrapper);
    // return renderToHTML(wrapper.children);
    const result = source();
    console.log('renderToHTML.result', typeof result, result);
    return renderToHTML(result);
    // return wrapper.children;
    // return source();
  }
  if (typeof source === "object" && "render" in source) {
    console.log('renderToHTML isObject with .render()', source);

    return source.render();
  }
  // if (typeof Element !== "undefined" && source instanceof Element) {
  //   return source.outerHTML;
  // }
  
  if (typeof source === 'object' && !Array.isArray(source)) {
    console.log('renderToHTML isObject', source);

    return renderToHTML(source);
  }
  if (Array.isArray(source)) {
    console.log('renderToHTML isArray', (source));

    const elements = [];
    for (const el of source) {
      elements.push(renderToHTML(el));
    }
    return elements.join("");
  }

  // no source provided
  // @ts-ignore - this is server side code
  console.warn("Vite Plugin VanJS: source not recognized:" + source);
  return "";
}
