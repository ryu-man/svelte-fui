<script module lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon, Input as InputFui } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import MicRegularIcon from 'virtual:icons/fluent/mic-48-regular';
	import PersonRegularIcon from 'virtual:icons/fluent/person-48-regular';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Input',
		component: InputFui.Root,
		argTypes: arg_types
	});
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

<Story id="input" name="Input" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full items-center justify-center">
				<InputFui.Root {...args}>
					<InputFui.Element />
				</InputFui.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>

<Story id="slots" name="Slots" args={{}}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex w-[400px] flex-col">
					<label for="" class="full-name-input">Full name</label>
					<InputFui.Root id="full-name-input" {...args}>
						<InputFui.Icon>
							<PersonRegularIcon />
						</InputFui.Icon>
						<InputFui.Element />
					</InputFui.Root>
					<span>An input with a decorative icon in the <code>before</code> slot.</span>
				</div>

				<div class="flex w-[400px] flex-col">
					<label for="" class="full-name-input">First name</label>
					<InputFui.Root id="first-name-input" {...args}>
						<InputFui.Element />
						<InputFui.Icon>
							<MicRegularIcon />
						</InputFui.Icon>
					</InputFui.Root>
					<span>An input with a button in the <code>after</code> slot.</span>
				</div>

				<div class="flex w-[400px] flex-col">
					<label for="" class="amount">Amount to pay</label>
					<InputFui.Root id="amount" {...args}>
						<InputFui.Icon>$</InputFui.Icon>

						<InputFui.Element />

						<InputFui.Icon>.00</InputFui.Icon>
					</InputFui.Root>
					<span
						>An input with a presentational value in the <code>before</code> slot and another
						presentational value in the <code>after</code> slot.</span
					>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
