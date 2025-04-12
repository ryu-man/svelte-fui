<script lang="ts">
	import { classnames } from '../internal';
	import { Menu } from '../menu';
	import Button from './button.svelte';
	import type { ButtonProps } from './types';

	let {
		element = $bindable(),
		class: klass = '',
		shape,
		appearance,
		size,
		icon,
		children = undefined,
		ref = undefined,
		onclick = undefined,
		...restProps
	}: ButtonProps = $props();
</script>

<div class="fui-split-btn flex items-center">
	<Button
		class={classnames('items-center flex gap-2', klass)}
		{shape}
		{appearance}
		{size}
		onclick={(ev) => {
			ev.stopPropagation();
			ev.preventDefault();

			onclick?.(ev);
		}}
		{...restProps}
	>
		{@render children?.()}
	</Button>

	<Button class="px-0" {shape} {appearance} {size} {ref} icon>
		<Menu.Indicator class="h-full p-0.5" />
	</Button>
</div>

<style>
	.fui-split-btn :global(.fui-button:first-child) {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
	}

	.fui-split-btn :global(.fui-button:last-child) {
		border-top-left-radius: 0 !important;
		border-bottom-left-radius: 0 !important;
		border-left-width: 0 !important;
	}
</style>
