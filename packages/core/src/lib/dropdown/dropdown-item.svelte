<script lang="ts" generics="T">
	import { classnames } from '@svelte-fui/core/internal';
	import { getDropdownContext } from './context-root';
	import type { DropdownItemProps } from './types';
	import { setDropdownItemContext, type DropdownItemContext } from './context-item';
	import { nanoid } from 'nanoid';

	const context_dropdown = getDropdownContext<T>();
	if (!context_dropdown) {
		throw new Error('Make sure to use Dropdown menu component within a Dropdown menu component');
	}

	const dropdown_values = $derived(context_dropdown.derived.data.values);

	let {
		class: klass = '',
		value,
		data = undefined,
		disabled = false,
		children,
		onclick
	}: DropdownItemProps<T> = $props();

	let element: HTMLButtonElement | undefined = $state();

	const is_active = $derived(dropdown_values.includes(value));

	const context_derived: DropdownItemContext<T>['derived'] = $derived({
		data: {
			active: is_active,
			data,
			value
		},
		elements: {}
	});

	const context_item = setDropdownItemContext({
		id: nanoid(),
		type: 'dropdown-item',
		get state() {
			return {
				data: {},
				elements: {}
			};
		},
		get derived() {
			return context_derived;
		},
		methods: {
			select() {
				context_dropdown.methods.select([value]);
			},
			unselect() {
				context_dropdown.methods.unselect([value]);
			}
		}
	});

	$effect(() => {
		return context_dropdown.methods.mount(value, {
			data() {
				return data;
			},
			innerText() {
				return element?.innerText ?? '';
			},
			isDisabled() {
				return disabled;
			},
			isSelected() {
				return is_active;
			},
			value() {
				return value;
			}
		});
	});

	function onclick_(ev: Event) {
		// Call onclick event
		onclick?.(ev, { context: context_dropdown });

		// If preventDefault() is called then do nothing and return
		if (ev.defaultPrevented) {
			return;
		}

		const is_selected = context_dropdown.methods.selected(value);

		// Unselect all items if dropdown in not in multiple mode
		if (!context_dropdown.derived.data.multiple) {
			context_dropdown.methods.unselect(context_dropdown.derived.data.values);
		}

		if (is_selected) {
			context_dropdown.methods.unselect([value]);
		} else {
			// Select current value
			context_dropdown.methods.select([value]);
		}

		if (!context_dropdown.derived.data.multiple) {
			// Close dropdown if dropdown is not in multiple choice mode
			context_dropdown.methods.close();
		}

		// Trigger change event
		context_dropdown.events.onchange({ context: context_dropdown, type: '', value, data });
	}
</script>

<button
	class={classnames(
		'fui-dropdown-item text-neutral-foreground-1 first:rounded-t-inherit last:rounded-b-inherit flex gap-2 px-4 py-1.5 before:transition-opacity before:duration-100 before:bg-brand-background before:opacity-0',
		!disabled && 'cursor-pointer hover:before:opacity-20 active:before:opacity-25',
		disabled && 'opacity-50',
		is_active && 'before:opacity-50 hover:before:opacity-55 active:before:opacity-60',
		klass
	)}
	data-active={is_active}
	{disabled}
	bind:this={element}
	onclick={onclick_}
>
	{@render children?.({ context: dropdown_context, value, data, active: is_active })}
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
