<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import RadioGroup from './radio-group.svelte';
	import Radio from './radio.svelte';

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
		name: {
			type: 'string'
		},
		layout: {
			type: 'string',
			defaultValue: 'vertical',
			options: ['vertical', 'horizontal', 'horizontal-stacked']
		}
	} satisfies ArgTypes;

	export const meta = {
		title: 'Components/Radio',
		component: RadioGroup,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
	let theme = webLightTheme;
	let value = undefined;

	$: console.log(value);

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

<Story id="fui_radio_group" name="RadioGroup" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<RadioGroup {...args} name="fav_fruit" bind:value>
				<Radio value="apple" on:change={(e) => console.log(e)}>Apple</Radio>
				<Radio value="orange" on:change={(e) => console.log(e)}>Orange</Radio>
				<Radio value="banana" on:change={(e) => console.log(e)}>Banana</Radio>
				<Radio value="pear" on:change={(e) => console.log(e)}>Pear</Radio>
			</RadioGroup>
		</div>
	</FluentRoot>
</Story>
