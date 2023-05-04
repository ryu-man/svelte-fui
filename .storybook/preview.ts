import type { Preview } from '@storybook/svelte';
import './global.css';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light'
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
};

export default preview;
