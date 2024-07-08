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

	export const meta = {
		title: 'Components/Radio',
		component: RadioGroup,
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

<Story id="fui_radio" name="Radio" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<Radio {...args} name="fav_fruit" value="apple">Apple</Radio>
			<Radio {...args} name="fav_fruit" value="orange">Orange</Radio>
			<Radio {...args} name="fav_fruit" value="banana">Banana</Radio>
			<Radio {...args} name="fav_fruit" value="pear">Pear</Radio>
		</div>
	</FluentRoot>
</Story>
