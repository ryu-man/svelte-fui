<script lang="ts">
	import { tick } from 'svelte';
	import { writable } from 'svelte/store';
	import { nanoid } from 'nanoid';
	import { Layout } from '@svelte-fui/core';
	import type { Theme } from '@svelte-fui/theme';

	import { setBackdropContext } from './backdrop-context';
	import RootBackdropLayer from './layer-backdrop.svelte';
	import { setFluentRootContext, type FluentRootContext } from './root-context';
	import { applyTheme } from './utils';
	import type { RootProps } from './types';

	let { screens = {}, theme, children }: RootProps = $props();

	let viewport = $state({
		width: 0,
		height: 0
	});

	setBackdropContext({
		dependencies: new Set(),
		open: writable(false),
		openBackdrop(id) {
			this.dependencies.add(id);
			this.open.set(true);
		},
		closeBackdrop(id) {
			this.dependencies.delete(id);
			if (this.dependencies.size === 0) {
				this.open.set(false);
			}
		}
	});

	const context_state: FluentRootContext['state'] = $state({
		data: {
			screens: {}
		},
		elements: {
			layouts: {}
		}
	});

	const context_derived: FluentRootContext['derived'] = $derived({
		data: {
			screens: {
				all: screens,
				active: screen(screens, viewport)
			}
		},
		elements: {
			root: context_state.elements.root,
			app: context_state.elements.app,
			layouts: { ...context_state.elements.layouts }
		}
	});

	const context_root = setFluentRootContext({
		id: nanoid(),
		type: 'root',
		get state() {
			return context_state;
		},
		get derived() {
			return context_derived;
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

	function theming(node: HTMLDivElement, theme: Theme) {
		const node_hashed_classname = node.classList.item(node.classList.length - 1);

		const tag = document.createElement('style');
		tag.setAttribute('id', node_hashed_classname);

		node.prepend(tag);

		applyTheme(node, tag, theme);

		return {
			update(theme: Theme) {
				applyTheme(node, tag, theme);
			}
		};
	}
</script>

<div class="fui-root" bind:this={context_state.elements.root} use:theming={theme}>
	{#await tick() then _}
		<!-- promise was fulfilled -->
		{@render children?.({ context: context_root })}
	{/await}

	<RootBackdropLayer />
	
	<Layout id="overlay" class="z-10" />
	<Layout id="toasts" class="z-10" />
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
