<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';
	import { getSharedContext } from '@svelte-fui/core/internal/context';
	import type { ExternalContext, InputElementProps } from './types';
	import { classnames } from '../internal';

	type InputEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	const sharedContext$ = getSharedContext<ExternalContext>('input') || writable({});

	let {
		class: klass = '',
		value = $bindable(undefined),
		valueAsDate = $bindable(undefined),
		valueAsNumber = $bindable(undefined),
		type,
		placeholder,
		readonly = false,
		disabled = false,
		underline = false,
		invalid = false,
		id,
		name,
		size,
		before,
		after,
		oninput,
		...restProps
	}: HTMLAttributes<HTMLInputElement> & InputElementProps = $props();

	function oninput_(ev: InputEvent) {
		oninput?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		const currentTarget = ev.currentTarget as HTMLInputElement;

		valueAsNumber = currentTarget.valueAsNumber;
		valueAsDate = currentTarget.valueAsDate ?? undefined;
	}
</script>

<input
	{type}
	class={classnames(
		'px-xxs text-neutral-foreground-1 leading-inherit flex-1 border-none bg-transparent',
		klass
	)}
	{id}
	{name}
	{placeholder}
	{disabled}
	{readonly}
	bind:value
	oninput={oninput_}
	{...restProps}
/>

<style lang="postcss">
	input {
		@apply outline-none;
	}
</style>
