<script lang="ts">
	import { tick } from 'svelte';
	import { nanoid } from 'nanoid';
	import { Layer } from './layer';
	import type { Theme } from '@svelte-fui/theme';

	import { setFluentRootContext, type RootState } from './context';
	import { applyTheme } from './utils';
	import type { RootProps } from './types';
	import { classnames } from '../internal';
	import { defineProperty, defineState } from '../internal/context';
	import { SvelteMap } from 'svelte/reactivity';

	let { class: klass = '', screens = {}, theme, children }: RootProps = $props();

	let viewport = $state({
		width: 0,
		height: 0
	});

	let dom: RootState['dom'] = $state({});
	let layers: RootState['layers'] = new SvelteMap<string, any>();

	const activeScreen = $derived(screen(screens, viewport));

	const contextState = defineState<RootState>([
		(o) => defineProperty(o, 'dom', () => dom),
		(o) => defineProperty(o, 'viewport', () => viewport),
		(o) => defineProperty(o, 'screens', () => ({ all: screens, active: activeScreen })),
		(o) => defineProperty(o, 'layers', () => layers)
	]);

	const contextRoot = setFluentRootContext({
		id: nanoid(),
		type: 'root',
		parent() {
			return undefined;
		},
		update(fn) {},

		get state() {
			return contextState;
		},
		methods: {
			getLayer: (id) => layers.get(id),
			setLayer: (id, context) => {
				layers.set(id, context);
				return context;
			}
		}
	});

	$effect(() => {
		const onresize = () => {
			viewport = {
				height: window.visualViewport?.height ?? 0,
				width: window.visualViewport?.width ?? 0
			};
		};

		window.addEventListener('resize', onresize);

		onresize();

		return () => {
			window.removeEventListener('resize', onresize);
		};
	});

	function screen(screens: Record<string, string>, viewport: { width: number; height: number }) {
		const arr = Object.entries(screens)
			.map(([key, value]) => {
				return [key, parseInt(value)] as [string, number];
			})
			.sort((a, b) => a[1] - b[1]);

		if (!arr.length) {
			return undefined;
		}

		const screen = arr.filter((d) => d[1] < viewport.width).at(-1) ?? arr[0];

		const data = {
			name: screen[0],
			width: screen[1]
		};

		return data;
	}

	function theming(node: HTMLDivElement, theme?: Theme) {
		const classname = node.classList.item(node.classList.length - 1);

		const tag = document.createElement('style');
		tag.setAttribute('id', classname ?? '');

		node.prepend(tag);

		// applyTheme(node, tag, theme);

		$effect(() => {
			if (theme) {
				applyTheme(node, tag, theme);
			}
		});
	}
</script>

<div class={classnames('fui-root', klass)} bind:this={contextState.dom.root} use:theming={theme}>
	{#await tick() then _}
		<!-- promise was fulfilled -->
		{@render children?.({ context: contextRoot })}
	{/await}

	<!-- <RootBackdropLayer /> -->

	<Layer.Outer id="overlay" class="z-10">
		<Layer.Inner></Layer.Inner>
	</Layer.Outer>

	<Layer.Outer id="toasts" class="z-20">
		<Layer.Inner></Layer.Inner>
	</Layer.Outer>
</div>

<style lang="postcss">
	:global(html, body) {
		width: 100%;
		height: 100%;
	}
	.fui-root {
		@apply body-1 bg-neutral-background-1 text-neutral-foreground-1 relative text-left;

		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	/* Reduced Motion Support */
	@media (prefers-reduced-motion: reduce) {
		.fluent-app {
		}
	}
</style>
