<script context="module" lang="ts">
	import { FluentRoot, Icon } from '@svelte-fui/core';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import AlertRegularIcon from 'virtual:icons/fluent/alert-48-regular';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	export const meta = {
		title: 'Components/Icon',
		component: Icon,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script>
</script>

<Story id="icon" name="Icon" args={default_args} let:args>
	<FluentRoot>
		<div class="flex h-full w-full items-center justify-center">
			<Icon {...args} class="">
				<AlertRegularIcon />
			</Icon>
		</div>
	</FluentRoot>
</Story>
