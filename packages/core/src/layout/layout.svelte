<script lang="ts">
	import { getFluentRootContext } from '@svelte-fui/core';
	import { nanoid } from 'nanoid';
	import { classnames } from '../internal';

	const context_root = getFluentRootContext();
	const layouts = context_root.layouts;

	let klass = '';
	export { klass as class };

	export let id = nanoid(8);

	$layouts[id] = {
		id,
		element: undefined
	};
</script>

<div
	bind:this={$layouts[id].element}
	class={classnames('fui-layout overflow-hidden bg-transparent', klass, 'pointer-events-none absolute inset-0')}
	data-id={id}
>
	<slot />
</div>
