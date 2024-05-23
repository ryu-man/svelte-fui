<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';

	export let as = 'div';
	let klass = '';
	export { klass as class };
</script>

<svelte:element this={as} class={classnames('fui-dialog-title subtitle-1 m-0 px-6 pt-6', klass)}>
	<slot />
</svelte:element>
