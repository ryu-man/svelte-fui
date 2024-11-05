<script>
	import { Icon } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import ChevronDownRegular from '@svelte-fui/core/icons/chevron-down-regular.svelte';
	import { getDropdownContext } from './context-root';
	import { animate } from '../actions/animation';
	import { DURATION } from '../internal/transition';
	import { Popover } from '../popover';

	const context_dropdown = getDropdownContext();
	const id = context_dropdown.id;
	const open = $derived(context_dropdown.derived.data.open);

	let { class: klass = '' } = $props();
</script>

<Popover.Indicator
	class={classnames(
		'dropdown-indicator text-neutral-stroke-accessible ml-auto inline-flex aspect-square h-full w-fit items-center justify-center p-[2px]',
		klass
	)}
>
	{#snippet children(args)}
		<div
			class="h-full"
			use:animate={{ rotate: +open * 180, duration: DURATION.NORMAL / 1000, ease: 'circ.out' }}
		>
			<Icon class="h-full py-[2px]">
				<ChevronDownRegular />
			</Icon>
		</div>
	{/snippet}
</Popover.Indicator>
