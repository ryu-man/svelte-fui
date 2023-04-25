<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Input, App, Combobox, Option } from 'svelte-fluentui';
</script>

<Meta title="Components/Combobox" component={Combobox} />

<Story id="combobox" name="Combobox" args={{}} let:args>
	<App>
		<div>
			<Combobox {...args}>
				<Option>Arabic</Option>
				<Option>English</Option>
				<Option>Italian</Option>
				<Option disabled>Frensh</Option>
			</Combobox>
		</div>
	</App>
</Story>
