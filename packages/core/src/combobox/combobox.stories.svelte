<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Combobox, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	export const meta = {
		title: 'Components/Combobox',
		component: Combobox,
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

<Story id="combobox" name="Combobox" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex flex-col gap-4">
				<Combobox.Root {...args}>
					<Combobox.Trigger placeholder="Select a language..." />
					<Combobox.Menu>
						<Combobox.Item value="ar">Arabic</Combobox.Item>
						<Combobox.Item value="en">English</Combobox.Item>
						<Combobox.Item value="sp">Spanish</Combobox.Item>
						<Combobox.Item value="it">Italian</Combobox.Item>
						<Combobox.Item value="fr" disabled>Frensh</Combobox.Item>
					</Combobox.Menu>
				</Combobox.Root>

				<!-- <div class="flex justify-between">
					<span>Selected language:</span>
					<span>{language}</span>
				</div> -->
			</div>
		</div>
	</FluentRoot>
</Story>
