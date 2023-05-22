<script lang="ts">
	import { onMount } from 'svelte';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Label, Switch } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/theme/src/themes/web';

	const defaultValues = {};

	const argTypes = {} satisfies ArgTypes;

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

<Meta title="Components/Switch" component={Switch} {argTypes} />

<Story id="fui_switch" name="Switch" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex flex-col gap-4 items-center justify-center w-full h-full">
			<div class="flex gap-4 items-start">
				<Switch {...args} />

				<Switch {...args} position="before">
					<Label>Enable Dark Theme</Label>
				</Switch>
				<Switch {...args} position="above">
					<Label>Enable Dark Theme</Label>
				</Switch>
				<Switch {...args} position="after">
					<Label>Enable Dark Theme</Label>
				</Switch>
			</div>
		</div>
	</App>
</Story>
