<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { classnames } from '@svelte-fui/core/internal';
	import type { LinkProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		class: klass = '',
		appearance = 'default',
		disabled = false,
		inline = false,
		href = undefined,
		element = $bindable(undefined),
		children = undefined,
		ref = undefined,
		...restProps
	}: HTMLAttributes<HTMLElement> & LinkProps = $props();

	const as = $derived(href ? 'a' : 'button');
</script>

<svelte:element
	this={as}
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-link text-brand-foreground-link font-base text-base-300 font-regular m-0 box-border cursor-pointer bg-transparent p-0 text-left',
		appearance,
		{ inline, disabled },
		klass
	)}
	{href}
	{disabled}
	{...restProps}
>
	{@render children?.()}
</svelte:element>

<style lang="postcss">
	.fui-link {
		display: inline;
		overflow: inherit;
		text-overflow: inherit;
		text-decoration-line: none;
		text-decoration-thickness: var(--border-width-thin);
		user-select: text;

		&:hover {
			/* @apply text-brand-foreground-link-hover; */
			text-decoration-line: underline;
			color: var(--fui-colorBrandForegroundLinkHover);
		}

		&:active {
			/* @apply text-brand-foreground-link-pressed; */
			text-decoration-line: underline;
			color: var(--fui-colorBrandForegroundLinkPressed);
		}
	}

	button.fui-link {
		/* @apply border-none; */
		border-style: none;
	}

	.fui-link[href] {
		font-size: inherit;
	}

	.fui-link.subtle {
		/* @apply text-neutral-foreground-2; */
		color: var(--fui-colorNeutralForeground2);
		&:hover {
			/* @apply text-neutral-foreground-2-hover; */
			color: var(--fui-colorNeutralForeground2Hover);
			text-decoration-line: underline;
		}
		&:active {
			/* @apply text-neutral-foreground-2-pressed; */
			color: var(--fui-colorNeutralForeground2Pressed);
			text-decoration-line: underline;
		}
	}

	.fui-link.inline {
		text-decoration-line: underline;
	}

	.fui-link.disabled {
		/* @apply text-neutral-foreground-disabled  cursor-not-allowed; */
		color: var(--fui-colorNeutralForegroundDisabled);
		cursor: not-allowed;
		text-decoration-line: none;
		&:hover {
			/* @apply text-neutral-foreground-disabled; */
			color: var(--fui-colorNeutralForegroundDisabled);
			text-decoration-line: none;
		}
		&:active {
			/* @apply text-neutral-foreground-disabled; */
			color: var(--fui-colorNeutralForegroundDisabled);
			text-decoration-line: none;
		}
	}

	.fui-link.inverted {
		/* @apply text-brand-background-inverted; */
		color: var(--fui-colorBrandBackgroundInverted);
		&:hover {
			/* @apply text-brand-background-inverted-hover; */
			color: var(--fui-colorBrandBackgroundInvertedHover);
		}
		&:active {
			/* @apply text-brand-background-inverted-pressed; */
			color: var(--fui-colorBrandBackgroundInvertedPressed);
		}
	}
</style>
