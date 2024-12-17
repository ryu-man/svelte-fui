<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import RadioGroup from './radio-group.svelte';
	import RadioFui from './radio.svelte';

	const default_args = {
		disabled: false,
		required: false,
		size: 'md',
		weight: 'regular'
	};

	const arg_types = {
		disabled: {
			type: 'boolean',
			defaultValue: false,
			control: {
				type: 'boolean'
			}
		},
		required: {
			type: 'boolean',
			defaultValue: false,
			control: {
				type: 'boolean'
			}
		},
		size: {
			type: 'string',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'select'
			}
		},
		weight: {
			type: 'string',
			defaultValue: 'regular',
			options: ['regular', 'semibold'],
			control: {
				type: 'select'
			}
		}
	} satisfies ArgTypes;

	const { Story } = defineMeta({
		title: 'Components/Radio',
		component: RadioGroup,
		argTypes: arg_types
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

<Story id="fui_radio" name="Radio" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full items-center justify-center">
				<label class="flex items-center">
					<RadioFui {...args} name="fav_fruit" value="apple"></RadioFui>
					<div>Apple</div>
				</label>

				<label class="flex items-center">
					<RadioFui {...args} name="fav_fruit" value="orange"></RadioFui>
					<div>Orange</div>
				</label>

				<label class="flex items-center">
					<RadioFui {...args} name="fav_fruit" value="banana"></RadioFui>
					<div>Banana</div>
				</label>

				<label class="flex items-center">
					<RadioFui {...args} name="fav_fruit" value="pear"></RadioFui>
					<div>Pear</div>
				</label>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
