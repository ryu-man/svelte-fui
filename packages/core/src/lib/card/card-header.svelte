<script lang="ts">
	import { classnames } from '../internal';
	import type { CardHeaderProps } from './types';

	let { class: klass = '', element = $bindable(undefined), children }: CardHeaderProps = $props();
</script>

<div bind:this={element} class={classnames('fui-card-header', klass)}>
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
			@apply box-border inline-flex;
			margin-right: theme(spacing.m);
			grid-column-start: 1;
			grid-row-start: span 2;
		}
		> :global(.header) {
			@apply font-base text-base-300 font-regular leading-base-300;
			grid-column-start: 2;
			grid-row-start: 1;
		}
		> :global(.description) {
			@apply font-base;
			grid-column-start: 2;
			grid-row-start: 2;
		}
		> :global(.action) {
			margin-left: theme(spacing.m);
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
