<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Button, Card, CardFooter, CardHeader, CardPreview, Icon, Text } from '@svelte-fui/core';
	import { MoreHorizontalFilled } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';

	const arg_defaults = {
		disabled: false,
		required: false,
		size: 'md',
		weight: 'regular'
	};

	const arg_types = {
		appearance: {
			type: 'string',
			defaultValue: 'filled',
			options: ['filled', 'subtle', 'outline', 'filled-alternative'],
			control: {
				type: 'select'
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

<Meta title="Components/Card" component={Card} />

<Story id="fui_card_header" name="Header" let:args>
	<App {theme}>
		<div class="flex flex-col gap-4 justify-center items-center w-full h-full">
			<CardHeader>
				<img
					class="w-12 h-12 rounded-md image"
					src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
					alt="App name logo"
				/>
				<Text class="header" weight="semibold">Alert in Teams when a new document is uploaded in channel</Text>
				<span class="caption-1 description text-neutral-foreground-3">By Microsoft</span>

				<Icon class="action" src={MoreHorizontalFilled} />
			</CardHeader>
		</div>
	</App>
</Story>
