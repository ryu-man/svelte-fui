import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
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
