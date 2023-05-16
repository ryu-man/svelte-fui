<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Label, Switch } from 'svelte-fui';
	import { webDarkTheme, webLightTheme } from 'svelte-fui/theme/themes/web';

	const defaultValues = {};

	const argTypes = {} satisfies ArgTypes;

	let theme = webLightTheme;
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
