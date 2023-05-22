<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Button, Card, CardFooter, CardHeader, CardPreview, Icon, Text } from '@svelte-fui/core';
	import { MoreHorizontalFilled } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/theme/src/themes/web';
	import { onMount } from 'svelte';

	const argDefaults = {
		disabled: false,
		required: false,
		size: 'md',
		weight: 'regular'
	};

	const argTypes = {
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

<Story id="fui_card_size" name="Size" let:args>
	<App {theme}>
		<div class="flex flex-col gap-4 justify-center items-center w-full h-full">
			<Card {...args} class="w-[400px]" appearance="filled" size="sm">
				<div class="flex gap-xs">
					<img
						class="rounded-md h-8"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/logo.svg"
						alt="Application one logo"
					/>
					<img
						class="rounded-md h-8"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/logo2.svg"
						alt="Application two logo"
					/>
				</div>
				<CardHeader>
					<Text class="header" weight="semibold">Alert in Teams when a new document is uploaded in channel</Text>
					<span class="caption-1 description text-neutral-foreground-3">By Microsoft</span>
				</CardHeader>

				<div class="flex justify-between items-center text-base-300 leading-base-300">
					<span>Automated</span>
					<span>3290</span>
				</div>
			</Card>
		</div>
	</App>
</Story>
