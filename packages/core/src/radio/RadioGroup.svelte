<script lang="ts">
	import { nanoid } from 'nanoid';
	import { writable } from 'svelte/store';
	import { classnames } from '../internal';
	import { setRadioGroupContext } from './context';
	import type { Layout } from './types'

	export let name: string = nanoid();
	export let value: string | undefined = undefined;
	export let layout: Layout = 'vertical';
	export let disabled = false;
	export let required = false;

	const { disabled$, required$, value$, name$, layout$ } = setRadioGroupContext({
		disabled$: writable(disabled),
		required$: writable(required),
		value$: writable(value),
		name$: writable(name),
		layout$: writable(layout)
	});

	$: disabled$.set(disabled);
	$: required$.set(required);
	$: value$.set(value);
	$: name$.set(name);
	$: layout$.set(layout);
</script>

<div class={classnames('fui-radio-group', layout)} role="radiogroup" {...$$restProps}>
	<slot />
</div>

<style lang="postcss">
	.fui-radio-group {
		@apply flex items-start;

		&.vertical {
			@apply flex-col;
		}
	}
</style>
