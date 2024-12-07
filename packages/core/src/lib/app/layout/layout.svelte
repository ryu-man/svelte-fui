<script lang="ts">
	import { nanoid } from 'nanoid';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import type { LayoutRootProps } from './types';

	const context_root = getFluentRootContext();

	let { class: klass = '', id = nanoid(8), children }: LayoutRootProps = $props();

	context_root.state.elements.layouts[id] = {
		id
	};
	const layout = $derived(context_root.derived.elements.layouts[id]);
</script>

<div
	bind:this={context_root.state.elements.layouts[id].element}
	class={classnames(
		'fui-layout overflow-hidden bg-transparent',
		klass,
		'pointer-events-none absolute inset-0'
	)}
	data-id={id}
>
	{@render children?.()}
</div>
