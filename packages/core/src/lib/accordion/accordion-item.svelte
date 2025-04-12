<script lang="ts" generics="T">
	import { nanoid } from 'nanoid';
	import { getAccordionContext, setAccordionItemContext, type AccordionItemState } from './context';
	import type { AccordionItemRootProps } from './types';
	import { classnames } from '../internal';
	import { defineProperty, defineState } from '../internal/context';
	import { reference } from '../internal/dom.svelte';

	let {
		class: klass = '',
		value = nanoid(),
		data = undefined,
		disabled = false,
		element = $bindable(undefined),
		children = undefined,
		ref = undefined
	}: AccordionItemRootProps<T> = $props();

	const accordionRootContext = getAccordionContext();

	const multiple = $derived(accordionRootContext.state.multiple);
	const collapsible = $derived(accordionRootContext.state.collapsible);
	const values = $derived(accordionRootContext.state.values);

	const active = $derived(!disabled && values.includes(value));

	let dom = $state({});

	const contextDerived = $derived({
		value,
		data,
		active,
		disabled
	});

	const accordionItemState = defineState<AccordionItemState<T>>([
		(o) =>
			defineProperty(
				o,
				'dom',
				() => dom,
				(v) => (dom = { ...v })
			),
		(o) => defineProperty(o, 'active', () => active),
		(o) => defineProperty(o, 'data', () => data),
		(o) => defineProperty(o, 'disabled', () => disabled),
		(o) => defineProperty(o, 'value', () => value)
	]);

	const contextItem = setAccordionItemContext({
		id: nanoid(),
		type: 'accordion-item',
		get state() {
			return contextDerived;
		},
		update(fn) {
			fn(accordionItemState);
		},
		parent() {
			return undefined;
		},
		rootContext() {
			return accordionRootContext;
		},
		methods: {
			close() {
				accordionRootContext.methods.close([value]);
			},
			open() {
				accordionRootContext.methods.open([value]);
			},
			toggle() {
				accordionRootContext.methods.toggle([value]);
			}
		}
	});

	$effect(() => {
		return accordionRootContext.methods.mount(value, {
			data,
			value
		});
	});
</script>

<div bind:this={element} use:reference={ref} class={classnames('fui-accordion-item', klass)}>
	{#if children}
		{@render children({
			context: contextItem
		})}
	{/if}
</div>
