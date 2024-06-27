<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Icon, Input } from '@svelte-fui/core';
	import { MicRegular, PersonRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import MicRegularIcon from 'virtual:icons/fluent/mic-48-regular';
	import PersonRegularIcon from 'virtual:icons/fluent/person-48-regular';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	export const meta = {
		title: 'Components/Input',
		component: Input,
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

<Story id="input" name="Input" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full items-center justify-center">
			<Input {...args} />
		</div>
	</FluentRoot>
</Story>

<Story id="slots" name="Slots" args={{}} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex w-[400px] flex-col">
				<label for="" class="full-name-input">Full name</label>
				<Input id="full-name-input" {...args}>
					<Icon slot="before">
						<PersonRegularIcon />
					</Icon>
				</Input>
				<span>An input with a decorative icon in the <code>before</code> slot.</span>
			</div>

			<div class="flex w-[400px] flex-col">
				<label for="" class="full-name-input">First name</label>
				<Input id="first-name-input" {...args}>
					<Icon slot="after">
						<MicRegularIcon />
					</Icon>
				</Input>
				<span>An input with a button in the <code>after</code> slot.</span>
			</div>

			<div class="flex w-[400px] flex-col">
				<label for="" class="amount">Amount to pay</label>
				<Input id="amount" {...args}>
					<span slot="before">$</span>
					<span slot="after">.00</span>
				</Input>
				<span
					>An input with a presentational value in the <code>before</code> slot and another presentational value in the <code>after</code> slot.</span
				>
			</div>
		</div>
	</FluentRoot>
</Story>
