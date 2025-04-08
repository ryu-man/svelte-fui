<script lang="ts" generics="T">
	import { nanoid } from 'nanoid';
	import { setAccordionContext, type AccordionContext } from './context';
	import type { AccordionRootProps } from './types';
	import { classnames } from '../internal';

	let {
		class: klass = '',
		value = $bindable(undefined),
		values = $bindable([]),
		data = $bindable([]),
		element = $bindable(undefined),
		multiple = false,
		collapsible = false,
		children
	}: AccordionRootProps<T> = $props();

	let items: AccordionContext<T>['derived']['data']['items']['all'] = $state({});

	$effect(() => {
		data = values.map((d) => items[d].data).filter(Boolean) as T[];
	});

	const contextState: AccordionContext<T>['state'] = $state({
		elements: {}
	});

	const contextDerived: AccordionContext<T>['derived'] = $derived({
		data: {
			items: {
				all: items,
				active: values.map((d) => items[d])
			},
			collapsible,
			multiple,
			value,
			values
		}
	});

	const context = setAccordionContext({
		id: nanoid(),
		get state() {
			return contextState;
		},
		get derived() {
			return contextDerived;
		},
		events: {
			onchange: (ev: Event) => {}
		},
		methods: {
			open(vals) {
				const uniqueValues = new Set(values);

				for (const val of vals) {
					uniqueValues.add(val);
				}

				values = [...uniqueValues];
			},
			close(vals) {
				const uniqueValues = new Set(values);

				for (const val of vals) {
					uniqueValues.delete(val);
				}

				values = [...uniqueValues];
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
				console.log('toggle');
			},
			mount(value, item) {
				items[value] = {
					data: item.data,
					value: item.value
				};
			},
			unmount(value) {
				delete items[value];
			},
			setCollapsible(value) {
				collapsible = value;
			},
			setMultiple(value) {
				multiple = value;
			}
		}
	});
</script>

<div
	bind:this={element}
	bind:this={contextState.elements.root}
	class={classnames('fui-accordion', klass)}
>
	{#if children}
		{@render children({ context })}
	{/if}
</div>
