<script lang="ts" generics="T">
	import { classnames } from '@svelte-fui/core/internal';
	import { getComboboxContext } from './context';
	import type { DropdownItemProps } from '../dropdown/types';
	import MenuItem from '../menu/menu-item.svelte';

	const comboboxContext = getComboboxContext<T>();

	if (!comboboxContext) {
		throw new Error('Make sure to use Dropdown menu component within a Dropdown menu component');
	}

	const values = $derived(comboboxContext.state.values);

	let {
		class: klass = '',
		value,
		data = undefined,
		disabled = false,
		children = undefined,
		onclick = undefined,
		...restProps
	}: DropdownItemProps<T> = $props();

	let element: HTMLButtonElement | undefined = $state();

	const isSelected = $derived(values.includes(value));

	$effect(() => {
		return comboboxContext.methods.mount(value, {
			get data() {
				return data;
			},
			get text() {
				return element?.innerText ?? '';
			},
			get disabled() {
				return disabled;
			},
			get selected() {
				return isSelected;
			},
			get value() {
				return value;
			}
		});
	});

	function onclick_(ev: Event) {
		// Call onclick event
		onclick?.(ev, { context: comboboxContext });

		// If preventDefault() is called then do nothing and return
		if (ev.defaultPrevented) {
			return;
		}

		if (isSelected) {
			comboboxContext?.methods.unselect([value]);
		} else {
			// Select current value
			comboboxContext?.methods.select([value]);
		}

		comboboxContext?.update((state) => {
			state.extension = { ...state.extension, query: getInnerText() };
		});

		// Close dropdown
		comboboxContext?.methods.close();

		// Trigger change event
		comboboxContext?.events?.onchange(new CustomEvent('change'), {
			context: comboboxContext,
			type: '',
			value,
			data
		});
	}

	function getInnerText() {
		const el = element?.querySelector('[data-text]') ?? element;
		return el?.innerText ?? '';
	}
</script>

<MenuItem bind:element class={klass} {disabled} onclick={onclick_} {...restProps}>
	{@render children?.({ context: comboboxContext })}
</MenuItem>

<style lang="postcss">
	.fui-dropdown-item {
		@apply relative;

		&::before {
			@apply rounded-inherit pointer-events-none absolute inset-0 z-[-1];
			content: '';
		}
	}
</style>
