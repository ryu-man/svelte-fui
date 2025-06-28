<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';
	import type { TextProps } from './types';

	let {
		element = $bindable(),
		class: klass = '',
		as = 'span',
		align = 'start',
		block = false,
		font = 'base',
		italic = false,
		size = '300',
		strikethrough = false,
		truncate = false,
		weight = 'regular',
		wrap = false,
		children = undefined,
		ref = undefined
	}: TextProps = $props();
</script>

<svelte:element
	this={as}
	bind:this={element}
	use:reference={ref}
	class={classnames(
		'fui-text visible inline overflow-clip whitespace-normal text-start font-base text-base-300 font-regular leading-base-300',
		size === '100' && 'text-base-100 leading-base-100',
		size === '200' && 'text-base-200 leading-base-200',
		size === '400' && 'text-base-400 leading-base-400',
		size === '500' && 'text-base-500 leading-base-500',
		size === '600' && 'text-base-600 leading-base-600',
		size === '700' && 'text-base-700 leading-base-700',
		size === '800' && 'text-base-800 leading-base-800',
		size === '900' && 'text-base-900 leading-base-900',
		size === '1000' && 'text-base-1000 leading-base-1000',
		font === 'monospace' && 'font-monospace',
		font === 'numeric' && 'font-numeric',
		weight === 'meduim' && 'font-medium',
		weight === 'semibold' && 'font-semibold',
		weight === 'bold' && 'font-bold',
		align === 'start' && 'text-start',
		align === 'center' && 'text-center',
		align === 'end' && 'text-end',
		{ size, align, block, italic, strikethrough, truncate, weight, wrap },
		font,
		klass
	)}
>
	{@render children?.()}
</svelte:element>

<style lang="postcss">
	.fui-text {
		&.nowrap {
			overflow: hidden;
			white-space: nowrap;
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
	}
</style>
