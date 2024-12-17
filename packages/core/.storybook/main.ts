import type { StorybookConfig } from '@storybook/sveltekit';
import { searchForWorkspaceRoot } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/lib/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
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

		return config;
	}
};
export default config;
