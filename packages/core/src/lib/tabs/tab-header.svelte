<script lang="ts">
	import { getTabsContext, type TabItemContext } from './context';
	import { classnames } from '../internal';
	import { getFluentContext } from '../internal/context';
	import { portal } from '@svelte-fui/core/actions/portal';

	const context_tabs = getTabsContext();
	if (!context_tabs) {
		throw new Error('');
	}

	const element = context_tabs.header.element;

	const context_tab = getFluentContext<TabItemContext>('@context/tabs/tab');
	if (!context_tab) {
		throw new Error('');
	}

	const active = context_tab.active;

	let klass = '';
	export { klass as class };

	function onclick() {
		if (context_tab?.value) {
			context_tabs?.select(context_tab.value);
		}
	}
</script>

{#if $element}
	<!-- content here -->
	<button
		class={classnames(
			'fui-tab-header px-2 py-2 cursor-pointer hover:bg-neutral-background-1-hover active:bg-neutral-background-1-pressed',
			$active &&
				'bg-brand-background hover:bg-brand-background-hover active:bg-brand-background-pressed',
			klass
		)}
		data-controled-by={context_tab.id}
		use:portal={{
			target: $element,
			onMount: () => {}
		}}
		on:click={onclick}
	>
		<slot />
	</button>
{/if}
