// @deno-types="./vendor/browser.d.ts"
import { build, initialize } from "./vendor/browser.js";

export { build, initialize };

let ready: null | Promise<void> = null;

/**
 * Loads the esbuild from the given path in a local machine, and returns builder interface
 * which has build method that performs esbuild building or bundling.
 */
export async function load(wasmPath: string): Promise<{ build: typeof build }> {
  if (ready) {
    await ready;
    return { build };
  }
  ready = initialize({ wasmPath });
  await ready;
  return { build };
}
