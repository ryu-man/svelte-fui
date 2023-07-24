# Svelte Fluent UI

This project aims to brings Microsoft's Fluent UI version 9 into the Svelte framework, offering a seamless and modern user interface experience. Fluent UI is a design system developed by Microsoft that provides a set of reusable components, icons, and styles for building user interfaces that align with Microsoft's Fluent Design System.

**Please be noticed that this project is still in early development stage, so it's not ready to be used in production yet**.

# Installation

```shell
// pnpm
pnpm install @svelte-fui/core

//npm
npm install @svelte-fui/core
```

# Usage

```html
<script>
	import { App, Button } from '@svelte-fui/core';
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
  import { webLightTheme, webDarkTheme } from '@svelte-fui/themes';
  import { App, Button } from '@svelte-fui/core';

	let theme = webLightTheme;

	onMount(() => {
		function handler(schemeMedia: MediaQueryListEvent) {
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
	<Button>Fluent UI for Svelte</Button>
</App>
```
