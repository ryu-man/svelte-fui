# Svelte Fluent UI

This project aims to integrate Microsoft's Fluent UI version 9 into the Svelte framework, offering a seamless and modern user interface experience. Fluent UI is a design system developed by Microsoft that provides a set of reusable components, icons, and styles for building user interfaces that align with Microsoft's Fluent Design System.

With this project, the goal is to leverage the power of Fluent UI v9 and combine it with the simplicity and efficiency of the Svelte framework. Svelte is a lightweight framework known for its reactive approach to building user interfaces, allowing for fast rendering and optimal performance.

Fluent UI for Svelte is built using TailwindCSS for TailwindCSS, you can easily integrate Fluent UI preset on your TailwindCSS configuration and access Fluent

# Installation

First install fluent ui for svelte:

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

# Inegration with TailwindCSS 


```bash
// pnpm
pnpm install @svelte-fui/tailwindcss

//npm
npm install @svelte-fui/tailwindcss
```

```js
// tailwindcss.config.js

import { tailwindcssConfig } from '@svelte-fui/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [tailwindcssConfig],
	content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}']
};
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
