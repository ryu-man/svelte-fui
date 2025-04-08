<script module lang="ts">
	import { onMount } from 'svelte';
	import { Checkbox as CheckboxFui, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const argTypes = {} satisfies ArgTypes;

	const defaultArgs: Partial<Record<keyof typeof argTypes, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Checkbox',
		component: CheckboxFui,
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

<Story id="fui_checkbox" name="Checkbox" args={defaultArgs}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center">
				<CheckboxFui {...args} />
				<label>
					<CheckboxFui {...args} />
					Hello World!
				</label>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
