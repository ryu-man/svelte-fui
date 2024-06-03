<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import {
		Field,
		FieldMessage,
		FieldMessageError,
		FieldMessageInfo,
		FieldMessageSuccess,
		FieldMessageWarning,
		FluentRoot,
		Input
	} from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {
		size: 'md',
		orientation: 'vertical'
	};

	const arg_types = {
		label: {
			type: 'string'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			control: 'select'
		},
		orientation: {
			type: 'string',
			options: ['horizontal', 'vertical'],
			control: 'select'
		},
		state: {
			type: 'string',
			options: ['none', 'success', 'warning', 'error'],
			control: 'select'
		}
	} satisfies ArgTypes;

	export const meta = {
		title: 'Components/Field',
		component: Field,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
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

<Story id="field" name="Field" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex w-[90%] flex-col gap-4">
				<Field {...args} label="Example Field" state="error">
					<Input />
					<FieldMessageError open>This an error message</FieldMessageError>
				</Field>

				<Field {...args} label="Example Field" state="warning">
					<Input />
					<FieldMessageWarning open>This a warning message</FieldMessageWarning>
				</Field>

				<Field {...args} label="Example Field" state="success">
					<Input />
					<FieldMessageSuccess open>This a success message</FieldMessageSuccess>
				</Field>

				<Field {...args} label="Example Field" state="none">
					<Input />
					<FieldMessage open>This a simple message</FieldMessage>
				</Field>

				<Field {...args} label="Example Field" state="none">
					<Input />
					<FieldMessageInfo open>This an info message</FieldMessageInfo>
				</Field>
			</div>
		</div>
	</FluentRoot>
</Story>
