import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig, searchForWorkspaceRoot } from 'vite';

import { join, dirname, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	viteFinal(config) {
		const cwd = searchForWorkspaceRoot(process.cwd());

		const docgenPlugin = ((config.plugins ?? []) as Plugin[]).find(
			(plugin) => plugin.name === 'storybook:svelte-docgen-plugin'
		);
		if (docgenPlugin) {
			const origTransform = docgenPlugin.transform;
			const newTransform: typeof origTransform = (code, id, options) => {
				// ignore unplugin-icons resources
				if (id.startsWith('~icons/')) {
					return;
				}
				return (origTransform as Function)?.call(docgenPlugin, code, id, options);
			};
			docgenPlugin.transform = newTransform;
			docgenPlugin.enforce = 'post';
		}

		const currentFsAllow = config?.server?.fs?.allow ?? [];
		const _ = mergeConfig(config, {
			server: {
				fs: {
					allow: [
						...currentFsAllow,
						resolve(cwd, 'src/lib'),
						resolve(cwd, 'src/routes'),
						resolve(cwd, '.svelte-kit'),
						resolve(cwd, 'src'),
						resolve(cwd, '.node_modules'),
						resolve(cwd, '.storybook'),
						resolve(cwd, 'tailwind.config.js')
					]
				}
			}
		});

		return _;
	}
};
export default config;
