import { fuiPreset } from '../../packages/tailwindcss/src'

/** @type {import('tailwindcss').Config} */
export default {
    presets: [fuiPreset],
    content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}', '../../packages/core/src/**/*.{html,js,svelte, stories.svelte, ts}'],

}
