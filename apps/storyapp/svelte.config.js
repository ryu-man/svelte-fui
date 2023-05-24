import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'@svelte-fui/core': path.resolve('../../packages/core/src'),
			'@svelte-fui/tailwindcss': path.resolve('../../packages/tailwindcss/src'),
			'@svelte-fui/theme': path.resolve('../../packages/theme/src'),
			'@svelte-fui/themes': path.resolve('../../packages/themes/src'),
		}
	}
};

export default config;
