<script lang="ts" generics="T">
	import { nanoid } from 'nanoid';

	import { derived } from 'svelte/store';

	import { setFluentContext } from '../internal/context';

	import { onMount } from 'svelte';
	import { getTabsContext, type TabItemContext } from './context';
	import { fid } from '../internal/utils';

	const context_tabs = getTabsContext();
	if (!context_tabs) {
		throw new Error('');
	}

	const header_element = context_tabs.header.element;
	const active_tab = context_tabs.tabs.active;

	const id = fid('tab');

	export let data: T | undefined = undefined;
	export let active = false;
	export let value = nanoid();

	const active_store = derived(active_tab, (tab) => tab?.value === value, false);
	$: active = $active_store;

	setFluentContext<TabItemContext>({ id, value: value, active: active_store }, '@context/tabs/tab');

	onMount(() => {
		return context_tabs.mount(value, {
			active,
			data
		});
	});
</script>

{#if $header_element && $active_tab}
	<slot />
{/if}
