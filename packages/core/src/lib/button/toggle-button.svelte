<script lang="ts">
	import { classnames } from '../internal';
	import Button from './button.svelte';
	import type { ButtonProps } from './types';

	let {
		element = $bindable(),
		checked = $bindable(false),
		appearance = 'secondary',
		class: klass = '',
		children = undefined,
		onclick = undefined,
		...restProps
	}: ButtonProps & { checked?: boolean } = $props();

	function onclick_(ev?: MouseEvent) {
		onclick?.(ev);

		if (ev?.defaultPrevented) {
			return;
		}

		checked = !checked;
	}
</script>

<Button
	bind:element
	class={classnames(
		'fui-toggle-button',
		checked &&
			appearance === 'outline' &&
			'bg-transparent-background  hover:bg-transparent-background-hover active:bg-transparent-background-pressed',
		checked &&
			appearance === 'primary' &&
			'bg-brand-background-selected text-neutral-foreground-on-brand hover:bg-brand-background-hover active:bg-brand-background-pressed',
		checked &&
			appearance === 'subtle' &&
			'bg-subtle-background-selected text-neutral-foreground-2-selected hover:bg-subtle-background-hover active:bg-subtle-background-pressed',
		checked &&
			appearance === 'transparent' &&
			'bg-transparent-background-selected text-neutral-foreground-2-selected hover:bg-transparent-background-hover active:bg-transparent-background-pressed',
		klass
	)}
	{appearance}
	aria-checked={checked}
	onclick={onclick_}
	{...restProps}
>
	{@render children?.()}
</Button>
