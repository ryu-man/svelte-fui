<script lang="ts">
	import { writable, type Writable } from 'svelte/store';

	import type { ExternalContext, InputType } from './types';

	import { classnames } from '../internal';

	import { getSharedContext } from '../internal/context';

	type InputEvent = Event & {
		currentTarget: EventTarget & HTMLInputElement;
	};

	const sharedContext$ = (getSharedContext('input') || writable({})) as Writable<
		Partial<ExternalContext>
	>;

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

<input
	use:setInputType={type}
	class={classnames(
		'px-xxs text-neutral-foreground-1 leading-inherit flex-1 border-none bg-transparent outline-none',
		klass
	)}
	{id}
	{name}
	{placeholder}
	{disabled}
	{readonly}
	required={$sharedContext$.required ?? required}
	aria-label={ariaLabel}
	aria-describedby={ariaDescribedby}
	aria-invalid={$sharedContext$.invalid ?? ariaInvalid}
	bind:value
	on:input={oninput}
	on:input
	on:blur
	on:keydown
	on:keypress
	on:keyup
	on:click
	{...$$restProps}
/>
