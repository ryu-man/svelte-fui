<script lang="ts">
	import { Icon } from '@svelte-fui/core';
	import { CheckmarkRegular } from '@svelte-fui/icons';
	import { createEventDispatcher } from 'svelte';
	import { classnames } from '../internal';
	import { getComboboxContext } from './context';

	const dispatch = createEventDispatcher();
	const { selectedId$, selectedValue$, selectedData$, onOptionClick } = getComboboxContext();

	export let id: string | undefined = (+new Date() + Math.random()).toString(32);
	export let data: unknown | undefined = undefined;
	export let active = false;
	export let selected = id === $selectedId$;
	export let disabled = false;
	export let tabindex = -1;
	let klass = '';
	export { klass as class };

	$: selected = id === $selectedId$;

	function onClickHandler(e: Event) {
		if (disabled) return;

		if (!selected) {
			selectedId$.set(id);
			const value = (e.currentTarget as HTMLDivElement).innerText;
			selectedValue$.set(value);
			selectedData$.set(data);
		} else {
			selectedId$.set('');
			selectedValue$.set('');
			selectedData$.set(undefined);
		}

		dispatch('click', selected);
		onOptionClick({
			id,
			value: $selectedValue$,
			selected
		});
	}
</script>

<div
	{id}
	role="option"
	aria-selected="false"
	{tabindex}
	class={classnames('fui-option', { active, selected, disabled }, klass)}
	data-id={id}
	on:click={onClickHandler}
	on:keypress={() => {}}
>
	<Icon class={classnames('fui-option__check-icon', { selected })} src={CheckmarkRegular} />
	<slot />
</div>

<style lang="postcss">
	.fui-option {
		@apply font-base text-base-300 leading-base-300 relative flex cursor-pointer items-center rounded-md;

		--fui-icon-size: 16px;

		color: var(--fui-colorNeutralForeground1);
		column-gap: theme(spacing.xs);
		padding: theme(spacing.sNudge) theme(spacing.s);

		&:hover {
			background-color: var(--fui-colorNeutralBackground1Hover);
		}
		&:active {
			background-color: var(--fui-colorNeutralBackground1Pressed);
		}

		&.active {
			/* taken from @fluentui/react-tabster
			   cannot use createFocusIndicatorStyle() directly, since we aren't using the :focus selector */
			&::after {
				@apply pointer-events-none absolute z-[1] rounded-md;
				content: '';
				border: 2px solid var(--fui-colorStrokeFocus2);
				top: -2px;
				bottom: -2px;
				left: -2px;
				right: -2px;
			}
		}

		&.disabled {
			@apply pointer-events-none;

			color: var(--fui-colorNeutralForegroundDisabled);

			&:hover {
				background-color: var(--fui-colorTransparentBackground);
			}

			&:active {
				background-color: var(--fui-colorTransparentBackground);
			}

			@media (forced-colors: active) {
				color: GrayText;
			}
		}

		.selected {
		}

		:global(.fui-option__check-icon) {
			@apply text-base-400;
			/* Shift icon(s) to the left to give text content extra spacing without needing an extra node
    		   This is done instead of gap since the extra space only exists between icon > content, not icon > icon */

			margin-left: calc(theme(spacing.xxs) * -1);
			margin-right: theme(spacing.xxs);
			visibility: hidden;
		}

		:global(.fui-option__check-icon.selected) {
			visibility: visible;
		}

		.multiselectCheck {
			@apply box-border flex items-center justify-center rounded-sm fill-current;
			border: theme(borderWidth.thin) solid var(--fui-colorNeutralStrokeAccessible);

			font-size: 12px;
			height: 16px;
			width: 16px;
			visibility: visible;
		}

		.selectedMultiselectCheck {
			background-color: var(--fui-colorCompoundBrandBackground);
			color: var(--fui-colorNeutralForegroundInverted);
			border-color: var(--fui-colorCompoundBrandBackground);
		}

		.checkDisabled {
			color: var(--fui-colorNeutralForegroundDisabled);

			@media (forced-colors: active) {
				color: GrayText;
			}
		}
	}
</style>
