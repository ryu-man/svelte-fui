<script module lang="ts">
	import { onMount } from 'svelte';
	import { Card as CardFui, FluentRoot, Icon } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	import MoreHorizontalFilled from 'virtual:icons/fluent/more-horizontal-24-filled';

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

<Story id="fui_card_appearance" name="Appearance" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<CardFui.Root {...args} class="w-[400px]" appearance="filled">
					<CardFui.Header>
						<img
							class="image h-12 w-12 rounded-md"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
							alt="App name logo"
						/>

						<span class="body-1 header"><b>App Name</b></span>

						<span class="caption-1 description">Developer</span>

						<!-- <Button slot="action"> -->
						<Icon class="action">
							<MoreHorizontalFilled />
						</Icon>
						<!-- </Button> -->
					</CardFui.Header>

					<p class="body-1">
						Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry
						jujubes toffee sugar plum.
					</p>
				</CardFui.Root>

				<CardFui.Root {...args} class="w-[400px]" appearance="filled-alternative">
					<CardFui.Header>
						<img
							class="image h-12 w-12 rounded-md"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
							alt="App name logo"
						/>

						<span class="body-1 header"><b>App Name</b></span>

						<span class="caption-1 description">Developer</span>

						<!-- <Button slot="action"> -->
						<Icon class="action">
							<MoreHorizontalFilled />
						</Icon>
						<!-- </Button> -->
					</CardFui.Header>

					<p class="body-1">
						Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry
						jujubes toffee sugar plum.
					</p>
				</CardFui.Root>

				<CardFui.Root {...args} class="w-[400px]" appearance="outline">
					<CardFui.Header>
						<img
							class="image h-12 w-12 rounded-md"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
							alt="App name logo"
						/>

						<span class="body-1 header"><b>App Name</b></span>

						<span class="caption-1 description">Developer</span>

						<!-- <Button slot="action"> -->
						<Icon class="action">
							<MoreHorizontalFilled />
						</Icon>
						<!-- </Button> -->
					</CardFui.Header>

					<p class="body-1">
						Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry
						jujubes toffee sugar plum.
					</p>
				</CardFui.Root>

				<CardFui.Root {...args} class="w-[400px]" appearance="subtle">
					<CardFui.Header>
						<img
							class="image h-12 w-12 rounded-md"
							src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/app_logo.svg"
							alt="App name logo"
						/>

						<span class="body-1 header"><b>App Name</b></span>

						<span class="caption-1 description">Developer</span>

						<!-- <Button slot="action"> -->
						<Icon class="action">
							<MoreHorizontalFilled />
						</Icon>
						<!-- </Button> -->
					</CardFui.Header>

					<p class="body-1">
						Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry
						jujubes toffee sugar plum.
					</p>
				</CardFui.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
