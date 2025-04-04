<script lang="ts">
	import { animate as gsapanimate } from '../actions/animation.svelte';
	import { classnames } from '../internal';

	let {
		element = $bindable(),
		class: klass = '',
		children = undefined,
		onmount = undefined,
		ondestroy = undefined,
		animate = undefined,
		...restProps
	} = $props();

	$effect(() => {
		onmount?.(new CustomEvent('mount'), element);

		return () => {
			ondestroy?.(new CustomEvent('destroy'), element);
		};
	});
</script>

<ul
	bind:this={element}
	use:gsapanimate={animate ?? (() => ({}))}
	class={classnames('fui-list flex flex-col rounded-inherit', klass)}
	{...restProps}
>
	{@render children?.()}
</ul>
