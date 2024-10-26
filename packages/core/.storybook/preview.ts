import type { Preview } from '@storybook/svelte';
import './global.css';
import '../src/lib/styles/root.css';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
