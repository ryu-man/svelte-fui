<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Theme } from '@svelte-fui/theme';
	import { webLightTheme } from '@svelte-fui/themes';
	import { setFluentRootContext } from './context';
	import './root.css';
	import { applyTheme } from './utils';

	const dispatch = createEventDispatcher();

	export let theme: Theme = webLightTheme;

	const { appElement$ } = setFluentRootContext();

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

<div class="fui-root" bind:this={$appElement$} use:theming={theme}>
	<slot />
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
