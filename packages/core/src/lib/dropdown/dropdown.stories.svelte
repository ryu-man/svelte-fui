<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Dropdown as DropdownFui } from '.';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import LocalLanguageZiRegular from 'virtual:icons/fluent/local-language-zi-24-regular';

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

<Story name="Dropdown" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex flex-col gap-4 w-[50svw]">
					<DropdownFui.Root {...args} bind:values multiple>
						<DropdownFui.Trigger class="w-full">
							{#snippet placeholder()}
								<div class="flex items-center gap-2">Select a language <Icon class="h-full"><LocalLanguageZiRegular /></Icon></div>
							{/snippet}
						</DropdownFui.Trigger>

						<DropdownFui.List placements={['bottom-start']}>
							{#each languages as item (item.id)}
								<DropdownFui.Item value={item.id} data={item}>
									<DropdownFui.Checkbox />
									<div>{item.lang}</div>
								</DropdownFui.Item>
							{/each}
						</DropdownFui.List>
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
