<script module lang="ts">
	import { onMount } from 'svelte';
	import { Field as FieldFui, FluentRoot, Input } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
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

	const { Story } = defineMeta({
		title: 'Components/Field',
		component: FieldFui.Root,
		argTypes: arg_types
	});
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

<Story id="field" name="Field" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex w-[90%] flex-col gap-4">
					<FieldFui.Root {...args} state="error" open>
						<FieldFui.Label>Example Field</FieldFui.Label>
						<Input.Root>
							<Input.Element />
						</Input.Root>

						<FieldFui.Message>
							<FieldFui.IconError />
							<div>This an error message</div>
						</FieldFui.Message>
					</FieldFui.Root>

					<FieldFui.Root {...args} state="warning" open>
						<FieldFui.Label>Example Field</FieldFui.Label>
						<Input.Root>
							<Input.Element />
						</Input.Root>

						<FieldFui.Message open>
							<FieldFui.IconWarning />
							<div>This a warning message</div>
						</FieldFui.Message>
					</FieldFui.Root>

					<FieldFui.Root {...args} state="success" open>
						<FieldFui.Label>Example Field</FieldFui.Label>
						<Input.Root>
							<Input.Element />
						</Input.Root>

						<FieldFui.Message open>
							<FieldFui.IconSuccess />
							<div>This a success message</div>
						</FieldFui.Message>
					</FieldFui.Root>

					<FieldFui.Root {...args} state="none" open>
						<FieldFui.Label>Example Field</FieldFui.Label>

						<Input.Root>
							<Input.Element />
						</Input.Root>

						<FieldFui.Message open>This a simple message</FieldFui.Message>
					</FieldFui.Root>

					<FieldFui.Root {...args} state="none" open>
						<FieldFui.Label>Example Field</FieldFui.Label>

						<Input.Root>
							<Input.Element />
						</Input.Root>

						<FieldFui.Message>
							<FieldFui.IconInfo />
							<div>This an info message</div>
						</FieldFui.Message>
					</FieldFui.Root>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
