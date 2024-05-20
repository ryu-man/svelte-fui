<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { App, Combobox, Input, Option } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';

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
</script>

<Meta title="Components/Combobox" component={Combobox} />

<Story id="combobox" name="Combobox" args={{}} let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<Combobox {...args}>
				<Option id="ar">Arabic</Option>
				<Option>English</Option>
				<Option>Italian</Option>
				<Option disabled>Frensh</Option>
			</Combobox>
		</div>
	</App>
</Story>
