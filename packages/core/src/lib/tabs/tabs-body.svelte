<script lang="ts">
	import { classnames } from '../internal';
	import { getTabsContext } from './context';

	const context_tabs = getTabsContext();
	if (!context_tabs) {
		throw new Error('');
	}

	const element = context_tabs.body.element;

	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-tabs-body relative grid grid-cols-1 p-4 flex-1', klass)}>
	<div class="relative" bind:this={$element}>
		<slot />
	</div>
</div>
