<script lang="ts" generics="T">
	import { classnames } from '@svelte-fui/core/internal';
	import { getComboboxContext } from './context';
	import type { DropdownItemProps } from '../dropdown/types';

	const context_combobox = getComboboxContext<T>();
	if (!context_combobox) {
		throw new Error('Make sure to use Dropdown menu component within a Dropdown menu component');
	}

	const dropdown_values = $derived(context_combobox.derived.data.values);

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

	$effect(() => {
		return context_combobox.methods.mount(value, {
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
		onclick?.(ev, { context: context_combobox });

		// If preventDefault() is called then do nothing and return
		if (ev.defaultPrevented) {
			return;
		}

		const is_selected = context_combobox.methods.selected(value);

		// Unselect all items if dropdown in not in multiple mode
		if (!context_combobox.derived.data.multiple) {
			context_combobox.methods.unselect(context_combobox.derived.data.values);
		}

		if (is_selected) {
			context_combobox.methods.unselect([value]);
		} else {
			// Select current value
			context_combobox.methods.select([value]);
		}

		// Close dropdown
		context_combobox.methods.close();

		// Trigger change event
		context_combobox.events.onchange({ context: context_combobox, type: '', value, data });
	}
</script>

<button
	class={classnames(
		'fui-dropdown-item text-neutral-foreground-1 first:rounded-t-inherit last:rounded-b-inherit before:bg-neutral-foreground-1 flex px-4 py-1.5 before:opacity-0 before:transition-opacity before:duration-100',
		!disabled && 'cursor-pointer hover:before:opacity-5 active:before:opacity-10',
		disabled && 'opacity-50',
		klass
	)}
	data-active={is_active}
	{disabled}
	bind:this={element}
	onclick={onclick_}
>
	{@render children?.({ context: context_combobox })}
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
