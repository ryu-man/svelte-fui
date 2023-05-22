<script lang="ts">
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { App, Icon, Text } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/theme/src/themes/web';
	import { onMount } from 'svelte';
	import Divider  from './Divider.svelte';

	const defaultValues = {
		appearance: 'default',
		alignContent: 'center',
		vertical: false,
		inset: false
	};

	const argTypes = {
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

<Meta title="Components/Divider" component={Divider} {argTypes} />

<Story id="fui_divider" name="Divider" args={defaultValues} let:args>
	<App {theme}>
		<div class="flex flex-col gap-4 items-center justify-center w-full h-full">
			<div class="flex flex-col gap-4 w-full">
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
