<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import type { CardHeaderProps } from './types';

	let {
		class: klass = '',
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: CardHeaderProps = $props();
</script>

<div bind:this={element} use:reference={ref} class={classnames('fui-card-header', klass)}>
	{@render children?.()}
</div>

<style lang="postcss">
	.fui-card-header {
		display: grid;
		grid-auto-columns: min-content 1fr min-content;
		grid-auto-rows: 1fr min-content;
		align-items: center;

		flex-shrink: 0;

		> :global(.image) {
			margin-right: var(--spacing-m);
			grid-column-start: 1;
			grid-row-start: span 2;
			box-sizing: border-box;
			display: inline-flex;
		}
		> :global(.header) {
			/* @apply font-base text-base-300 font-regular leading-base-300; */
			grid-column-start: 2;
			grid-row-start: 1;
			font-family: var(--font-base);
			font-size: var(--font-base-300);
			font-weight: var(--font-weight);
			line-height: var(--leading-base-300);
		}
		> :global(.description) {
			/* @apply font-base; */
			grid-column-start: 2;
			grid-row-start: 2;
			font-family: var(--font-base);
		}
		> :global(.action) {
			margin-left: var(--spacing-m);
			grid-column-start: 3;
			grid-row-start: span 2;
		}
	}

	.fui-card-header-image {
	}
	.fui-card-header-header {
	}
	.fui-card-header-description {
	}
	.fui-card-header-action {
	}
</style>
