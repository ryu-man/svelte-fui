<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import RadioGroupFui from './radio-group.svelte';
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

	const { Story } = defineMeta({
		title: 'Components/Radio',
		component: RadioGroupFui,
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

<Story id="fui_radio_group" name="RadioGroup" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full items-center justify-center">
				<RadioGroupFui {...args} name="fav_fruit">
					<label class="flex items-center">
						<Radio value="apple" onchange={(e) => console.log(e)}></Radio>
						<div>Apple</div>
					</label>

					<label class="flex items-center">
						<Radio value="orange" onchange={(e) => console.log(e)}>Orange</Radio>
						<div>Orange</div>
					</label>

					<label class="flex items-center">
						<Radio value="banana" onchange={(e) => console.log(e)}>Banana</Radio>
						<div>Banana</div>
					</label>

					<label class="flex items-center">
						<Radio value="pear" onchange={(e) => console.log(e)}></Radio>
						<div>Pear</div>
					</label>
				</RadioGroupFui>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
