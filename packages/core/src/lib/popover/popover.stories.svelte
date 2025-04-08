<script module lang="ts">
	import { Button, FluentRoot} from '@svelte-fui/core';
	import { Popover as PopoverModule } from '.';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { webDarkTheme, webLightTheme } from '@svelte-fui/themes';
	import { onMount } from 'svelte';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Popover',
		component: PopoverModule.Root
	});
</script>

<script lang="ts">
	let open = $state(false);
	let theme = $state(webLightTheme);

	onMount(() => {
		function handler(schemeMedia: MediaQueryListEvent) {
			theme = schemeMedia.matches ? webLightTheme : webDarkTheme;
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		theme = schemeMedia.matches ? webLightTheme : webDarkTheme;

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});

	function onclick() {
		console.log(open);
	}
</script>

<Story name="Popover" args={default_args}>
	{#snippet children(args)}
		<FluentRoot class="p-4" {theme}>
			<div class="flex justify-center items-center w-full h-full">
				<PopoverModule.Root bind:open>
					<PopoverModule.Trigger shell={Button} icon {onclick}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 text-neutral-foreground-1"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
								fill="currentColor"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z"
								fill="currentColor"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
								fill="currentColor"
							/>
						</svg>
					</PopoverModule.Trigger>

					<PopoverModule.Overlay>Hello World!</PopoverModule.Overlay>
				</PopoverModule.Root>
			</div>
		</FluentRoot>
	{/snippet}
</Story>
