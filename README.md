# Svelte Fluent UI

The primary objective of this exciting project is to seamlessly integrate Microsoft's highly anticipated Fluent UI version 9 with the powerful Svelte framework. By combining these cutting-edge technologies, we aim to deliver a truly exceptional user interface experience that is not only visually stunning but also incredibly intuitive and user-friendly.

Fluent UI, originally developed by Microsoft for the React library, is a comprehensive design system offering a vast collection of reusable components, meticulously crafted icons, and stylish themes that effortlessly align with Microsoft's acclaimed Fluent Design System.

With this integration, developers will have access to a rich toolkit that empowers them to create stunning and modern user interfaces with ease, revolutionizing the way we interact with software applications. Get ready to embark on a journey of innovation and elevate your UI development to new heights!

**Please be noticed that this project is still in early development stage, so it's not ready to be used in production yet**.

# Usage

Add @fluentui/react-components to a project:

```shell
// pnpm
pnpm install @svelte-fui/core

//npm
npm install @svelte-fui/core
```

To use Fluent design for Sveltekit app you have to make `App` component at the top level route, ex: `/routes/+layout.svelte`

```html
<script>
	import { App, Button } from '@svelte-fui/core';

	// This is ude in tailwindcss project or you can ignore and use your tailwindcss setup stylesheet, it should work fine
	import '@svelte-fui/core/styles/root';

	// Uncomment the file import if you want to use the library outside a tailwindcss project
	//import '@svelte-fui/core/styles/compiled';
</script>

<App>
	<button>Hello World!</button>
</App>
```

# Using FUI preset fot TailwindCSS

This will allow you to integrate FUI tokens into your TailwindCSS config.

```bash
// pnpm
pnpm install @svelte-fui/tailwindcss

//npm
npm install @svelte-fui/tailwindcss
```

```js
// tailwindcss.config.js
import { fuiPreset } from '@svelte-fui/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [fuiPreset],
	content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}']
};
```

Now in your `.svelte` file you can use FUI tokens as tw classes:

```html
<!-- src/routes/+page.svelte -->
<script>
	// some logic goes here
</script>

<!--  -->

<div class="bg-neutral-background-1 text-neutral-foreground-1 font-base-400">
	<!-- UI contents goes here -->
</div>
```

# Use Pre-Defined Themes

```bash
// pnpm
pnpm install @svelte-fui/themes

//npm
npm install @svelte-fui/themes
```

```html
<script>
	import { App, Button } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';

	let theme = webLightTheme;

	onMount(() => {
		function handler(schemeMedia) {
			theme = schemeMedia.matches ? webLightTheme : webDarkTheme;
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		theme = schemeMedia.matches ? webLightTheme : webDarkTheme;

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});
</script>

<App {theme}>
	<button>Fluent UI for Svelte</button>
</App>
```
