<script lang="ts">
	import Portal from 'svelte-portal/src/Portal.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { getFluentRootContext } from '../app';

	const dispatch = createEventDispatcher();
	const { appElement$ } = getFluentRootContext();

	export let open = false;
	export let type: 'modal' | 'non-modal' | 'alert' = 'modal';

	$: dispatch('change', open);

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

<Portal target={$appElement$}>
	{#if open}
		{#if type === 'modal'}
			<div aria-hidden="true" class="fui-dialog-surface-backdrop" on:click={onclick_dismiss_dialog} />
		{/if}

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
</Portal>

<style lang="postcss">
	.fui-dialog-surface-backdrop {
		@apply fixed inset-0;

		background-color: rgba(0, 0, 0, 0.4);
	}

	.fui-dialog-surface {
		@apply bg-neutral-background-1 text-neutral-foreground-1 border-transparent-stroke border-thin absolute inset-0 m-auto box-border block select-none rounded-xl p-6;

		--dialog-height: 98vh;

		user-select: unset;
		visibility: unset;
		overflow: unset;

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.4);
		}
		position: fixed;
		height: fit-content;
		max-width: 600px;
		max-height: var(--dialog-height);
		box-shadow: theme(boxShadow.64);
	}
	.fui-dialog-surface :global(.fui-dialog-title) {
	}
</style>
