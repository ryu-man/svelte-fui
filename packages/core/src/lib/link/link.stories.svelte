<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import LinkFui from './Link.svelte';

	const default_args = {
		appearance: 'default',
		disabled: false,
		inline: false,
		class: '',
		href: 'https://svelte.dev/'
	};

	const arg_types = {
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

	const { Story } = defineMeta({
		title: 'Components/Link',
		component: LinkFui,
		argTypes: arg_types
	});
</script>

<script lang="ts">
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

<Story id="link" name="Link" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<p>Hello World ! <LinkFui {...args}>Svelte is more than a Framework !</LinkFui></p>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
