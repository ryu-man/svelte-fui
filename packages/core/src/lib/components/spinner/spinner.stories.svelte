<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Spinner as SpinnerFui } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const defaultArgs = {};

	const argTypes = {} satisfies ArgTypes;

	const { Story } = defineMeta({
		title: 'Components/Spinner',
		component: SpinnerFui.Root,
		argTypes: argTypes
	});
</script>

<script lang="ts">
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

<Story id="spinner" name="Spinner" args={defaultArgs}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<SpinnerFui.Root {...args}>
					<SpinnerFui.Ring />
					<SpinnerFui.Label>Loding Data...</SpinnerFui.Label>
				</SpinnerFui.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
