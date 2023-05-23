<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { App, Icon, Input } from '@svelte-fui/core';
	import { MicRegular, PersonRegular } from '@svelte-fui/icons';
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

<Meta title="Components/Input" component={Input} />

<Story id="input" name="Input" args={{}} let:args>
	<App {theme}>
		<div class="flex items-center justify-center w-full h-full">
			<Input {...args} />
		</div>
	</App>
</Story>

<Story id="slots" name="Slots" args={{}} let:args>
	<App {theme}>
		<div class="flex flex-col items-center justify-center gap-4 w-full h-full">
			<div class="flex flex-col w-[400px]">
				<label for="" class="full-name-input">Full name</label>
				<Input id="full-name-input" {...args}>
					<Icon slot="before" src={PersonRegular} />
				</Input>
				<span>An input with a decorative icon in the <code>before</code> slot.</span>
			</div>

			<div class="flex flex-col w-[400px]">
				<label for="" class="full-name-input">First name</label>
				<Input id="first-name-input" {...args}>
					<Icon slot="after" src={MicRegular} />
				</Input>
				<span>An input with a button in the <code>after</code> slot.</span>
			</div>

			<div class="flex flex-col w-[400px]">
				<label for="" class="amount">Amount to pay</label>
				<Input id="amount" {...args}>
					<span slot="before">$</span>
					<span slot="after">.00</span>
				</Input>
				<span
					>An input with a presentational value in the <code>before</code> slot and another presentational value in the <code>after</code> slot.</span
				>
			</div>
		</div>
	</App>
</Story>
