<script module lang="ts">
	import { Combobox as ComboboxFui, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Combobox',
		component: ComboboxFui.Root,
		argTypes: arg_types
	});
</script>

<script lang="ts">
	let theme = $state(webLightTheme);

	$effect(() => {
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

	let value = $state('');

	let selections: string[] = $state([]);

	let languages_all = $state([
		{ value: 'ar', name: 'Arabic' },
		{ value: 'en', name: 'English' },
		{ value: 'sp', name: 'Spanish' },
		{ value: 'it', name: 'Italian' },
		{ value: 'fr', name: 'Frensh' }
	]);

	const languages_filtered = $derived(
		languages_all.filter((lang) => !value || lang.name.toLowerCase().includes(value.toLowerCase()))
	);
</script>

<Story id="combobox" name="Combobox" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex flex-col gap-4">
					<ComboboxFui.Root {...args} multiple bind:values={selections}>
						<ComboboxFui.Input placeholder="Select a language..." bind:value />
						<ComboboxFui.Menu>
							{#each languages_filtered as lang (lang.value)}
								<!-- content here -->
								<ComboboxFui.Item value={lang.value}>
									<ComboboxFui.Checkbox />
									<div>{lang.name}</div>
								</ComboboxFui.Item>
							{/each}
						</ComboboxFui.Menu>
					</ComboboxFui.Root>

					<div class="flex justify-between">
						<span>Selections:</span>
						<span>{selections}</span>
					</div>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
