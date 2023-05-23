import path from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			formats: ['es'],
			entry: {
				index: './src/index.ts',
				web: './src/web/index.ts'
			},
			name: pkg.name
		}
	},
	resolve: {
		alias: {
			'@svelte-fui/theme': path.resolve('../theme/src')
		}
	}
});
