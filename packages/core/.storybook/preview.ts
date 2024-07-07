import type { Preview } from '@storybook/svelte';
import './global.css';
// import 'svelte-fui/app/app.css'

const preview: Preview = {
    parameters: {
		backgrounds: {
			default: 'light'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},

    tags: ['autodocs']
};

export default preview;