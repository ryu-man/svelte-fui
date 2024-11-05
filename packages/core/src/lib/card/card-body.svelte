<script lang="ts">
	import { classnames } from '../internal';
	import type { CardBodyProps } from './types';

	let { class: klass = '', as = 'div', children }: CardBodyProps = $props();
</script>

<svelte:element this={as} class={classnames('fui-card-body flex gap-m', klass)}>
	{@render children?.()}
</svelte:element>
