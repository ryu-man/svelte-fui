<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Icon, Text } from 'svelte-fui';
	import { Divider } from 'svelte-fui/divider';

	const defaultValues = {
		appearance: 'default',
		alignContent: 'center',
		vertical: false,
		inset: false
	};

	const argTypes = {
		appearance: {
			type: 'string',
			options: ['strong', 'brand', 'subtl', 'default'],
			control: {
				type: 'select'
			}
		},
		alignContent: {
			type: 'string',
			options: ['start', 'center', 'end'],
			control: 'select'
		}
	} satisfies ArgTypes;
</script>

<Meta title="Components/Divider" component={Divider} {argTypes} />

<Story id="fui_divider" name="Divider" args={defaultValues} let:args>
	<App>
		<div class="flex flex-col gap-4 items-center justify-center w-full h-full">
			<div class="flex flex-col gap-4 w-full">
				<div class="flex h-[48px]">
					<Divider {...args} />
				</div>

				<div class="flex h-[48px]">
					<Divider {...args}>Text</Divider>
				</div>
				<div class="flex h-[48px]">
					<Divider {...args} vertical={!args.vertical} />
				</div>
				<div class="flex h-[48px]">
					<Divider {...args} vertical={!args.vertical}>Text</Divider>
				</div>
			</div>
		</div>
	</App>
</Story>
