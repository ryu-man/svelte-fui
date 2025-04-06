<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { ButtonProps } from './types';
	import ButtonShell from './button-shell.svelte';

	let {
		element = $bindable(),
		class: klass,
		shape,
		appearance,
		size = 'md',
		href,
		disabled,
		icon,
		children,
		onpointerenter,
		onpointerleave,
		...restProps
	}: ButtonProps = $props();

	let hover = $state(false);

	function onpointerenter_(ev: PointerEvent) {
		onpointerenter?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		hover = true;
	}
	function onpointerleave_(ev: PointerEvent) {
		onpointerleave?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		hover = false;
	}
</script>

<ButtonShell
	bind:element
	as={href && !disabled ? 'a' : 'button'}
	role={href ? 'link' : 'button'}
	href={href ? href : undefined}
	class={classnames('fui-button', klass)}
	type="button"
	{disabled}
	{shape}
	{appearance}
	{icon}
	{size}
	{...restProps}
	onpointerenter={onpointerenter_}
	onpointerleave={onpointerleave_}
>
	{@render children?.({ hover })}
</ButtonShell>
