import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig, searchForWorkspaceRoot } from 'vite';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../../../packages/core/src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook'
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
						path.resolve(cwd, 'src/lib'),
						path.resolve(cwd, 'src/routes'),
						path.resolve(cwd, '.svelte-kit'),
						path.resolve(cwd, 'src'),
						path.resolve(cwd, '.node_modules'),
						path.resolve(cwd, '.storybook'),
						path.resolve(cwd, 'tailwind.config.js')
					]
				}
			}
		});

		return _;
	}
};
export default config;
