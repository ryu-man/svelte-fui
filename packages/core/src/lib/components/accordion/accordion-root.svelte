<script lang="ts" generics="T">
	import { nanoid } from 'nanoid';
	import { setAccordionContext, type AccordionState } from './context';
	import type { AccordionRootProps } from './types';
	import { classnames } from '@svelte-fui/core/internal';
	import { defineProperty, defineState } from '@svelte-fui/core/internal/context';
	import { SvelteMap } from 'svelte/reactivity';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		class: klass = '',
		value = $bindable(undefined),
		values = $bindable([]),
		data = $bindable([]),
		element = $bindable(undefined),
		multiple = false,
		collapsible = false,
		children = undefined,
		ref = undefined
	}: AccordionRootProps<T> = $props();

	let items: AccordionState<T>['items']['all'] = new SvelteMap();

	let dom: AccordionState['dom'] = $state({});

	const accordionState = defineState<AccordionState>([
		(o) =>
			defineProperty(
				o,
				'dom',
				() => dom,
				(v) => (dom = { ...v })
			),
		(o) => defineProperty(o, 'collapsible', () => collapsible),
		(o) =>
			defineProperty(o, 'items', () => ({
				all: items,
				active: values.map((d) => items.get(d))
			})),
		(o) => defineProperty(o, 'multiple', () => multiple),
		(o) => defineProperty(o, 'values', () => (multiple ? values : [value]))
	]);

	const context = setAccordionContext({
		id: nanoid(),
		type: 'accordion',
		get state() {
			return accordionState;
		},
		update(fn) {
			fn(accordionState);
		},
		parent() {
			return undefined;
		},
		events: {
			onchange: (ev: Event) => {}
		},
		methods: {
			open(vals) {
				if (multiple) {
					const uniqueValues = new Set(values);

					for (const val of vals) {
						uniqueValues.add(val);
					}

					values = [...uniqueValues];
					value = values[0];
				} else {
					values = [vals[0]];
					value = values[0];
				}
			},
			close(vals) {
				const uniqueValues = new Set(values);

				for (const val of vals) {
					uniqueValues.delete(val);
				}

				values = [...uniqueValues];
				value = values[0];
			},
			toggle(vals) {
				const uniqueValues = new Set(values);
				for (const val of vals) {
					if (uniqueValues.has(val)) {
						uniqueValues.delete(val);
					} else {
						uniqueValues.add(val);
					}
				}

				values = [...uniqueValues];
				value = values[0];
			},
			mount(value, item) {
				items.set(value, item);
			},
			unmount(value) {
				items.delete(value);
			}
		}
	});

	$effect(() => {
		data = values.map((d) => items.get(d)?.data).filter(Boolean) as T[];
	});
</script>

<div
	bind:this={element}
	bind:this={dom.root}
	use:reference={ref}
	class={classnames('fui-accordion flex flex-col', klass)}
>
	{#if children}
		{@render children({ context })}
	{/if}
</div>
