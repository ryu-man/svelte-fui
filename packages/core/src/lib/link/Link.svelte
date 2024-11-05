<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { classnames } from '../internal';
	import type { LinkProps } from './types';

	let {
		class: klass = '',
		appearance = 'default',
		disabled = false,
		inline = false,
		href = undefined,
		children,
		...restProps
	}: HTMLAttributes<HTMLElement> & LinkProps = $props();

	const as = $derived(href ? 'a' : 'button');
</script>

<svelte:element
	this={as}
	class={classnames('fui-link', appearance, { inline, disabled }, klass)}
	{href}
	{disabled}
	{...restProps}
>
	{@render children?.()}
</svelte:element>

<style lang="postcss">
	.fui-link {
		@apply text-brand-foreground-link font-base text-base-300 font-regular m-0 box-border cursor-pointer bg-transparent p-0 text-left;
		display: inline;
		overflow: inherit;
		text-overflow: inherit;
		text-decoration-line: none;
		text-decoration-thickness: theme(borderWidth.thin);
		user-select: text;

		&:hover {
			@apply text-brand-foreground-link-hover;
			text-decoration-line: underline;
		}

		&:active {
			@apply text-brand-foreground-link-pressed;
			text-decoration-line: underline;
		}
	}

	button.fui-link {
		@apply border-none;
	}

	.fui-link[href] {
		font-size: inherit;
	}

	.fui-link.subtle {
		@apply text-neutral-foreground-2;
		&:hover {
			@apply text-neutral-foreground-2-hover;
			text-decoration-line: underline;
		}
		&:active {
			@apply text-neutral-foreground-2-pressed;
			text-decoration-line: underline;
		}
	}

	.fui-link.inline {
		text-decoration-line: underline;
	}

	.fui-link.disabled {
		@apply text-neutral-foreground-disabled  cursor-not-allowed;
		text-decoration-line: none;
		&:hover {
			@apply text-neutral-foreground-disabled;
			text-decoration-line: none;
		}
		&:active {
			@apply text-neutral-foreground-disabled;
			text-decoration-line: none;
		}
	}

	.fui-link.inverted {
		@apply text-brand-background-inverted;
		&:hover {
			@apply text-brand-background-inverted-hover;
		}
		&:active {
			@apply text-brand-background-inverted-pressed;
		}
	}
</style>
