<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { App, Avatar } from '@svelte-fui/core';
	import { PersonRegular } from '@svelte-fui/icons';
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

<Meta title="Components/Avatar" component={Avatar} />

<Story id="avatar" name="Avatar" let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<Avatar {...args} src={PersonRegular} />
		</div>
	</App>
</Story>
