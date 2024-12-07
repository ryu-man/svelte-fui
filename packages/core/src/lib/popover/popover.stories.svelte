<script context="module" lang="ts">
	import { FluentRoot } from '@svelte-fui/core';
	import { Popover as PopoverModule } from '.';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ArgTypes } from '@storybook/svelte';
	import { fly } from 'svelte/transition';

	const arg_types = {} satisfies ArgTypes;

	const default_args: Partial<Record<keyof typeof arg_types, any>> = {};

	const { Story } = defineMeta({
		title: 'Components/Popover',
		component: PopoverModule.Root
	});
</script>

<script lang="ts">
	let open = $state(true);

	function onclick() {
		console.log(open);
	}
</script>

<Story id="popover" name="Popover" args={default_args}>
	{#snippet children(args)}
		<FluentRoot>
			<PopoverModule.Root bind:open>
				<PopoverModule.Trigger
					class="flex aspect-square h-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100"
					as="button"
					{onclick}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
							fill="#3A3A3B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z"
							fill="#3A3A3B"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
							fill="#3A3A3B"
						/>
					</svg>
				</PopoverModule.Trigger>

				<PopoverModule.Overlay placements={['bottom-start']}>
					{#snippet children({ open, dy })}
						{#if open}
							<div
								class="min-h-28 min-w-40 shadow-3 h-28 w-fit rounded-md border border-solid border-black/5 bg-neutral-100 p-4"
								transition:fly={{ duration: 200, y: dy * 8 }}
							>
								<div
									class="flex h-full w-full items-center justify-center rounded-md bg-neutral-200"
								>
									Hello World!
								</div>
							</div>
						{/if}
					{/snippet}
				</PopoverModule.Overlay>
			</PopoverModule.Root>
		</FluentRoot>
	{/snippet}
</Story>
