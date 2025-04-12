<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Slider as SliderFui } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const defaultArgs = {};

	const argTypes = {} satisfies ArgTypes;

	const { Story } = defineMeta({
		title: 'Components/Slider',
		component: SliderFui,
		argTypes: argTypes
	});
</script>

<script lang="ts">
	let theme = $state(webLightTheme);

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

<Story id="fui_slider" name="Slider" args={defaultArgs}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex items-start gap-4">
					<SliderFui {...args} />
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
