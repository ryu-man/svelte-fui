<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Input, App, Icon } from 'svelte-fui';
	import { MicRegular, PersonRegular } from '@svelte-fui/icons';
</script>

<Meta title="Components/Input" component={Input} />

<Story id="input" name="Input" args={{}} let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Input {...args} />
		</div>
	</App>
</Story>

<Story id="slots" name="Slots" args={{}} let:args>
	<App>
		<div class="flex flex-col items-center justify-center gap-4 w-full h-full">
			<div class="flex flex-col w-[400px]">
				<label for="" class="full-name-input">Full name</label>
				<Input id="full-name-input" {...args}>
					<Icon slot="before" src={PersonRegular} />
				</Input>
				<span>An input with a decorative icon in the <code>before</code> slot.</span>
			</div>

			<div class="flex flex-col w-[400px]">
				<label for="" class="full-name-input">First name</label>
				<Input id="first-name-input" {...args}>
					<Icon slot="after" src={MicRegular} />
				</Input>
				<span>An input with a button in the <code>after</code> slot.</span>
			</div>

			<div class="flex flex-col w-[400px]">
				<label for="" class="amount">Amount to pay</label>
				<Input id="amount" {...args}>
					<span slot="before">$</span>
					<span slot="after">.00</span>
				</Input>
				<span >An input with a presentational value in the <code>before</code> slot and another presentational value in the <code>after</code> slot.</span>
			</div>
		</div>
	</App>
</Story>
