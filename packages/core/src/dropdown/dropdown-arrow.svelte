<script>
	import { spring } from 'svelte/motion';
	import { getDropdownContext } from './context';
	import { classnames } from '@svelte-fui/core/internal';

	const context = getDropdownContext();
	const id_store = context.id;
	const open_store = context.open;

	const rotation = spring(+$open_store);
	$: rotation.set(+$open_store);

	let klass = '';
	export { klass as class };
</script>

<div
	class={classnames('dropdown-arrow text-neutral-stroke-accessible ml-auto aspect-square h-full p-[2px]', klass)}
	style:transform="rotate({$rotation * 180}deg)"
	data-owner-id={$id_store}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" fill="none">
		<path
			d="M8 8.75C7.8125 8.75 7.65625 8.6875 7.5 8.5625L0.3125 1.5C0.03125 1.21875 0.03125 0.78125 0.3125 0.5C0.59375 0.21875 1.03125 0.21875 1.3125 0.5L8 7.03125L14.6875 0.4375C14.9688 0.15625 15.4062 0.15625 15.6875 0.4375C15.9688 0.71875 15.9688 1.15625 15.6875 1.4375L8.5 8.5C8.34375 8.65625 8.1875 8.75 8 8.75Z"
			fill="currentColor"
		/>
	</svg>
</div>

<style>
	.dropdown-arrow {
		@apply flex h-full w-fit items-center justify-center;
	}

	svg {
		@apply h-full w-full;
	}
</style>
