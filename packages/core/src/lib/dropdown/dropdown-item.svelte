<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { classnames } from '@svelte-fui/core/internal';
	import { type DropdownContext, getDropdownContext } from './context';

	type CustomEventDetail<T extends Event, R = any> = { event: T; context: DropdownContext<R> };
	type DropddownItemEvents = {
		click: CustomEventDetail<Event>;
	};

	const dispatch = createEventDispatcher<DropddownItemEvents>();

	export let value: string;
	export let disabled = false;
	export let data: unknown | undefined = undefined;
	let klass = '';
	export { klass as class };

	let element: HTMLButtonElement;

	const dropdown_context = getDropdownContext();
	if (!dropdown_context) {
		throw new Error('Make sure to use Dropdown menu component within a Dropdown menu component');
	}

	const dropdown_value = dropdown_context.value;
	const dropdown_text = dropdown_context.text;
	const dropdown_data = dropdown_context.data;

	$: is_active = value && value === $dropdown_value;

	onMount(() => {
		if (is_active) {
			dropdown_text.set(element.innerText.trim());
			dropdown_data.set(data);
		}
	});

	function onclick(ev: Event) {
		const should_continue = dispatch('click', { event: ev, context: dropdown_context }, { cancelable: true });

		if (should_continue) {
			dropdown_value.set(value);
			dropdown_text.set(element.innerText.trim());
			dropdown_data.set(data);

			dropdown_context?.onChange({
				value,
				data,
				text: element.innerText
			});
		}
	}
</script>

<button
	class={classnames(
		'fui-dropdown-item text-neutral-foreground-1 first:rounded-t-inherit last:rounded-b-inherit before:bg-neutral-foreground-1 flex px-4 py-1.5 before:opacity-0 before:transition-opacity before:duration-100',
		!disabled && 'cursor-pointer hover:before:opacity-5 active:before:opacity-10',
		disabled && 'opacity-50',
		is_active && 'before:bg-brand-background before:opacity-60 hover:before:opacity-70 active:before:opacity-80',
		klass
	)}
	data-active={is_active}
	{disabled}
	bind:this={element}
	on:click={onclick}
>
	<slot />
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
