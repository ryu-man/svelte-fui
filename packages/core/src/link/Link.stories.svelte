<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App } from '@svelte-fui/core';
	import { CalendarMonthFilled, CalendarMonthRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';
	import Link from './Link.svelte';

	const defaultValues = {
		appearance: 'default',
		disabled: false,
		inline: false,
		class: '',
		href: 'https://svelte.dev/'
	};

	const argTypes = {
		as: {
			type: 'string',
			options: ['a', 'button'],
			control: {
				type: 'select'
			}
		},
		href: {
			type: 'string'
		},
		appearance: {
			type: 'string',
			options: ['subtle', 'default'],
			control: {
				type: 'select'
			}
		},
		disabled: {
			type: 'boolean'
		},
		inline: {
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

<Meta title="Components/Link" component={Link} {argTypes} />

<Story id="link" name="Link" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			
            <p> Hello World ! <Link {...args}>Svelte is more than a Framework !</Link></p>
		</div>
	</App>
</Story>
