<script lang="ts">
	import { createEventDispatcher, onMount, tick } from 'svelte';
	import { getBackdropContext, getFluentRootContext } from '@svelte-fui/core';
	import { portal } from '@svelte-fui/core/actions/portal';
	import { nanoid } from 'nanoid';

	const dispatch = createEventDispatcher();

	const { overlayElement } = getFluentRootContext();
	const backdrop_context = getBackdropContext();

	const backdrop_id = nanoid(8);

	export let open = false;
	export let type: 'modal' | 'non-modal' | 'alert' = 'modal';

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

	function onclick_dismiss_dialog() {
		dispatch('backdrop-click', { open, type });

		if (type === 'alert') return;

		open = false;
	}

	function dismiss_dialog_on_escape(e: KeyboardEvent) {
		if (type === 'alert' || !(e.key === 'Escape')) return;

		open = false;
	}
</script>

{#if $overlayElement}
	<div class="fui-dialog w-full h-full pointer-events-auto" use:portal={{ target: $overlayElement }}>
		{#if open}
			<div tabindex="-1" aria-modal="true" role="dialog" aria-labelledby="dialog-title-277" data-tabster="" class="fui-dialog-surface">
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
		{/if}
	</div>
{/if}

<style lang="postcss">
	.fui-dialog-surface {
		@apply bg-neutral-background-1 text-neutral-foreground-1 border-transparent-stroke border-thin absolute inset-0 m-auto box-border grid select-none rounded-xl;

		--dialog-height: 98vh;

		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas: 'header' 'body' 'actions';

		user-select: unset;
		visibility: unset;
		overflow: unset;

		position: fixed;
		height: fit-content;
		max-width: 600px;
		max-height: var(--dialog-height);
		box-shadow: theme(boxShadow.64);

		gap: 8px;
	}
	.fui-dialog-surface :global(.fui-dialog-title) {
	}
</style>
