<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Card, CardHeader, FluentRoot, Icon } from '@svelte-fui/core';
	import { MoreHorizontalFilled } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
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

	export const meta = {
		title: 'Components/Card',
		component: Card,
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

<Story id="fui_card_appearance" name="Appearance" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<Card {...args} class="w-[400px]" appearance="filled">
				<CardHeader>
					<img
						class="image h-12 w-12 rounded-md"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
						alt="App name logo"
					/>

					<span class="body-1 header"><b>App Name</b></span>

					<span class="caption-1 description">Developer</span>

					<!-- <Button slot="action"> -->
					<Icon class="action" src={MoreHorizontalFilled} />
					<!-- </Button> -->
				</CardHeader>

				<p class="body-1">Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.</p>
			</Card>

			<Card {...args} class="w-[400px]" appearance="filled-alternative">
				<CardHeader>
					<img
						class="image h-12 w-12 rounded-md"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
						alt="App name logo"
					/>

					<span class="body-1 header"><b>App Name</b></span>

					<span class="caption-1 description">Developer</span>

					<!-- <Button slot="action"> -->
					<Icon class="action" src={MoreHorizontalFilled} />
					<!-- </Button> -->
				</CardHeader>

				<p class="body-1">Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.</p>
			</Card>

			<Card {...args} class="w-[400px]" appearance="outline">
				<CardHeader>
					<img
						class="image h-12 w-12 rounded-md"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
						alt="App name logo"
					/>

					<span class="body-1 header"><b>App Name</b></span>

					<span class="caption-1 description">Developer</span>

					<!-- <Button slot="action"> -->
					<Icon class="action" src={MoreHorizontalFilled} />
					<!-- </Button> -->
				</CardHeader>

				<p class="body-1">Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.</p>
			</Card>

			<Card {...args} class="w-[400px]" appearance="subtle">
				<CardHeader>
					<img
						class="image h-12 w-12 rounded-md"
						src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
						alt="App name logo"
					/>

					<span class="body-1 header"><b>App Name</b></span>

					<span class="caption-1 description">Developer</span>

					<!-- <Button slot="action"> -->
					<Icon class="action" src={MoreHorizontalFilled} />
					<!-- </Button> -->
				</CardHeader>

				<p class="body-1">Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.</p>
			</Card>
		</div>
	</FluentRoot>
</Story>
