<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';
	import Radio from './radio.svelte';
	import RadioGroup from './radio-group.svelte';

	const argDefaults = {
		disabled: false,
		required: false,
		size: 'md',
		weight: 'regular'
	};

	const argTypes = {
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

<Meta title="Components/Radio" component={RadioGroup} {argTypes} />

<Story id="fui_radio_group" name="RadioGroup" args={argDefaults} let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<RadioGroup {...args} name="fav_fruit">
				<Radio value="apple" on:change={(e) => console.log(e)}>Apple</Radio>
				<Radio value="orange" on:change={(e) => console.log(e)}>Orange</Radio>
				<Radio value="banana" on:change={(e) => console.log(e)}>Banana</Radio>
				<Radio value="pear" on:change={(e) => console.log(e)}>Pear</Radio>
			</RadioGroup>
		</div>
	</App>
</Story>
