import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps:{
		include:[
			"@svelte-fui/core",
			"@svelte-fui/tailwind",
			"@svelte-fui/theme",
			"@svelte-fui/themes",
			"@svelte-fui/icons"
		]
	}
});
