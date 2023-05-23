<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { App, Checkbox } from '@svelte-fui/core';
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

<Meta title="Components/Checkbox" component={Checkbox} />

<Story id="input" name="Checkbox" args={{}} let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<Checkbox {...args} />
		</div>
	</App>
</Story>
