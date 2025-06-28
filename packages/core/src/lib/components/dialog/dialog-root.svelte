<script lang="ts">
	import { tick } from 'svelte';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { portal } from '@svelte-fui/core/actions/portal';
	import { classnames } from '@svelte-fui/core/internal';
	import { nanoid } from 'nanoid';
	import type { DialogRootProps } from './types';
	import { dialogNamespace, setDialogContext, type DialogContext } from './context';
	import { fid } from '@svelte-fui/core/internal/utils';
	import { mount } from '@svelte-fui/core/actions/dom';
	import { setLayerContext } from '../app/layer/context';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	const rootContext = getFluentRootContext();

	const targetLayer = $derived(rootContext.state.layers.get('l1'));
	const overlayElement = $derived(targetLayer?.context.state.dom.inner);

	// const backdropContext = getBackdropContext();

	if (!targetLayer) {
		throw new Error('default layer context not found!');
	}

	setLayerContext(targetLayer.context);

	let {
		class: klass = '',
		type = 'modal',
		open = $bindable(false),
		element = $bindable(undefined),
		children = undefined,
		ref = undefined,
		onchange,
		onbackdropclick,
		...restProps
	}: DialogRootProps = $props();

	const contextState: DialogContext['state'] = $state({
		data: {},
		elements: {}
	});

	const contextDerived: DialogContext['derived'] = $derived({
		data: {
			open,
			type
		},
		elements: {
			root: contextState.elements.root,
			header: contextState.elements.header,
			body: contextState.elements.body,
			footer: contextState.elements.footer
		}
	});

	const contextDropdown = setDialogContext({
		id: fid(dialogNamespace),
		type: 'dialog',
		get state() {
			return contextState;
		},
		get derived() {
			return contextDerived;
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

	const isModal = $derived(type === 'modal');

	$effect(() => {
		if (isModal && open) {
			targetLayer?.context.methods.openBackdrop();
		} else {
			targetLayer?.context.methods.closeBackdrop();
		}
	});

	$effect(() => {
		document.addEventListener('keyup', dismissDialogOnEscape);

		return () => {
			document.removeEventListener('keyup', dismissDialogOnEscape);

			targetLayer?.context.methods.closeBackdrop();
		};
	});

	function onclickDismissDialog(ev: Event) {
		if (ev.currentTarget !== ev.target) {
			return;
		}

		// dispatch('backdrop-click', { open, type });
		onbackdropclick?.({ open, type });

		if (type === 'alert') return;

		open = false;
	}

	function dismissDialogOnEscape(e: KeyboardEvent) {
		if (type === 'alert' || !(e.key === 'Escape')) return;

		open = false;
	}
</script>

{#if overlayElement}
	{#if open}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="fui-dialog pointer-events-auto h-full w-full"
			use:mount={(node) => {
				contextState.elements.root = node;
				element = node;
			}}
			use:portal={{ target: overlayElement }}
			onclick={onclickDismissDialog}
			onkeyup={() => {}}
		>
			<div
				use:reference={ref}
				class={classnames(
					'fui-dialog-surface bg-neutral-background-1 text-neutral-foreground-1 border-transparent-stroke border-thin shadow-64 m-auto box-border gap-2 rounded-xl absolute inset-0  flex flex-col',
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

				{@render children?.({ context: contextDropdown })}

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
		--dialog-height: 98vh;

		height: fit-content;
		max-width: 600px;
		max-height: var(--dialog-height);
	}
</style>
