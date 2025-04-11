<script lang="ts" generics="T extends Component">
	import type { Component, ComponentProps, Snippet } from 'svelte';

	type Props = {
		shell: T;
		children?: Snippet<[{ hover: boolean; active: boolean }]>;
	} & ComponentProps<T>;

	let { shell: Shell, children = undefined, ...restProps }: Props = $props();

	let hover = $state(false);
	let active = $state(false);

	const ref = (el: HTMLElement) => {
		const onpointerenter = () => {
			hover = true;
		};
		const onpointerleave = () => {
			hover = false;
		};

		const onpointerdown = () => {
			active = true;
		};
		const onpointerup = () => {
			active = false;
		};

		el.addEventListener('pointerenter', onpointerenter);
		el.addEventListener('pointerleave', onpointerleave);

		el.addEventListener('pointerdown', onpointerdown);
		el.addEventListener('pointerup', onpointerup);

		return () => {
			el.removeEventListener('pointerenter', onpointerenter);
			el.removeEventListener('pointerleave', onpointerleave);
			el.removeEventListener('pointerdown', onpointerdown);
			el.removeEventListener('pointerup', onpointerup);
		};
	};
</script>

<Shell {ref} {...restProps}>
	{@render children?.({ hover, active })}
</Shell>
