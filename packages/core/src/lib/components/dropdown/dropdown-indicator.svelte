<script>
	import { Icon } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import ChevronDownRegular from '@svelte-fui/core/components/icons/chevron-down-regular.svelte';
	import { getDropdownContext } from './context-root';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { Popover } from '../popover';
	import { animate } from '@svelte-fui/core/actions/animation.svelte';
	import { Menu } from '../menu';

	const dropdownContext = getDropdownContext();
	const open = $derived(dropdownContext?.state.open ?? false);

	let { class: klass = '' } = $props();
</script>

<Menu.Indicator
	class={classnames(
		'dropdown-indicator text-neutral-stroke-accessible ml-auto inline-flex aspect-square h-full w-fit items-center justify-center p-[2px]',
		klass
	)}
>
	{#snippet children(args)}
		<div
			class="h-full"
			use:animate={() => ({
				rotate: +open * 180,
				duration: DURATION.SMOOTH / 1000,
				ease: 'circ.out'
			})}
		>
			<Icon class="h-full py-[2px]">
				<ChevronDownRegular />
			</Icon>
		</div>
	{/snippet}
</Menu.Indicator>
