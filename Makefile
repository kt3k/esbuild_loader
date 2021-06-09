test:
	deno test -A

fmt:
	deno fmt mod.ts mod_test.ts

fmt-check:
	deno fmt --check mod.ts mod_test.ts

lint:
	deno lint mod.ts mod_test.ts
