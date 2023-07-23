<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Input } from '@svelte-fui/core';
	import { AddCircleFilled } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';
	import Field from './Field.svelte';
	import ValidationMessage from './ValidationMessage.svelte';

	const defaultValues = {
		size: 'md',
		orientation: 'vertical',
	};

	const argTypes = {
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

<Meta title="Components/Field" component={Field} {argTypes} />

<Story id="field" name="Field" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex w-[90%] flex-col gap-4">
				<Field {...args} label="Example Field" state="error">
					<Input />
					<ValidationMessage>This an error message</ValidationMessage>
				</Field>

				<Field {...args} label="Example Field" state="warning">
					<Input />
					<ValidationMessage>This a warning message</ValidationMessage>
				</Field>

				<Field {...args} label="Example Field" state="success">
					<Input />
					<ValidationMessage>This a success message</ValidationMessage>
				</Field>

				<Field {...args} label="Example Field" state="none">
					<Input />
					<ValidationMessage>This a simple message</ValidationMessage>
				</Field>
				<Field {...args} label="Example Field" state="none">
					<Input />
					<ValidationMessage icon={AddCircleFilled}>This a simple message</ValidationMessage>
				</Field>
			</div>
		</div>
	</App>
</Story>
