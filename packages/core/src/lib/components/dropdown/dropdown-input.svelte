<script lang="ts" generics="T">
	import { Input } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';

	import type { DropdownInputProps } from './types';

	import DropdownTrigger from '../dropdown/dropdown-trigger.svelte';
	import DropdownIndicator from '../dropdown/dropdown-indicator.svelte';
	import { getDropdownContext } from './context-root';
	import { fade } from 'svelte/transition';
	import { DURATION } from '@svelte-fui/core/internal/transition';

	const dropdownContext = getDropdownContext<T>();

	if (!dropdownContext) {
		throw new Error('dropdown context is not found');
	}

	let {
		class: klass = '',
		placeholder = '',
		appearance = 'outline',
		size = 'md',
		children,
		...restProps
	}: DropdownInputProps<T> = $props();

	const values = $derived(dropdownContext?.state.values);
	const items = $derived(dropdownContext?.state.items.all);

	const placeholderType = typeof placeholder;
</script>

<Input.Root class="w-full flex gap-1 items-center" {appearance} {size} {...restProps}>
	{#each values as value (value)}
		<div transition:fade={{ duration: DURATION.FAST }}>
			<div class="px-1 bg-neutral-background-2 h-fit w-fit">
				{items.get(value)?.text ?? value}
			</div>
		</div>
	{:else}
		<div
			transition:fade={{ duration: DURATION.NORMAL }}
			class="absolute left-0 top-0 flex h-full items-center whitespace-nowrap pl-[inherit] pr-12 opacity-50"
		>
			{#if placeholderType === 'string'}
				<div>{placeholder}</div>
			{:else}
				{@render placeholder?.()}
			{/if}
		</div>
	{/each}

	<DropdownIndicator class="h-full" />
</Input.Root>
