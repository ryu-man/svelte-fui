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
		multiple = false,
		collapsible = false,
		children
	}: AccordionRootProps<T> = $props();

	let items: AccordionContext<T>['derived']['data']['items']['all'] = $state({});

	$effect(() => {
		data = values.map((d) => items[d].data).filter(Boolean) as T[];
	});

	const context_derived: AccordionContext<T>['derived'] = $derived({
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
		get derived() {
			return context_derived;
		},
		events: {
			onchange: (ev: Event) => {}
		},
		methods: {
			open(vals) {
				const unique_values = new Set(values);

				for (const val of vals) {
					unique_values.add(val);
				}

				values = [...unique_values];
			},
			close(vals) {
				const unique_values = new Set(values);

				for (const val of vals) {
					unique_values.delete(val);
				}

				values = [...unique_values];
			},
			toggle(vals) {
				const unique_values = new Set(values);

				for (const val of vals) {
					if (unique_values.has(val)) {
						unique_values.delete(val);
					} else {
						unique_values.add(val);
					}
				}

				values = [...unique_values];
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

<div class={classnames('fui-accordion', klass)}>
	{#if children}
		{@render children({ context })}
	{/if}
</div>
