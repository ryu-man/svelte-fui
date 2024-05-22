<script lang="ts">
	import { onMount } from 'svelte';
	import { App, Icon, InputSkin } from '@svelte-fui/core';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Dropdown } from '.';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_values = {
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

	let theme = webLightTheme;
	let language = '';

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

<Meta title="Components/Dropdown" component={Dropdown.Root} argTypes={arg_types} />

<Story id="dropdown" name="Dropdown" args={default_values} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex flex-col gap-4">
				<Dropdown.Root bind:value={language}>
					<Dropdown.Trigger let:data>
						<InputSkin class="min-w-[192px]">
							{#if data}
								<span>{data.lang}</span>
							{:else}
								<span>Select a language</span>
							{/if}

							<Dropdown.Arrow/>
						</InputSkin>
					</Dropdown.Trigger>

					<Dropdown.Menu>
						{#each languages as item (item.id)}
							<Dropdown.Item value={item.id} data={item}>{item.lang}</Dropdown.Item>
						{/each}
					</Dropdown.Menu>
				</Dropdown.Root>

				<div class="flex justify-between">
					<span>Selected language:</span>
					<span>{language}</span>
				</div>
			</div>
		</div>
	</App>
</Story>
