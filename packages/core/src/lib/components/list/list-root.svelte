<script lang="ts">
	import { animate as gsapanimate } from '@svelte-fui/core/actions/animation.svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		element = $bindable(),
		class: klass = '',
		onmount = undefined,
		ondestroy = undefined,
		animate = undefined,
		children = undefined,
		ref = undefined,
		...restProps
	} = $props();

	$effect(() => {
		onmount?.(new CustomEvent('mount'));

		return () => {
			ondestroy?.(new CustomEvent('destroy'));
		};
	});
</script>

<ul
	bind:this={element}
	use:gsapanimate={animate ?? (() => ({}))}
	use:reference={ref}
	class={classnames('fui-list flex flex-col rounded-inherit', klass)}
	{...restProps}
>
	{@render children?.()}
</ul>
