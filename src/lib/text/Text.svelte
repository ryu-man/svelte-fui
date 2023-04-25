<script lang="ts">
	import { classnames } from 'svelte-fluentui/internal';

	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'pre' | 'span' = 'span';
	export let align: 'center' | 'start' | 'justify' | 'end' = 'start';
	export let block = false;
	export let font: 'base' | 'numeric' | 'monospace' = 'base';
	export let italic = false;
	export let size: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000' = '300';
	export let strikethrough = false;
	export let truncate = false;
	export let weight: 'meduim' | 'regular' | 'semibold' | 'bold' = 'regular';
	export let wrap = false;
</script>

<svelte:element this={as} class={classnames('fui-text', { size, align, block, italic, strikethrough, truncate, weight, wrap }, font)}>
	<slot />
</svelte:element>

<style lang="postcss">
	.fui-text {
		@apply visible inline overflow-clip whitespace-normal text-start font-base text-base-300 font-regular leading-base-300;

		&.nowrap {
			@apply overflow-hidden whitespace-nowrap;
		}
		&.truncate {
			text-overflow: ellipsis;
		}
		&.block {
			display: block;
		}
		&.italic {
			font-style: italic;
		}
		&.underline {
			text-decoration-line: underline;
		}
		&.strikethrough {
			text-decoration-line: line-through;
		}
		&.strikethrough-underline {
			text-decoration-line: line-through underline;
		}
		&.size-100 {
			@apply text-base-100 leading-base-100;
		}
		&.size-200 {
			@apply text-base-200 leading-base-200;
		}
		&.size-400 {
			@apply text-base-400 leading-base-400;
		}
		&.size-500 {
			@apply text-base-500 leading-base-500;
		}
		&.size-600 {
			@apply text-base-600 leading-base-600;
		}
		&.size-700 {
			@apply text-hero-700 leading-hero-700;
		}
		&.size-800 {
			@apply text-hero-800 leading-hero-800;
		}
		&.size-900 {
			@apply text-hero-900 leading-hero-900;
		}
		&.size-1000 {
			@apply text-hero-1000 leading-hero-1000;
		}
		&.monospace {
			@apply font-monospace;
		}
		&.numeric {
			@apply font-numeric;
		}
		&.weight-medium {
			@apply font-medium;
		}
		&.weight-semibold {
			@apply font-semibold;
		}
		&.weight-bold {
			@apply font-bold;
		}
		&.align-center {
			@apply text-center;
		}
		&.align-end {
			@apply text-end;
		}
		&.align-justify {
			@apply text-justify;
		}
	}
</style>
