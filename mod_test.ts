import { assertStringIncludes } from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { load } from "./mod.ts";
import { resolve, toFileUrl } from "https://deno.land/std@0.97.0/path/mod.ts";
import { denoPlugin } from "https://raw.githubusercontent.com/lucacasonato/esbuild_deno_loader/fa2219c3df9494da6c33e3e4dffb1a33b5cc0345/mod.ts";

Deno.test("load", async () => {
  const { build } = await load("./vendor/esbuild.wasm");
  console.log(resolve("./testdata/foo.js"));
  const result = await build({
    entryPoints: [toFileUrl(resolve("./testdata/foo.js")).href],
    plugins: [denoPlugin()],
    bundle: true,
  });
  const { text } = result.outputFiles![0];
  assertStringIncludes(text, "function bar()");
  assertStringIncludes(text, "console.log(bar())");
});
