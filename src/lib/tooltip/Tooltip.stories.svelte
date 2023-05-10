<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Button, Tooltip } from 'svelte-fui';

	const argDefaults = {
		disabled: false,
		required: false,
		size: 'md',
		weight: 'regular'
	};

	const argTypes = {
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
</script>

<Meta title="Components/Tooltip" component={Tooltip} />

<Story id="fui_tooltip" name="Tooltip" let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Tooltip {...args}>
				<Button>Hello Svelte land</Button>
	
				<span slot="content">Hello from the other side! [slotted]</span>
			</Tooltip>
		</div>
	</App>
</Story>
