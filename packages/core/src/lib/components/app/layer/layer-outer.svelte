<script lang="ts">
	import { nanoid } from 'nanoid';
	import { getFluentRootContext } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import type { LayoutOuterProps } from './types';
	import { setLayerContext, type LayerContext, type LayerState } from './context';
	import { defineProperty, defineState } from '@svelte-fui/core/internal/context';
	import { animate } from '@svelte-fui/core/actions/animation.svelte';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { circOut } from 'svelte/easing';

	const contextRoot = getFluentRootContext();

	let {
		element = $bindable(),
		class: klass = '',
		id = nanoid(8),
		children
	}: LayoutOuterProps = $props();

	let isBackdropOpen = $state(false);
	let blur = $state(0);
	let opacity = $state(0.25);

	let dom: LayerState['dom'] = $state({});

	const getElement = () => element;
	const setElement = (el: HTMLElement) => (dom.outer = element = el);

	const contextState = defineState<LayerState>([
		(o) => defineProperty(o, 'dom', () => dom),
		(o) => defineProperty(o, 'id', () => id)
	]);

	const context: LayerContext = {
		id,
		type: 'layer',
		parent: () => undefined,
		update: (fn) => {
			fn(contextState);
		},
		get state() {
			return contextState;
		},
		methods: {
			openBackdrop: () => {
				isBackdropOpen = true;
			},
			closeBackdrop: () => {
				isBackdropOpen = false;
			}
		}
	};

	const layer = {
		id,
		get context() {
			return context;
		}
	};

	contextRoot.methods.setLayer(id, layer);

	setLayerContext(context);
</script>

<div
	bind:this={getElement, setElement}
	use:animate={() => ({
		backgroundColor: `rgb(0 0 0 / ${opacity * +isBackdropOpen})`,
		backdropFilter: `blur(${blur * +isBackdropOpen}px)`,
		duration: DURATION.SMOOTH / 1000,
		ease: circOut,
		willChange: 'background-color, backdrop-filter'
	})}
	class={classnames(
		'fui-layer-outer overflow-hidden bg-transparent',
		klass,
		'pointer-events-none absolute inset-0'
	)}
	data-id={id}
>
	{@render children?.()}
</div>
