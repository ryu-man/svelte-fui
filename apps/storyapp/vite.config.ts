import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: [
			'@svelte-fui/core',
			'@svelte-fui/tailwind',
			'@svelte-fui/theme',
			'@svelte-fui/themes'
		],
		include: ['@svelte-fui/icons']
	}
});
