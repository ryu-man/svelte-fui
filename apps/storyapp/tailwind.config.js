import { tailwindcssConfig } from '@svelte-fui/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
    presets: [tailwindcssConfig],
    content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}', '../../packages/core/src/**/*.{html,js,svelte, stories.svelte, ts}'],

}
