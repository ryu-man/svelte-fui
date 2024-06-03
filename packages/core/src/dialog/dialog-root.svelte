<script lang="ts">
	import { createEventDispatcher, onMount, tick } from 'svelte';
	import { getBackdropContext, getFluentRootContext } from '@svelte-fui/core';
	import { portal } from '@svelte-fui/core/actions/portal';
	import { classnames } from '@svelte-fui/core/internal';
	import { nanoid } from 'nanoid';
	import type { DialogProps } from './types';

	type $$Props = DialogProps;

	const dispatch = createEventDispatcher();

	const { layouts } = getFluentRootContext();
	const backdrop_context = getBackdropContext();

	const backdrop_id = nanoid(8);

	export let open: $$Props['open'] = false;
	export let type: $$Props['type'] = 'modal';
	let klass: $$Props['class'] = '';
	export { klass as class };

	$: dispatch('change', open);

	$: is_modal = type === 'modal';

	$: if (is_modal && open) {
		tick().then(() => backdrop_context.openBackdrop(backdrop_id));
	} else {
		backdrop_context.closeBackdrop(backdrop_id);
	}

	onMount(() => {
		document.addEventListener('keyup', dismiss_dialog_on_escape);

		return () => {
			document.removeEventListener('keyup', dismiss_dialog_on_escape);
		};
	});

	function onclick_dismiss_dialog(ev: Event) {
		if (ev.currentTarget !== ev.target) {
			return;
		}

		dispatch('backdrop-click', { open, type });

		if (type === 'alert') return;

		open = false;
	}

	function dismiss_dialog_on_escape(e: KeyboardEvent) {
		if (type === 'alert' || !(e.key === 'Escape')) return;

		open = false;
	}
</script>

{#if $layouts['overlay'].element}
	{#if open}
		<div
			class="fui-dialog pointer-events-auto h-full w-full"
			use:portal={{ target: $layouts['overlay'].element }}
			on:click={onclick_dismiss_dialog}
			on:keyup={() => {}}
		>
			<div
				class={classnames(
					'fui-dialog-surface bg-neutral-background-1 text-neutral-foreground-1 border-transparent-stroke border-thin shadow-64 m-auto box-border gap-2 rounded-xl',
					klass
				)}
				{...$$restProps}
				tabindex="-1"
				aria-modal="true"
				role="dialog"
				data-tabster=""
			>
				<!-- <i
					 tabindex="0"
					 role="none"
					 data-tabster-dummy=""
					 aria-hidden="true"
					 style="position: fixed; height: 1px; width: 1px; opacity: 0.001; z-index: -1; content-visibility: hidden; top: 0px; left: 0px;"
				 /> -->

				<slot />

				<!-- <i
					 tabindex="0"
					 role="none"
					 data-tabster-dummy=""
					 aria-hidden="true"
					 style="position: fixed; height: 1px; width: 1px; opacity: 0.001; z-index: -1; content-visibility: hidden; top: 0px; left: 0px;"
				 /> -->
			</div>
		</div>
	{/if}
{/if}

<style lang="postcss">
	.fui-dialog-surface {
		@apply absolute inset-0  flex flex-col;

		--dialog-height: 98vh;

		height: fit-content;
		max-width: 600px;
		max-height: var(--dialog-height);
	}
</style>
