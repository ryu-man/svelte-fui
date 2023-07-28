# @svelte-fui/core

`@svelte-fui/core` is a comprehensive UI library that seamlessly brings the elegant Microsoft Fluent Design System to your web applications. It offers an intuitive and extensive collection of components and tools, meticulously crafted with the power of TailwindCSS, making it effortless to create stunning and modern user interfaces. 

With @svelte-fui/core at your disposal, developers can effortlessly design beautiful, responsive layouts that captivate users and elevate their web experiences to new heights.

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

You can easily integrate the `fuiPreset` export by `@svelte-ui/tailwindcss` into your tailwind configuration if you're a TailwindCSS enthusiast and want to incorporate Fluent UI tokens into your app for creating custom components that align with the Fluent Design system. Simply follow the instructions listed below.


First, let's make sure the package is installed.

```bash
// pnpm
pnpm install @svelte-fui/tailwindcss

//npm
npm install @svelte-fui/tailwindcss
```

Next up, we just need to make the necessary change to our `taindindcss.config.js` file.

```js
// tailwindcss.config.js

import { fuiPreset } from '@svelte-fui/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [fuiPreset],
	content: ['./src/**/*.{html,js,svelte, stories.svelte, ts}'],
	// other configurations goes here
};
```
