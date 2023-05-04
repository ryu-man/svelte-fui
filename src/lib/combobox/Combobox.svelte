<script lang="ts">
	import Portal from 'svelte-portal';
	import { Icon, Input, getFluentAppContext } from 'svelte-fui';
	import { ChevronDownRegular } from 'svelte-fui/icons';
	import { classnames } from 'svelte-fui/internal';
	import ComboboxListbox from './ComboboxListbox.svelte';
	import { setComboboxContext } from './context';

	export let appearance: 'outline' | 'underline' | 'filled-darker' | 'filled-lighter' = 'outline';
	export let id: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled = false;
	export let collapsed = true;
	// export let multiselect = false;
	export let value: any = '';
	export let text = '';

	let element: HTMLDivElement;

	const { selectedId$, selectedValue$ } = setComboboxContext({
		onOptionClick
	});
	const { themeElement$ } = getFluentAppContext();

	function mount(node: HTMLDivElement) {
		function onOptionClickHandler(e: CustomEvent<string>) {
			e.stopPropagation();
			const detail = e.detail;
			console.log('hello world!');
		}

		console.log('combobox mount...');
		node.addEventListener('option-click', onOptionClickHandler);

		return {
			destroy() {
				node.removeEventListener('option-click', onOptionClickHandler);
			}
		};
	}

	function onClickHandler(e: Event) {
		if (disabled) return;
		collapsed = !collapsed;
		// request focus on the input element when the list is opened
		if (!collapsed) {
			const inputElement = (e.currentTarget as HTMLDivElement).querySelector("input") as HTMLInputElement;
			inputElement?.focus()
		}
	}

	function onOptionClick({ id, value, selected }) {
		collapsed = true;
	}
</script>

<div
	bind:this={element}
	use:mount
	class={classnames('fui-combobox', appearance, size, { disabled })}
	on:click={onClickHandler}
	on:keypress={() => {}}
>
	<input
		role="combobox"
		aria-controls=""
		aria-expanded="false"
		type="text"
		aria-labelledby="combo-default28"
		{placeholder}
		class={classnames('fui-combobox__input', size)}
		value={$selectedValue$}
	/>

	<Icon
		class="fui-combobox__expandIcon"
		ariaExpanded={false}
		role="button"
		ariaLabel="Open"
		id="combobox-31-chevron"
		ariaLabelledby="combobox-31-chevron combo-default28"
		src={ChevronDownRegular}
	/>

	<Portal target={$themeElement$}>
		{#if element}
			<ComboboxListbox
				left={element.clientLeft + 'px'}
				top={element.clientTop + element.clientHeight + 1 + 'px'}
				{collapsed}
			>
				<slot />
			</ComboboxListbox>
		{/if}
	</Portal>
</div>

<style lang="postcss">
	.fui-combobox {
		--fui-field-height-sm: 22px;
		--fui-field-height-md: 30px;
		--fui-field-height-lg: 38px;

		@apply relative box-border items-center justify-between rounded-md;

		background-color: var(--fui-colorNeutralBackground1);

		column-gap: theme(spacing.xxs);
		display: inline-grid;
		grid-template-columns: 1fr auto;
		min-width: 250px;

		/* windows high contrast mode focus indicator */
		&:focus-within {
			outline-width: 2px;
			outline-style: solid;
			outline-color: transparent;
		}

		/* bottom focus border, shared with Input, Select, and SpinButton */
		&::after {
			@apply absolute box-border delay-accelerate-mid duration-ultra-fast;
			content: '';
			left: -1px;
			bottom: -1px;
			right: -1px;
			height: max(2px, theme(borderRadius.md));
			border-bottom-left-radius: theme(borderRadius.md);
			border-bottom-right-radius: theme(borderRadius.md);
			border-bottom: theme(borderWidth.thick) solid var(--fui-colorCompoundBrandStroke);
			/* ...shorthands.borderBottom(tokens.strokeWidthThick, 'solid', tokens.colorCompoundBrandStroke); */
			clip-path: inset(calc(100% - 2px) 0 0 0);
			transform: scaleX(0);
			transition-property: transform;

			@media screen and (prefers-reduced-motion: reduce) {
				transition-duration: 0.01ms;
				transition-delay: 0.01ms;
			}
		}

		&:focus-within::after {
			@apply delay-decelerate-mid duration-normal;

			transform: scaleX(1);
			transition-property: transform;

			@media screen and (prefers-reduced-motion: reduce) {
				transition-duration: 0.01ms;
				transition-delay: 0.01ms;
			}
		}

		&:focus-within:active::after {
			border-bottom-color: var(--fui-colorCompoundBrandStrokePressed);
		}

		/* size variants */
		&.sm {
			padding-right: theme(spacing.sNudge);
		}
		&.md {
			padding-right: theme(spacing.mNudge);
		}
		&.lg {
			column-gap: theme(spacing.sNudge);
			padding-right: theme(spacing.m);
		}

		/* appearance variants */
		&.outline {
			@apply outline-none;
			background-color: var(--fui-colorNeutralBackground1);
			border: theme(borderWidth.thin) solid var(--fui-colorNeutralStroke1);
			border-bottom-color: var(--fui-colorNeutralStrokeAccessible);

			/* outlineInteractive */
			&:not(.disabled) {
				&:hover {
					border-color: var(--fui-colorNeutralStroke1Hover);
					border-bottom-color: var(--fui-colorNeutralStrokeAccessible);
				}

				&:active {
					border-color: var(--fui-colorNeutralStroke1Pressed);
					border-bottom-color: var(--fui-colorNeutralStrokeAccessible);
				}
			}
		}

		/* &.outlineInteractive {
		} */

		&.underline {
			@apply rounded-none;
			background-color: var(--fui-colorTransparentBackground);
			border-bottom: theme(borderWidth.thin) solid var(--fui-colorNeutralStrokeAccessible);
		}

		&.filled-lighter {
			background-color: var(--fui-colorNeutralBackground1);
			border: theme(borderWidth.thin) solid var(--fui-colorTransparentStroke);
		}

		&.filled-darker {
			background-color: var(--fui-colorNeutralBackground3);
			border: theme(borderWidth.thin) solid var(--fui-colorTransparentStroke);
		}
		&.invalid {
			&:not(:focus-within),
			&:hover:not(:focus-within) {
				border-color: var(--fui-colorPaletteRedBorder2);
			}

			/* invalidUnderline */
			&.underline {
				&:not(:focus-within),
				&:hover:not(:focus-within) {
					border-bottom-color: var(--fui-colorPaletteRedBorder2);
				}
			}
		}
		/* &.invalidUnderline {
		} */

		&.disabled {
			@apply cursor-not-allowed;
			background-color: var(--fui-colorTransparentBackground);
			border-color: var(--fui-colorNeutralStrokeDisabled);

			@media (forced-colors: active) {
				border-color: GrayText;
			}
		}
	}

	input {
		@apply rounded-none font-base;

		background-color: var(--fui-colorTransparentBackground);
		color: var(--fui-colorNeutralForeground1);

		&:focus {
			@apply outline-none;
		}

		&::placeholder {
			color: var(--fui-colorNeutralForeground4);
			opacity: 1;
		}

		/* size variants */
		&.sm {
			@apply caption-1;

			height: var(--fui-field-height-sm);
			padding: 0 0 0 calc(theme(spacing.sNudge) + theme(spacing.xxs));
		}
		&.md {
			@apply body-1;

			height: var(--fui-field-height-md);
			padding: 0 0 0 calc(theme(spacing.mNudge) + theme(spacing.xxs));
		}
		&.lg {
			@apply body-2;

			height: var(--fui-field-height-lg);
			padding: 0 0 0 calc(theme(spacing.m) + theme(spacing.sNudge));
		}
		&:disabled {
			color: var(--fui-colorNeutralForegroundDisabled);
			background-color: var(--fui-colorTransparentBackground);
			cursor: not-allowed;

			&::placeholder {
				color: var(--fui-colorNeutralForegroundDisabled);
			}
		}
	}

	.fui-combobox :global(.fui-icon) {
		@apply box-border block cursor-pointer text-base-500;

		color: var(--fui-colorNeutralStrokeAccessible);

		/* the SVG must have display: block for accurate positioning
		otherwise an extra inline space is inserted after the svg element */
		&svg {
			@apply block;
		}

		/* icon size variants */
		&.sm {
			--fui-icon-size: 16px;
			margin-left: theme(spacing.xxs);
		}

		&.md {
			--fui-icon-size: 20px;
			margin-left: theme(spacing.xxs);
		}

		&.lg {
			--fui-icon-size: 24px;
			margin-left: theme(spacing.sNudge);
		}

		&.disabled {
			color: var(--fui-colorNeutralForegroundDisabled);
			cursor: not-allowed;
		}
	}
</style>
