<script lang="ts">
	import { classnames } from '../internal';
	import { getTabsContext } from './context';

	const context_tabs = getTabsContext();
	if (!context_tabs) {
		throw new Error('');
	}

	const element = context_tabs.header.element;

	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-tabs-header flex', klass)} bind:this={$element}>
	<slot />
</div>
