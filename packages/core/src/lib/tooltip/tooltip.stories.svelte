<script module lang="ts">
	import { onMount } from 'svelte';
	import {
		Button,
		FluentRoot,
		Link,
		Tooltip as TooltipFui,
		Input as InputFui
	} from '@svelte-fui/core';
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

	const { Story } = defineMeta({
		title: 'Components/Tooltip',
		component: TooltipFui.Root,
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

<Story id="fui_tooltip" name="Tooltip" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex flex-col gap-6 h-full w-full items-center justify-center">
				<TooltipFui.Root {...args}>
					<TooltipFui.Trigger as={Button}>Hello Svelte land</TooltipFui.Trigger>

					<TooltipFui.Overlay>Hello from the other side! [slotted]</TooltipFui.Overlay>
				</TooltipFui.Root>

				<TooltipFui.Root {...args}>
					<TooltipFui.Trigger as={Link} >Hello Svelte land</TooltipFui.Trigger>

					<TooltipFui.Overlay>Hello from the other side! [slotted]</TooltipFui.Overlay>
				</TooltipFui.Root>

				<TooltipFui.Root {...args} placements={['bottom-start', 'top-start']}>
					<TooltipFui.Trigger as={InputFui.Root}>
						<InputFui.Icon>$</InputFui.Icon>

						<InputFui.Element />

						<InputFui.Icon>.00</InputFui.Icon>
					</TooltipFui.Trigger>

					<TooltipFui.Overlay>Hello from the other side! [slotted]</TooltipFui.Overlay>
				</TooltipFui.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
