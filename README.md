## vite-starter-vanjs-ssr-jsx
A fully working vite starter template for [VanJS](https://vanjs.org) forked from [template-ssr-vanilla-ts](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-vanilla-ts).

## Important
We've created a much better project [create-vanjs](https://github.com/thednp/create-vanjs) you can use to kickstart your VanJS projects. This repository will no longer be maintained.

**Features**:
* SSR server powered by express;
* SSG prerender script included;
* JSX transformation powered by [vite-plugin-vanjs](https://github.com/thednp/vite-plugin-vanjs) with support for most important features such as Fragment, styles, attributes as State, strong types;
* isomorphic render also powered by [vite-plugin-vanjs](https://github.com/thednp/vite-plugin-vanjs).


### Install
Clone the repository from Github.
```bash
git clone https://github.com/thednp/vite-starter-vanjs-ssr-jsx.git my-project
cd my-project
```

Run your favorite package manager installation script.
```bash
npm install
```

```bash
pnpm install
```

```bash
deno install
```


### Development
Start the development server.
```bash
npm run dev
```

```bash
pnpm dev
```

```bash
deno task dev
```

### Preview
Prerender the application and start the server.
```bash
npm run preview
```

```bash
pnpm preview
```

```bash
deno task preview
```


### Build a Static Application
Prerender the application.
```bash
npm run generate
```

Start the application.
```bash
npm run start
```


### Build a Server-Side Rendering Application
Build the application.
```bash
npm run build
```

Start the application.
```bash
npm run start
```


### Other Notes
* you are expected to create pages in the `src/pages` folder in order for the prerenderer to work;
* for more information about SSR, it's highly recommanded to check the [Vite documentation](https://vite.dev/guide/ssr.html).



### License
Released under [MIT](LICENSE).
