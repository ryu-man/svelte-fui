<script lang="ts">
	import { onMount } from 'svelte';
	import { App, Divider } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_values = {
		appearance: 'default',
		alignContent: 'center',
		vertical: false,
		inset: false
	};

	const arg_types = {
		appearance: {
			type: 'string',
			options: ['strong', 'brand', 'subtl', 'default'],
			control: {
				type: 'select'
			}
		},
		alignContent: {
			type: 'string',
			options: ['start', 'center', 'end'],
			control: 'select'
		}
	} satisfies ArgTypes;

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

<Meta title="Components/Divider" component={Divider} argTypes={arg_types} />

<Story id="fui_divider" name="Divider" args={default_values} let:args>
	<App {theme}>
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<div class="flex w-full flex-col gap-4">
				<div class="flex h-[48px]">
					<Divider {...args} />
				</div>

				<div class="flex h-[48px]">
					<Divider {...args}>Text</Divider>
				</div>
				<div class="flex h-[48px]">
					<Divider {...args} vertical={!args.vertical} />
				</div>
				<div class="flex h-[48px]">
					<Divider {...args} vertical={!args.vertical}>Text</Divider>
				</div>
			</div>
		</div>
	</App>
</Story>
