<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Label, Switch as SwitchFui } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {};

	const arg_types = {} satisfies ArgTypes;

	const { Story } = defineMeta({
		title: 'Components/Switch',
		component: SwitchFui,
		argTypes: arg_types
	});
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

<Story id="fui_switch" name="Switch" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex items-start gap-4">
					<SwitchFui {...args} />

					<SwitchFui {...args} position="before">
						<Label>Enable Dark Theme</Label>
					</SwitchFui>
					<SwitchFui {...args} position="above">
						<Label>Enable Dark Theme</Label>
					</SwitchFui>
					<SwitchFui {...args} position="after">
						<Label>Enable Dark Theme</Label>
					</SwitchFui>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
