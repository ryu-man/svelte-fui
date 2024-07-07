<script lang="ts">
	import { getMenuContext } from '@svelte-fui/core/menu';
	import { classnames } from '../internal';

	const menu_context = getMenuContext();

	const open_store = menu_context.open;

	let klass = '';
	export { klass as class };

	function onclick() {
		open_store.update((v) => !v);
	}
</script>

<button class={classnames('fui-menu-trigger', klass)} on:click={onclick}>
	<slot />
</button>
