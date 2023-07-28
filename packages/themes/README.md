# @svelte-fui/themes

Svelte FUI Themes offers a comprehensive range of pre-designed, accessible, and customizable UI themes for your Svelte applications. This library boasts the following features:

- Ready-made stylesheets to expedite your UI development process.
- User-friendly and intuitive interface for seamless integration.

Supported Themes:

- [x]  Web light
- [x]  Web dark
- [ ]  Teams light
- [ ]  Teams dark

# Usage

To begin, install Fluent UI for Svelte.

```shell
// pnpm
pnpm install @svelte-fui/themes

//npm
npm install @svelte-fui/themes
```

Then import the required theme from `@svelte-fui/themes` and passing it as the `theme` prop to the `App` component. For a seamless transition, consider attaching a listener to switch themes based on your system's color scheme.

Moreover, you can leverage the power of local storage and Svelte store to remember user preferences, ensuring a personalized and consistent experience across sessions.

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
