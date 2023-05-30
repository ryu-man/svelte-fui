<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Slider } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';

	const defaultValues = {};

	const argTypes = {} satisfies ArgTypes;

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

<Meta title="Components/Slider" component={Slider} {argTypes} />

<Story id="fui_slider" name="Slider" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex items-start gap-4">
				<Slider {...args} />
			</div>
		</div>
	</App>
</Story>
