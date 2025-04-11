<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import ButtonShell from './button-shell.svelte';
	import type { ButtonProps } from './types';

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
>
	{@render children?.()}
</ButtonShell>
