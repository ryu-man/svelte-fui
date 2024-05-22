<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { readonly, writable } from 'svelte/store';
	import type { Theme } from '@svelte-fui/theme';
	import { webLightTheme } from '@svelte-fui/themes';
	import { type BackdropContext, setBackdropContext } from './backdrop-context';
	import { setFluentRootContext } from './root-context';
	import RootOverlay from './root-overlay.svelte';
	import './root.css';
	import { applyTheme } from './utils';

	const dispatch = createEventDispatcher();

	export let theme: Theme = webLightTheme;
	export let screens: Record<string, string> = {};

	const backdrop_context: BackdropContext = setBackdropContext({
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

	const screens_store = writable(screens);
	$: screens_store.set(screens);

	const active_screen_store = writable<[string, string]>(['xs', '0px']);

	const { appElement$, rootElement } = setFluentRootContext({
		activeScreen: readonly(active_screen_store),
		screens: readonly(screens_store),
		rootElement: writable(),
		overlayElement: writable(),
		appElement$: writable()
	});

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

<div class="fui-root" bind:this={$rootElement} use:theming={theme}>
	<slot />

	<RootOverlay />
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
