<script lang="ts">
	import { onMount } from 'svelte';
	import { App } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import Spinner from './Spinner.svelte';

	const defaultValues = {
		size: 'md',
		appearance: 'primary',
		vertical: false,
		reverse: false,
		delay: 0
	};

	const argTypes = {
		size: {
			type: 'string',
			options: ['xt', 'tn', 'xs', 'sm', 'md', 'lg', 'xl', 'hg'],
			control: {
				type: 'select'
			}
		},
		appearance: {
			type: 'string',
			options: ['primary', 'inverted'],
			control: {
				type: 'select'
			}
		},
		vertical: {
			type: 'boolean'
		},
		reverse: {
			type: 'boolean'
		}
	} satisfies ArgTypes;

	let theme = webLightTheme;

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
</script>

<Meta title="Components/Spinner" component={Spinner} {argTypes} />

<Story id="spinner" name="Spinner" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<Spinner {...args} >
				Loding Data...
			</Spinner>
		</div>
	</App>
</Story>
