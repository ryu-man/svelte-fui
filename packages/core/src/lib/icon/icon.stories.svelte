<script module lang="ts">
	import { FluentRoot, Icon as IconFui } from '@svelte-fui/core';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AlertRegularIcon from 'virtual:icons/fluent/alert-48-regular';

	const argTypes = {} satisfies ArgTypes;

	const defaultArgs: Partial<Record<keyof typeof argTypes, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Icon',
		component: IconFui,
		argTypes: argTypes
	});
</script>

<script>
</script>

<Story id="icon" name="Icon" args={defaultArgs}>
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
