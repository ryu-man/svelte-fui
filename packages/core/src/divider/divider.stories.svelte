<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { Divider, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';

	const default_args = {
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

	export const meta = {
		title: 'Components/Divider',
		component: Divider,
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

<Story id="fui_divider" name="Divider" args={default_args} let:args>
	<FluentRoot {theme}>
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
	</FluentRoot>
</Story>
