# esbuild_loader v0.12.8

This module provides a way to load esbuild wasm from the disk easily.

# Usage

This module exports `load` method. The method works like the below:

```ts
import { load } from "https://deno.land/x/esbuild_loader@v0.12.8/mod.ts";
const { build } = await load("local/path/to/esbuild.wasm");
build({ entryPoints: ["./foo.js"] });
```

`load` returns builder interface which expose `build` method. `build` method has the same signature as [Esbuild's Build API](https://esbuild.github.io/api/#build-api).

# Deno compatible bundling

You can bundle JavaScript and TypeScript in Deno compatible way using [esbuild_deno_loader](https://github.com/lucacasonato/esbuild_deno_loader).

```ts
export { denoPlugin } from "https://raw.githubusercontent.com/lucacasonato/esbuild_deno_loader/fa2219c3df9494da6c33e3e4dffb1a33b5cc0345/mod.ts";
import { load } from "https://deno.land/x/esbuild_loader@v0.12.8/mod.ts";
const { build } = await load("local/path/to/esbuild.wasm");
build({ entryPoints: ["./foo.js"], plugins: [denoPlugin()], bundle: true });
```

This performs Deno compatible bundling.

# License

MIT
