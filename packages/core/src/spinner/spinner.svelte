<script lang="ts">
	import SpinnerDefaultIcon from './spinner-default-icon.svelte';
	import { classnames } from '../internal';
	import { Label } from '../label';

	export let delay = 0;
	export let size: 'xt' | 'tn' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hg' = 'md';
	// export let labelPosition: 'before' | 'after' | 'above' | 'below' = 'after';
	export let appearance: 'primary' | 'inverted' = 'primary';
	export let vertical = false;
	export let reverse = false;
</script>

<div role="progressbar" class={classnames('fui-spinner', size, appearance, { vertical, reverse })} style:--animation-delay="{delay}ms">
	<span class="fui-spinner-spinner">
		<slot name="spinner">
			<SpinnerDefaultIcon />
		</slot>
	</span>

	{#if $$slots.default}
		<Label class="fui-spinner-label">
			<slot />
		</Label>
	{/if}
</div>

<style lang="postcss">
	@keyframes fade {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.sp-inverted {
		--fui-spinner-tail-color: theme(colors.neutral-stroke-on-brand-2);
		--fui-spinner-track-color: rgba(255, 255, 255, 0.2);
	}

	.sp-primary {
		--fui-spinner-tail-color: theme(colors.brand-stroke-1);
		--fui-spinner-track-color: theme(colors.brand-stroke-2);

		@media screen and (forced-colors: active) {
			--fui-spinner-tail-color: theme(colors.neutral-stroke-on-brand-2);
			--fui-spinner-track-color: theme(colors.neutral-background-inverted);
		}
	}

	.fui-spinner {
		--r-xt: 7px;
		--r-tn: 9px;
		--r-xs: 11px;
		--r-sm: 13px;
		--r-md: 14.5px;
		--r-lg: 16.5px;
		--r-xl: 18.5px;
		--r-hg: 20px;

		--size-xt: 16px;
		--size-tn: 20px;
		--size-xs: 24px;
		--size-sm: 28px;
		--size-md: 32px;
		--size-lg: 36px;
		--size-xl: 40px;
		--size-hg: 44px;

		--animation-duration: 3s;
		--animation-iteration-count: infinite;

		--fui-spinner-width: var(--size-md);
		--fui-spinner-height: var(--size-md);
		--fui-spinner-circle-r: var(--r-md);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thick) @apply flex items-center justify-center gap-[8px] leading-[0];

		@media screen and (prefers-reduced-motion: reduce) {
			--animation-duration: 0.01ms;
			--animation-iteration-count: 1;
		}

		@apply flex items-center gap-2;

		opacity: 0;
		animation-name: fade;
		animation-duration: 0.01ms;
		animation-delay: var(--animation-delay, 0);
		animation-fill-mode: forwards;
	}

	.fui-spinner.xt {
		--fui-spinner-width: var(--size-xt);
		--fui-spinner-height: var(--size-xt);
		--fui-spinner-circle-r: var(--r-xt);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thick);
	}
	.fui-spinner.tn {
		--fui-spinner-width: var(--size-tn);
		--fui-spinner-height: var(--size-tn);
		--fui-spinner-circle-r: var(--r-tn);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thick);
	}
	.fui-spinner.xs {
		--fui-spinner-width: var(--size-xs);
		--fui-spinner-height: var(--size-xs);
		--fui-spinner-circle-r: var(--r-xs);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thick);
	}
	.fui-spinner.sm {
		--fui-spinner-width: var(--size-sm);
		--fui-spinner-height: var(--size-sm);
		--fui-spinner-circle-r: var(--r-sm);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thick);
	}
	.fui-spinner.md {
		--fui-spinner-width: var(--size-md);
		--fui-spinner-height: var(--size-md);
		--fui-spinner-circle-r: var(--r-md);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thicker);
	}
	.fui-spinner.lg {
		--fui-spinner-width: var(--size-lg);
		--fui-spinner-height: var(--size-lg);
		--fui-spinner-circle-r: var(--r-lg);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thicker);
	}
	.fui-spinner.xl {
		--fui-spinner-width: var(--size-xl);
		--fui-spinner-height: var(--size-xl);
		--fui-spinner-circle-r: var(--r-xl);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thicker);
	}
	.fui-spinner.hg {
		--fui-spinner-width: var(--size-hg);
		--fui-spinner-height: var(--size-hg);
		--fui-spinner-circle-r: var(--r-hg);
		--fui-spinner-circle-stroke-width: theme(strokeWidth.thickest);
	}

	.fui-spinner-spinner:focus {
		@apply outline-transparent;
	}

	.fui-spinner-spinner :global(svg) {
		@apply bg-transparent;

		width: var(--fui-spinner-width);
		height: var(--fui-spinner-height);
	}

	.fui-spinner.inverted {
		@apply sp-inverted;
	}

	.fui-spinner.primary {
		@apply sp-primary;
	}

	.fui-spinner.vertical {
		@apply flex-col;
	}
	.fui-spinner.reverse {
		@apply flex-row-reverse;

		&.vertical {
			@apply flex-col-reverse;
		}
	}

	.fui-spinner.inverted :global(.fui-spinner-label) {
		color: rgba(255, 255, 255, 1);
	}

	.fui-spinner.xt :global(.fui-spinner-label) {
		@apply body-1;
	}
	.fui-spinner.tn :global(.fui-spinner-label) {
		@apply body-1;
	}
	.fui-spinner.xs :global(.fui-spinner-label) {
		@apply body-1;
	}
	.fui-spinner.sm :global(.fui-spinner-label) {
		@apply body-1;
	}
	.fui-spinner.md :global(.fui-spinner-label) {
		@apply subtitle-2;
	}
	.fui-spinner.lg :global(.fui-spinner-label) {
		@apply subtitle-2;
	}
	.fui-spinner.xl :global(.fui-spinner-label) {
		@apply subtitle-2;
	}
	.fui-spinner.hg :global(.fui-spinner-label) {
		@apply subtitle-1;
	}
</style>
