# @svelte-fui/core

Contains all the necessary UI component of the Fluent Design System (Still under development) 

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
	<Button>Hello World!</Button>
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
	<Button>Fluent UI for Svelte</Button>
</App>
```
