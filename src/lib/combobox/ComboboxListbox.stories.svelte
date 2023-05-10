<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Input, App, Combobox, ComboboxListbox, Option } from 'svelte-fui';
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
		<div class="flex items-center justify-center w-full h-full">
			<ComboboxListbox top="50%" left="50%" x="-50%" y="-50%" {...args}>
				<Option>Arabic</Option>
				<Option>English</Option>
				<Option>Italian</Option>
				<Option disabled>Frensh</Option>
			</ComboboxListbox>
		</div>
	</App>
</Story>
