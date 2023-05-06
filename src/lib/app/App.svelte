<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Theme } from 'svelte-fui/theme';
	import webLight from 'svelte-fui/theme/web/light';
	import { setFluentAppContext } from './context';
	import { applyTheme } from './utils';
	import './app.css';

	const dispatch = createEventDispatcher();

	export let theme: Theme = webLight;

	const { appElement$ } = setFluentAppContext();

	onMount(() => {
		function handler(e: MediaQueryListEvent) {
			dispatch('color-scheme-change', e.matches ? 'light' : 'dark');
		}

		const schemeMedia = matchMedia('(prefers-color-scheme: light)');

		schemeMedia.addEventListener('change', handler);

		return () => {
			schemeMedia.removeEventListener('change', handler);
		};
	});

	function theming(node: HTMLDivElement, theme: Theme) {
		const nodeHashedClassName = node.classList.item(node.classList.length - 1);
		const tag = document.createElement('style');
		tag.setAttribute('id', nodeHashedClassName);

		node.prepend(tag);

		applyTheme(node, tag, theme);

		return {
			update(theme: Theme) {
				applyTheme(node, tag, theme);
			}
		};
	}
</script>

<div class="fui-app" bind:this={$appElement$} use:theming={theme}>
	<slot />
</div>

<style lang="postcss">
	:global(html, body) {
		width: 100%;
		height: 100%;
	}
	.fui-app {
		@apply body-1 relative bg-neutral-background-1 text-left text-neutral-foreground-1;

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
