<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import SpinnerDefaultIcon from './spinner-icon.svelte';
	import type { SpinnerRingProps } from './types';

	let { class: klass = '', ref = undefined }: SpinnerRingProps = $props();
</script>

<span use:reference={ref} class={classnames('fui-spinner-spinner', klass)}>
	<SpinnerDefaultIcon />
</span>

<style lang="postcss">
	.fui-spinner-spinner:focus {
		@apply outline-transparent;
	}

	.fui-spinner-spinner :global(svg) {
		@apply bg-transparent;

		width: var(--fui-spinner-width);
		height: var(--fui-spinner-height);
	}
</style>
