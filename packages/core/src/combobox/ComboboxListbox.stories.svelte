<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { App, Combobox, ComboboxListbox, Input, Option } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';
	import { setComboboxContext } from './context';

	const { selectedId$, selectedValue$ } = setComboboxContext({
		onOptionClick
	});

	let theme = webLightTheme;

	onMount(() => {
		function handler(e: MediaQueryListEvent) {
			theme = e.matches ? webLightTheme : webDarkTheme;
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		theme = schemeMedia.matches ? webLightTheme : webDarkTheme;

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});

	function onOptionClick({ id, value, selected }) {
		console.log(id);
	}
</script>

<Meta title="Components/Combobox" component={ComboboxListbox} />

<Story name="Listbox" args={{}} let:args>
	<App {theme}>
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
