<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { classnames } from '../internal';
	import { setAccordionContext } from './context';

	const dispatch = createEventDispatcher();

	export let value: string | number | string[] | number[] | undefined = undefined;
	export let collapsible = false;
	export let multiple: boolean = Array.isArray(value);
	let klass = '';
	export { klass as class };

	const collapsible$ = writable(collapsible);
	const multiple$ = writable(multiple);

	const { selectedValue$ } = setAccordionContext({ collapsible$, multiple$ });

	selectedValue$.set(value);

	onMount(() =>
		selectedValue$.subscribe((val) => {
			value = val;
			dispatch('change', val);
		})
	);

	$: selectedValue$.set(value);
	$: collapsible$.set(collapsible);
	$: multiple$.set(multiple);
</script>

<div class={classnames('fui-accordion', klass)}>
	<slot />
</div>

<style lang="postcss">
</style>
