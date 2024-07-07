<script lang="ts">
	import { classnames } from '../internal';

	export let href = '';
	export let as: 'a' | 'button' = href ? 'a' : 'button';
	export let appearance: 'subtle' | 'default' = 'default';
	export let disabled = false;
	export let inline = false;
	let klass = '';
	export { klass as class };

	function onclick(e: Event) {
		if (disabled) {
			e.preventDefault();
		}
	}
</script>

<svelte:element
	this={as}
	{...$$restProps}
	{href}
	{disabled}
	tabindex="0"
	class={classnames('fui-link', appearance, { inline, disabled }, klass)}
	on:click={onclick}
	on:click
>
	<slot />
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
