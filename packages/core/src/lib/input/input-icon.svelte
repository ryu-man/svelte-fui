<script lang="ts">
	import { Icon } from '../icon';
	import { classnames } from '../internal';
	import type { InputIconProps } from './types';

	let {
		class: klass = '',
		element = $bindable(undefined),
		children,
		...restProps
	}: InputIconProps = $props();
</script>

<Icon bind:this={element} class={classnames('input-icon h-full py-1', klass)} {...restProps}>
	{@render children?.()}
</Icon>
