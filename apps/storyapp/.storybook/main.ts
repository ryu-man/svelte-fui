import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../../../packages/core/src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-svelte-csf'],
  framework: {
    name: '@storybook/sveltekit',
    options: {
    }
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
