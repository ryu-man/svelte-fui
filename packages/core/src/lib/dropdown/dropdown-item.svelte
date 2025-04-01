<script lang="ts" generics="T">
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext, type DropdownItem, type DropdownState } from './context-root';
	import type { DropdownItemProps } from './types';
	import { setDropdownItemContext, type DropdownItemState } from './context-item';
	import { nanoid } from 'nanoid';
	import { defineProperty, defineState } from '../internal/context';

	const dropdownContext = getDropdownContext<T>();

	if (!dropdownContext) {
		throw new Error('Make sure to use Dropdown menu component within a Dropdown menu component');
	}

	const dropdownValues = $derived(dropdownContext.state.values);

	let {
		class: klass = '',
		value,
		data = undefined,
		disabled = false,
		children,
		onclick
	}: DropdownItemProps<T> = $props();

	let element: HTMLButtonElement | undefined = $state();

	const isSelected = $derived(dropdownValues.includes(value));

	const contextState = defineState<DropdownItemState<T>>([
		(o) => defineProperty(o, 'active', () => isSelected),
		(o) => defineProperty(o, 'data', () => data),
		(o) => defineProperty(o, 'value', () => value)
	]);

	const itemContext = setDropdownItemContext({
		id: nanoid(),
		type: 'dropdown-item',
		parent() {
			return undefined;
		},
		update(fn) {},
		get state() {
			return contextState;
		},
		methods: {
			select() {
				dropdownContext.methods.select([value]);
			},
			unselect() {
				dropdownContext.methods.unselect([value]);
			}
		}
	});

	const item: DropdownItem<T> = {
		get data() {
			return data;
		},
		get text() {
			return element?.innerText ?? '';
		},
		get disabled() {
			return disabled ?? false;
		},
		get selected() {
			return isSelected ?? false;
		},
		get value() {
			return value;
		}
	};

	$effect(() => {
		return dropdownContext.methods.mount(value, item);
	});

	function onclick_(ev: Event) {
		// Call onclick event
		onclick?.(ev, { context: dropdownContext });

		// If preventDefault() is called then do nothing and return
		if (ev.defaultPrevented) {
			return;
		}

		// Unselect all items if dropdown in not in multiple mode
		if (!dropdownContext?.state.multiple) {
			dropdownContext?.methods.unselect(dropdownContext?.state.values);
		}

		if (isSelected) {
			dropdownContext?.methods.unselect([value]);
		} else {
			// Select current value
			dropdownContext?.methods.select([value]);
		}

		if (!dropdownContext?.state.multiple) {
			// Close dropdown if dropdown is not in multiple choice mode
			dropdownContext?.methods.close();
		}

		// Trigger change event
		dropdownContext?.events?.onchange?.({ context: dropdownContext, type: '', value, data });
	}
</script>

<button
	class={classnames(
		'fui-dropdown-item text-neutral-foreground-1 first:rounded-t-inherit last:rounded-b-inherit flex gap-2 px-4 py-1.5 before:transition-opacity before:duration-100 before:bg-brand-background before:opacity-0',
		!disabled && 'cursor-pointer hover:before:opacity-20 active:before:opacity-25',
		disabled && 'opacity-50',
		isSelected && 'before:opacity-50 hover:before:opacity-55 active:before:opacity-60',
		klass
	)}
	data-active={isSelected}
	{disabled}
	bind:this={element}
	onclick={onclick_}
>
	{@render children?.({ context: dropdown_context, value, data, active: isSelected })}
</button>

<style lang="postcss">
	.fui-dropdown-item {
		@apply relative;

		&::before {
			@apply rounded-inherit pointer-events-none absolute inset-0 z-[-1];
			content: '';
		}
	}

	.fui-dropdown-item[data-active='true'] {
		@apply text-neutral-foreground-on-brand;
	}
</style>
