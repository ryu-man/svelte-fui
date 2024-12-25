<script lang="ts">
	import InputRoot from './input-root.svelte';
	import InputElement from './input-element.svelte';
	import type { InputSize, InputType } from './types';
	import { classnames } from '../internal';

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

	export let required = false;

	export let size: InputSize = 'md';

	export let underline = false;

	export let name: string | undefined = undefined;

	export let ariaLabel: string | undefined = undefined;

	export let ariaDescribedby: string | undefined = undefined;
	export let ariaInvalid = false;

	/** Specifies a custom class name for the TextBox container. */
	let klass = '';
	export { klass as class };

	export let id: string | undefined = undefined;
</script>

<InputRoot
	class={classnames('fui-input')}
	{size}
	{disabled}
	{readonly}
	{underline}
	{ariaInvalid}
	{id}
>
	{#if $$slots.before}
		<div class="flex h-full items-center">
			<slot name="before" />
		</div>
	{/if}

	<InputElement
		class={classnames(
			'px-xxs text-neutral-foreground-1 leading-inherit flex-1 border-none bg-transparent',
			klass
		)}
		{id}
		{name}
		{type}
		{placeholder}
		{disabled}
		{readonly}
		{required}
		{ariaLabel}
		{ariaDescribedby}
		{ariaInvalid}
		bind:value
		bind:valueAsDate
		bind:valueAsNumber
		on:input
		on:input
		on:blur
		on:keydown
		on:keypress
		on:keyup
		on:click
		{...$$restProps}
	/>

	{#if $$slots.after}
		<div class="flex h-full items-center">
			<slot name="after" />
		</div>
	{/if}
</InputRoot>
