<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Dropdown as DropdownFui } from '.';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {
		size: 'md',
		appearance: 'outline',
		shape: 'rounded'
	};

	const arg_types = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'select'
			}
		},
		shape: {
			type: 'string',
			options: ['circular', 'square', 'rounded'],
			control: {
				type: 'select'
			}
		},
		appearance: {
			type: 'string',
			options: ['outline', 'underline', 'filled-darker', 'filled-lighter'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

	const { Story } = defineMeta({
		title: 'Components/Dropdown',
		component: DropdownFui.Root,
		argTypes: arg_types
	});
</script>

<script lang="ts">
	let theme = $state(webLightTheme);
	let values = $state([]);

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

	const languages = [
		{ id: 'ar', lang: 'Arabic' },
		{ id: 'en', lang: 'English' },
		{ id: 'fr', lang: 'Frensh' },
		{ id: 'it', lang: 'Italien' }
	];
</script>

<Story id="dropdown" name="Dropdown" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex flex-col gap-4">
					<DropdownFui.Root bind:values multiple>
						<DropdownFui.Input></DropdownFui.Input>

						<DropdownFui.Menu placements={['bottom-start']}>
							{#each languages as item (item.id)}
								<DropdownFui.Item value={item.id} data={item}>
									<DropdownFui.Checkbox />
									<div>{item.lang}</div>
								</DropdownFui.Item>
							{/each}
						</DropdownFui.Menu>
					</DropdownFui.Root>

					<div class="flex justify-between">
						<span>Selected languages:</span>
						<span>{values}</span>
					</div>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
