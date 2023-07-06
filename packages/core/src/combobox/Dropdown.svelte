<script lang="ts">
	import { getFluentAppContext } from '@svelte-fui/core';
	import Portal from 'svelte-portal/src/Portal.svelte';
	import { classnames } from '../internal';
	import Listbox from './Listbox.svelte';
	import { setComboboxContext } from './context';

	const { appElement$ } = getFluentAppContext();

	export let appearance: 'outline' | 'underline' | 'filled-darker' | 'filled-lighter' = 'outline';
	export let id: string | undefined = undefined;
	export let placeholder: string | undefined = '';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let disabled = false;
	export let collapsed = true;
	// export let multiselect = false;
	export let value: any = '';
	export let text = '';
	let klass = '';
	export { klass as class };

	let element: HTMLDivElement;
	let invalid = false;

	const { selectedId$, selectedValue$, selectedData$ } = setComboboxContext({
		onOptionClick: onOptionClickHandler
	});

	selectedId$.set(value);

	$: value = $selectedId$;
	$: text = $selectedValue$;

	function onToggleListBoxHandler() {
		collapsed = !collapsed;
	}
	function onOptionClickHandler({ id, value, selected }) {
		collapsed = true;
	}
</script>

<div
	class={classnames(
		'fui-dropdown',
		appearance,
		{
			'outline-interactive': appearance === 'outline' && !disabled,
			invalid: invalid && appearance === 'outline',
			'invalid-underline': invalid && appearance === 'underline',
			disabled
		},
		klass
	)}
	bind:this={element}
>
	<button
		aria-expanded="false"
		role="combobox"
		type="button"
		aria-labelledby="dropdown-default4"
		class={classnames('fui-dropdown-button', { 'disabled-text': disabled }, size)}
		on:click={onToggleListBoxHandler}
	>
		{#if $selectedId$}
			<!-- content here -->
			<slot name="active-option" data={$selectedData$}>
				{$selectedValue$}
			</slot>
		{:else}
			<!-- else content here -->
			<div class="placeholder">
				<slot name="placeholder">
					{placeholder}
				</slot>
			</div>
		{/if}

		<span class="fui-dropdown-expand-icon">
			<svg fill="currentColor" class="" aria-hidden="true" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z"
					fill="currentColor"
				/>
			</svg>
		</span>
	</button>

	<Portal target={$appElement$}>
		{#if element}
			<Listbox reference={element} bind:collapsed>
				<slot />
			</Listbox>
		{/if}
	</Portal>
</div>

<style lang="postcss">
	.fui-dropdown {
		@apply relative box-border inline-block rounded-md;
		min-width: 250px;

		/* windows high contrast mode focus indicator */
		&:focus-within {
			outline-width: 2px;
			outline-style: solid;
			outline-color: transparent;
		}

		/* bottom focus border, shared with Input, Select, and SpinButton */
		&::after {
			@apply border-b-thick border-compound-brand-stroke absolute box-border border-solid;
			content: '';
			left: -1px;
			bottom: -1px;
			right: -1px;
			height: max(theme(borderWidth.thick), theme(borderRadius.md));
			border-bottom-left-radius: theme(borderRadius.md);
			border-bottom-right-radius: theme(borderRadius.md);
			clip-path: inset(calc(100% - 2px) 0 0 0);
			transform: scaleX(0);
			transition-property: transform;
			transition-duration: theme(transitionDuration.ultra-fast);
			transition-delay: theme(transitionTimingFunction.accelerate-mid);

			@apply motion-reduce:delay-[0.01ms] motion-reduce:duration-[0.01ms];

			/* @media screen and (prefers-reduced-motion: reduce) {
                transitionDuration: '0.01ms';
                transitionDelay: '0.01ms';
            } */
		}

		&:focus-within::after {
			transform: scaleX(1);
			transition-property: transform;
			transition-duration: theme(transitionDuration.normal);
			transition-delay: theme(transitionTimingFunction.accelerate-mid);

			@apply motion-reduce:delay-[0.01ms] motion-reduce:duration-[0.01ms];
			/* @media screen and (prefers-reduced-motion: reduce) {
                transitionDuration: '0.01ms';
                transitionDelay: '0.01ms';
            } */
		}

		&:focus-within:active::after {
			@apply border-b-compound-brand-stroke-pressed;
		}
	}

	button {
		@apply text-neutral-foreground-1 bg-transparent-background font-base box-border grid w-full cursor-pointer items-center justify-between border-0 text-left;

		column-gap: theme(spacing.xxs);
		grid-template-columns: [content] 1fr [icon] auto [end];

		&:focus {
			outline-style: none;
		}
	}

	.placeholder {
		@apply text-neutral-foreground-4;
	}

	/* size variants */
	.fui-dropdown-button.sm {
		@apply caption-1;
		padding: 3px theme(spacing.sNudge) 3px calc(theme(spacing.sNudge) + theme(spacing.xxs));
	}

	.fui-dropdown-button.md {
		@apply body-1;
		padding: 5px theme(spacing.mNudge) 5px calc(theme(spacing.mNudge) + theme(spacing.xxs));
	}

	.fui-dropdown-button.lg {
		@apply body-2;
		padding: 7px theme(spacing.m) 7px calc(theme(spacing.m) + theme(spacing.sNudge));
		column-gap: theme(spacing.sNudge);
	}

	/* appearance variants */
	.fui-dropdown.outline {
		@apply bg-neutral-background-1 border-thin border-neutral-stroke-1 border-b-neutral-stroke-accessible border-solid outline-none;
	}
	.fui-dropdown.outline-interactive {
		&:hover {
			@apply border-neutral-stroke-1-hover border-b-neutral-stroke-accessible;
		}

		&:active {
			@apply border-neutral-stroke-1-pressed border-b-neutral-stroke-accessible;
		}
	}
	.fui-dropdown.underline {
		@apply bg-transparent-background border-b-thin border-neutral-stroke-accessible rounded-none border-solid no-underline;
	}

	.fui-dropdown.filled-lighter {
		@apply bg-neutral-background-1 border-thin border-solid border-transparent;
	}

	.fui-dropdown.filled-darker {
		@apply bg-neutral-background-3 border-thin border-solid border-transparent;
	}

	.fui-dropdown.invalid {
		:not(:focus-within),
		:hover:not(:focus-within) {
			@apply border-b-palette-red-border-2;
		}
	}
	.fui-dropdown.invalid-underline {
		:not(:focus-within),
		:hover:not(:focus-within) {
			@apply border-b-palette-red-border-2;
		}
	}
	.fui-dropdown.disabled {
		@apply bg-transparent-background border-neutral-stroke-disabled cursor-not-allowed;

		@media (forced-colors: active) {
			border-color: graytext;
		}
	}

	.fui-dropdown.disabled-text {
		@apply text-neutral-foreground-disabled cursor-not-allowed;
	}
</style>
