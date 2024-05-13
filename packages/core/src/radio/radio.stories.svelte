<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';
	import Radio from './radio.svelte';

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

<Meta title="Components/Radio" component={Radio} {argTypes} />

<Story id="fui_radio" name="Radio" args={argDefaults} let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<Radio {...args} name="fav_fruit" value="apple">Apple</Radio>
			<Radio {...args} name="fav_fruit" value="orange">Orange</Radio>
			<Radio {...args} name="fav_fruit" value="banana">Banana</Radio>
			<Radio {...args} name="fav_fruit" value="pear">Pear</Radio>
		</div>
	</App>
</Story>
