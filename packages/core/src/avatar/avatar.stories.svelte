<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	import { FluentRoot, Avatar } from '@svelte-fui/core';
	import { PersonRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	export const meta = {
		title: 'Components/Avatar',
		component: Avatar,
		argTypes: arg_types,
		tags: ['!autodocs'],
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

<Story id="avatar" name="Avatar" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<Avatar {...args} src={PersonRegular} />
		</div>
	</FluentRoot>
</Story>
