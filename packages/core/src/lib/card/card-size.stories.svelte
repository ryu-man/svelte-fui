<script module lang="ts">
	import { onMount } from 'svelte';
	import { Card as CardFui, FluentRoot, Text } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {
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

	const { Story } = defineMeta({
		title: 'Components/Card',
		component: CardFui.Root,
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

<Story id="fui_card_size" name="Size" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<CardFui.Root {...args} class="w-[400px]" appearance="filled" size="sm">
					<div class="gap-xs flex">
						<img
							class="h-8 rounded-md"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/logo.svg"
							alt="Application one logo"
						/>
						<img
							class="h-8 rounded-md"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/logo2.svg"
							alt="Application two logo"
						/>
					</div>
					<CardFui.Header>
						<Text class="header" weight="semibold"
							>Alert in Teams when a new document is uploaded in channel</Text
						>
						<span class="caption-1 description text-neutral-foreground-3">By Microsoft</span>
					</CardFui.Header>

					<div class="text-base-300 leading-base-300 flex items-center justify-between">
						<span>Automated</span>
						<span>3290</span>
					</div>
				</CardFui.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
