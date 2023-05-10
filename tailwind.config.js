import preset from './src/lib/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
    presets: [preset],
    content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}'],

}
