import { tailwindcssConfig } from '../tailwindcss/src';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [tailwindcssConfig],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
