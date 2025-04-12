<script module lang="ts">
	import { FluentRoot, Icon as IconFui } from '@svelte-fui/core';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AlertRegularIcon from 'virtual:icons/fluent/alert-48-regular';
	import { onMount } from 'svelte';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';

	const argTypes = {} satisfies ArgTypes;

	const defaultArgs: Partial<Record<keyof typeof argTypes, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Icon',
		component: IconFui,
		argTypes: argTypes
	});
</script>

<script>
	let theme = $state(webLightTheme);

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

<Story name="Icon" args={defaultArgs}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full items-center justify-center">
				<IconFui {...args} class="">
					<AlertRegularIcon />
				</IconFui>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
