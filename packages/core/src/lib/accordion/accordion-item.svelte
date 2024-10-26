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
		children
	}: AccordionItemRootProps<T> = $props();

	const context_accordion_root = getAccordionContext();

	const multiple = $derived(context_accordion_root.derived.data.multiple);
	const collapsible = $derived(context_accordion_root.derived.data.collapsible);
	const values = $derived(context_accordion_root.derived.data.values);

	const active = $derived(!disabled && values.includes(value));

	const context_derived = $derived({
		value,
		data,
		active,
		disabled
	});

	const context_item = setAccordionItemContext({
		id: nanoid(),
		parent: () => context_accordion_root,
		get derived() {
			return context_derived;
		},
		methods: {
			close() {
				context_accordion_root.methods.close([value]);
			},
			open() {
				context_accordion_root.methods.open([value]);
			},
			toggle() {
				context_accordion_root.methods.toggle([value]);
			}
		}
	});

	$effect(() => {
		return context_accordion_root.methods.mount(value, {
			data,
			value
		});
	});
</script>

<div class={classnames('fui-accordion-item', klass)}>
	{#if children}
		{@render children({
			context: {
				item: context_item,
				root: context_accordion_root
			}
		})}
	{/if}
</div>
