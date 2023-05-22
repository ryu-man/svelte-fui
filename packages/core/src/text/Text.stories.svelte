<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { App, Icon, Text } from '@svelte-fui/core';
	import { MicRegular, PersonRegular } from '@svelte-fui/icons';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/theme/src/themes/web';
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

<Meta title="Components/Text" component={Text} />

<Story id="fui_text" name="Text" args={{}} let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<Text {...args}>This is an example of the Text component's usage.</Text>
		</div>
	</App>
</Story>
