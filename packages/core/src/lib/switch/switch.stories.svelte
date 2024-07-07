<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { FluentRoot, Label, Switch } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {};

	const arg_types = {} satisfies ArgTypes;

	export const meta = {
		title: 'Components/Switch',
		component: Switch,
		argTypes: arg_types,
		tags: ['!autodocs']
	};
</script>

<script lang="ts">
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

<Story id="fui_switch" name="Switch" args={default_args} let:args>
	<FluentRoot {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex items-start gap-4">
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
	</FluentRoot>
</Story>
