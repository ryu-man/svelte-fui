<script lang="ts">
	import { writable } from 'svelte/store';
	import { getSharedContext } from '@svelte-fui/core/internal/context';
	import InputSkin from './input-skin.svelte';
	import type { ExternalContext, InputSize, InputType } from './types';
	import { classnames } from '../internal';

	type InputEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	const sharedContext$ = getSharedContext<ExternalContext>('input') || writable({});

	/** The input's current value. */
	export let value: any = '';
	export let valueAsNumber: number | undefined = undefined;
	export let valueAsDate: Date | undefined | null = undefined;

	/** Determiness the input type of the textbox. */
	export let type: InputType = 'text';

	/** The initial placeholder text displayed if no value is present. */
	export let placeholder: string | undefined = undefined;

	/** Determines whether the textbox can be typed in or not. */
	export let readonly = false;

	/** Controls whether the TextBox is intended for user interaction, and styles it accordingly. */
	export let disabled = false;

	export let size: InputSize = $sharedContext$.size || 'md';

	export let underline = false;

	export let name: string | undefined = undefined;

	export let ariaLabel: string | undefined = undefined;

	export let ariaDescribedby: string | undefined = undefined;
	export let ariaInvalid = $sharedContext$.invalid || false;

	/** Specifies a custom class name for the TextBox container. */
	let klass = '';
	export { klass as class };

	export let id: string | undefined = undefined;

	function setInputType(node: HTMLInputElement, type: InputType) {
		node.type = type;
	}

	function oninput(e: InputEvent) {
		const currentTarget = e.currentTarget as HTMLInputElement;
		valueAsNumber = currentTarget.valueAsNumber;
		valueAsDate = currentTarget.valueAsDate;
	}
</script>

<InputSkin class={classnames('fui-input', { size, underline, disabled, invalid: ariaInvalid && !disabled })} {id}>
	<slot name="before" />

	<input
		use:setInputType={type}
		class={classnames('px-xxs text-neutral-foreground-1 leading-inherit border-none bg-transparent', klass)}
		{id}
		{name}
		{placeholder}
		{disabled}
		{readonly}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedby}
		aria-invalid={ariaInvalid}
		bind:value
		on:input={oninput}
		on:input
		on:blur
		on:keydown
		on:keypress
		on:keyup
		on:click
	/>

	<slot name="after" />
</InputSkin>

<style lang="postcss">
	input {
		@apply outline-none;
	}
</style>
