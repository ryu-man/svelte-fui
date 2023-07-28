# @svelte-fui/tailwindcss

This project's Tailwind CSS preset for the Fluent Design System makes it simple to create modern, accessible, and customizable user interfaces. This integration enables developers to construct the desired look and feel without spending hours writing code. Using Tailwind's predefined classes, developers can readily modify the application's colors, fonts, sizes, and other design elements.


# Usage

First, install `@svelte-fui/tailwindcss`:

```shell
// pnpm
pnpm install @svelte-fui/tailwindcss

//npm
npm install @svelte-fui/tailwindcss
```

Then, you add it to your tailwindcss's presets array:

```js
// tailwindcss.config.js

import { fuiPreset } from '@svelte-fui/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [fuiPreset],
	content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}']
};
```

```html
<script>
	import { App, Button } from '@svelte-fui/core';
</script>

<App>
	<div class="text-neutral-foreground-1 text-base-400" >This a simple label</div>
	<Button>Hello World!</Button>
</App>
```
