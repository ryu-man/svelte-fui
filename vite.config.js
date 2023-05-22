import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import configs from './svelte.config';
export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    resolve: {
        alias: {
            ...configs.kit.alias
        }
    },
    optimizeDeps: {
        include: ['@svelte-fui/icons']
    }
});
//# sourceMappingURL=vite.config.js.map