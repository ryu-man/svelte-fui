<script lang="ts" generics="T">
	import { Input } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';

	import type { DropdownInputProps } from './types';

	import DropdownTrigger from '../dropdown/dropdown-trigger.svelte';
	import DropdownIndicator from '../dropdown/dropdown-indicator.svelte';
	import { getDropdownContext } from './context-root';
	import { fade } from 'svelte/transition';
	import { DURATION } from '../internal/transition';

	const context_dropdown = getDropdownContext();

	let {
		class: klass = '',
		placeholder = '',
		appearance = 'outline',
		size = 'md',
		children,
		...restProps
	}: DropdownInputProps<T> = $props();

	const values = $derived(context_dropdown.derived.data.values);
	const items = $derived(context_dropdown.derived.data.items.all);
</script>

<DropdownTrigger class={classnames('relative min-w-[192px]', klass)} {...restProps}>
	<Input.Root class="w-full flex gap-1 items-center" {appearance} {size}>
		{#each values as value (value)}
			<div transition:fade={{ duration: DURATION.NORMAL }}>
				<div class="px-1 bg-neutral-background-2 h-fit w-fit">
					{items.get(value)?.innerText() ?? value}
				</div>
			</div>
		{:else}
			<div
				transition:fade={{ duration: DURATION.NORMAL }}
				class="absolute left-0 top-0 flex h-full items-center whitespace-nowrap pl-[inherit] pr-12"
			>
				<div>{placeholder}</div>
			</div>
		{/each}

		<DropdownIndicator class="h-full" />
	</Input.Root>
</DropdownTrigger>
