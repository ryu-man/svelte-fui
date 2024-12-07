<script module lang="ts">
	import { onMount } from 'svelte';
	import { Divider as DividerFui, FluentRoot } from '@svelte-fui/core';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { defineMeta } from '@storybook/addon-svelte-csf';
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

	const { Story } = defineMeta({
		title: 'Components/Divider',
		component: DividerFui,
		argTypes: arg_types
	});
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

<Story id="fui_divider" name="Divider" args={default_args}>
	{#snippet children(args)}
		<FluentRoot {theme}>
			<div class="flex h-full w-full flex-col items-center justify-center gap-4">
				<div class="flex w-full flex-col gap-4">
					<div class="flex h-[48px]">
						<DividerFui {...args} />
					</div>

					<div class="flex h-[48px]">
						<DividerFui {...args}>Text</DividerFui>
					</div>
					<div class="flex h-[48px]">
						<DividerFui {...args} vertical={!args.vertical} />
					</div>
					<div class="flex h-[48px]">
						<DividerFui {...args} vertical={!args.vertical}>Text</DividerFui>
					</div>
				</div>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
