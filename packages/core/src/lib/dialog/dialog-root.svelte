<script lang="ts">
	import { tick } from 'svelte';
	import { getBackdropContext, getFluentRootContext } from '@svelte-fui/core';
	import { portal } from '@svelte-fui/core/actions/portal';
	import { classnames } from '@svelte-fui/core/internal';
	import { nanoid } from 'nanoid';
	import type { DialogRootProps } from './types';
	import { dialogNamespace, setDialogContext, type DialogContext } from './context';
	import { fid } from '../internal/utils';
	import { mount } from '../actions/dom';

	const context_root = getFluentRootContext();
	const element_overlay = $derived(context_root?.derived?.elements?.layouts?.['overlay']?.element);

	const backdrop_context = getBackdropContext();

	const backdrop_id = nanoid(8);

	let {
		class: klass = '',
		type = 'modal',
		open = $bindable(false),
		element = $bindable(undefined),
		onchange,
		onbackdropclick,
		children,
		...restProps
	}: DialogRootProps = $props();

	const context_state: DialogContext['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: DialogContext['derived'] = $derived({
		data: {
			open,
			type
		},
		elements: {
			root: context_state.elements.root,
			header: context_state.elements.header,
			body: context_state.elements.body,
			footer: context_state.elements.footer
		}
	});

	const context_dropdown = setDialogContext({
		id: fid(dialogNamespace),
		type: 'dialog',
		get state() {
			return context_state;
		},
		get derived() {
			return context_derived;
		},
		methods: {
			open: () => {
				open = true;
			},
			close: () => {
				open = false;
			},
			toggle: () => {
				open = !open;
			}
		}
	});

	$effect(() => onchange?.({ open, type }));

	const is_modal = $derived(type === 'modal');

	$effect(() => {
		if (is_modal && open) {
			tick().then(() => backdrop_context.openBackdrop(backdrop_id));
		} else {
			backdrop_context.closeBackdrop(backdrop_id);
		}
	});

	$effect(() => {
		document.addEventListener('keyup', dismiss_dialog_on_escape);

		return () => {
			document.removeEventListener('keyup', dismiss_dialog_on_escape);
		};
	});

	function onclick_dismiss_dialog(ev: Event) {
		if (ev.currentTarget !== ev.target) {
			return;
		}

		// dispatch('backdrop-click', { open, type });
		onbackdropclick?.({ open, type });

		if (type === 'alert') return;

		open = false;
	}

	function dismiss_dialog_on_escape(e: KeyboardEvent) {
		if (type === 'alert' || !(e.key === 'Escape')) return;

		open = false;
	}
</script>

{#if element_overlay}
	{#if open}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fui-dialog pointer-events-auto h-full w-full"
			use:mount={(node) => {
				context_state.elements.root = node;
				element = node;
			}}
			use:portal={{ target: element_overlay }}
			onclick={onclick_dismiss_dialog}
			onkeyup={() => {}}
		>
			<div
				class={classnames(
					'fui-dialog-surface bg-neutral-background-1 text-neutral-foreground-1 border-transparent-stroke border-thin shadow-64 m-auto box-border gap-2 rounded-xl',
					klass
				)}
				{...restProps}
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

				{@render children?.({ context: context_dropdown })}

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
