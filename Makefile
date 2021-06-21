test:
	deno test -A mod_test.ts

fmt:
	deno fmt mod.ts mod_test.ts

fmt-check:
	deno fmt --check mod.ts mod_test.ts

lint:
	deno lint mod.ts mod_test.ts
