<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Text } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {};

	const arg_types = {} satisfies ArgTypes;

	export const meta = {
		title: 'Components/Text',
		component: Text,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let theme = webLightTheme;

	onMount(() => {
		function handler(e: MediaQueryListEvent) {
			theme = e.matches ? webLightTheme : webDarkTheme;
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		theme = schemeMedia.matches ? webLightTheme : webDarkTheme;

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});
</script>

<Story id="fui_text" name="Text" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<Text {...args}>This is an example of the Text component's usage.</Text>
		</div>
	</FluentRoot>
</Story>
