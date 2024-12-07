<script module lang="ts">
	import { FluentRoot, Icon as IconFui } from '@svelte-fui/core';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AlertRegularIcon from 'virtual:icons/fluent/alert-48-regular';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Icon',
		component: IconFui,
		argTypes: arg_types
	});
</script>

<script>
</script>

<Story id="icon" name="Icon" args={default_args}>
	{#snippet children(args)}
		<FluentRoot>
			<div class="flex h-full w-full items-center justify-center">
				<IconFui {...args} class="">
					<AlertRegularIcon />
				</IconFui>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
