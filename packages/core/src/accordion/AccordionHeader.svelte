<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { classnames } from '../internal';
	import { getAccordionContext, getAccordionItemContext } from './context';

	export let icon = false;
	export let inline = false;
	export let disabled = false;
	export let size: 'sm' | 'lg' | 'xl' | undefined = undefined;
	export let position: 'start' | 'end' = 'start';
	export let as: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'div';
	let klass = '';
	export { klass as class };

	const { selectedData$, selectedValue$, collapsible$ } = getAccordionContext();
	const { active$ } = getAccordionItemContext();
	const rotate$ = tweened(+$active$, { duration: 100 });
	$: rotate$.set(+$active$);

	function dispatchTriggerEventHandler(e: Event) {
		if (disabled) return;

		const currentTarget = e.currentTarget as HTMLDivElement;
		const event = new CustomEvent('accordion-header-click', {
			bubbles: true
		});
		currentTarget.dispatchEvent(event);
	}
</script>

<svelte:element this={as} class="fui-accordion-header" class:disabled class:inline>
	<button
		class={classnames('fui-accordion-header-button', position, size, { icon, inline }, klass)}
		aria-expanded="false"
		type="button"
		on:click={dispatchTriggerEventHandler}
		on:keyup={() => {}}
		on:click
	>
		{#if position === 'start'}
			<!-- content here -->
			<span class={classnames('fui-accordion-header-expand-icon', position)} aria-hidden="true">
				<slot name="expand-icon">
					<svg
						class=""
						fill="currentColor"
						aria-hidden="true"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						style:transform="rotate({$rotate$ * 90}deg)"
					>
						<path
							d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"
							fill="currentColor"
						/>
					</svg>
				</slot>
			</span>
		{/if}

		{#if $$slots.icon}
			<!-- content here -->
			<span class="icon">
				<slot name="icon" />
			</span>
		{/if}

		<slot />

		{#if position === 'end'}
			<!-- content here -->
			<span class={classnames('fui-accordion-header-expand-icon', position)} aria-hidden="true">
				<slot name="expand-icon">
					<svg
						class=""
						fill="currentColor"
						aria-hidden="true"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						style="transform: rotate(0deg);"
					>
						<path
							d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"
							fill="currentColor"
						/>
					</svg>
				</slot>
			</span>
		{/if}
	</button>
</svelte:element>

<style lang="postcss">
	.fui-accordion-header {
		@apply text-neutral-foreground-1 bg-transparent-background m-0 rounded-md;

		&.disabled {
			@apply text-neutral-foreground-disabled;
			background-image: none;
		}
		&.inline {
			@apply inline-block;
		}
	}

	button {
		@apply pr-m pl-mNudge body-1 relative box-border flex w-full cursor-pointer items-center border border-solid border-transparent pb-0 pt-0;

		min-height: 44px;

		&.sm {
			@apply text-base-200;
			min-height: 32px;
		}
		&.lg {
			@apply text-base-400 leading-base-400;
		}
		&.xl {
			@apply text-base-500 leading-base-500;
		}

		&.inline {
			@apply inline-flex;
		}

		&.end:not(.icon) {
			@apply pl-m;
		}
		&.end.icon {
			@apply pr-mNudge;
		}
	}

	.fui-accordion-header-expand-icon {
		@apply leading-base-500 text-base-500 flex h-full items-center;

		&.start {
			@apply pr-s;
		}
		&.end {
			@apply pl-s flex justify-end;
			flex-grow: 1;
			flex-shrink: 1;
			flex-basis: 0%;
		}
	}
	.fui-accordion-header :global(.icon) {
		@apply pr-s leading-base-500 text-base-500 flex h-full items-center;
	}
</style>
