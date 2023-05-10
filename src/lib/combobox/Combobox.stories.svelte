<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Input, App, Combobox, Option } from 'svelte-fui';
</script>

<Meta title="Components/Combobox" component={Combobox} />

<Story id="combobox" name="Combobox" args={{}} let:args>
	<App>
		<div class="flex items-center justify-center w-full h-full">
			<Combobox {...args}>
				<Option>Arabic</Option>
				<Option>English</Option>
				<Option>Italian</Option>
				<Option disabled>Frensh</Option>
			</Combobox>
		</div>
	</App>
</Story>
