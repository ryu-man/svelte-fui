<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Input, App, Combobox, ComboboxListbox, Option } from 'svelte-fluentui';
	import { setComboboxContext } from './context';

	const { selectedId$, selectedValue$ } = setComboboxContext({
		onOptionClick
	});

	function onOptionClick({ id, value, selected }) {
		console.log(id);
	}
</script>

<Meta title="Components/Combobox" component={ComboboxListbox} />

<Story name="Listbox" args={{}} let:args>
	<App>
		<ComboboxListbox {...args}>
			<Option>Arabic</Option>
			<Option>English</Option>
			<Option>Italian</Option>
			<Option disabled>Frensh</Option>
		</ComboboxListbox>
	</App>
</Story>
