<script lang="ts" generics="T">
	import { nanoid } from 'nanoid';
	import { getAccordionContext, setAccordionItemContext } from './context';
	import type { AccordionItemRootProps } from './types';
	import { classnames } from '../internal';

	let {
		class: klass = '',
		value = crypto.randomUUID(),
		data = undefined,
		disabled = false,
		element = $bindable(undefined),
		children
	}: AccordionItemRootProps<T> = $props();

	const contextAccordionRoot = getAccordionContext();

	const multiple = $derived(contextAccordionRoot.derived.data.multiple);
	const collapsible = $derived(contextAccordionRoot.derived.data.collapsible);
	const values = $derived(contextAccordionRoot.derived.data.values);

	const active = $derived(!disabled && values.includes(value));

	const contextDerived = $derived({
		value,
		data,
		active,
		disabled
	});

	const contextItem = setAccordionItemContext({
		id: nanoid(),
		parent: () => contextAccordionRoot,
		get derived() {
			return contextDerived;
		},
		methods: {
			close() {
				contextAccordionRoot.methods.close([value]);
			},
			open() {
				contextAccordionRoot.methods.open([value]);
			},
			toggle() {
				contextAccordionRoot.methods.toggle([value]);
			}
		}
	});

	$effect(() => {
		return contextAccordionRoot.methods.mount(value, {
			data,
			value
		});
	});
</script>

<div bind:this={element} class={classnames('fui-accordion-item', klass)}>
	{#if children}
		{@render children({
			context: {
				item: contextItem,
				root: contextAccordionRoot
			}
		})}
	{/if}
</div>
