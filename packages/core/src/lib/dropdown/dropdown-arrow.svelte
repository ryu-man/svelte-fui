<script>
	import { spring } from 'svelte/motion';
	import { getDropdownContext } from './context';
	import { classnames } from '@svelte-fui/core/internal';
	import { Icon } from '@svelte-fui/core';
	import ChevronDownRegular from '@svelte-fui/core/icons/chevron-down-regular.svelte';

	const context = getDropdownContext();
	const id_store = context.id;
	const open_store = context.open;

	const rotation = spring(+$open_store);
	$: rotation.set(+$open_store);

	let klass = '';
	export { klass as class };
</script>

<div
	class={classnames(
		'dropdown-arrow text-neutral-stroke-accessible ml-auto inline-flex aspect-square h-full w-fit items-center justify-center p-[2px]',
		klass
	)}
	data-owner-id={$id_store}
	style:transform="rotate({$rotation * 180}deg)"
>
	<Icon class="h-full py-[2px]">
		<ChevronDownRegular />
	</Icon>
</div>
