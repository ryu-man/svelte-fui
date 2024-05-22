<script lang="ts">
	import RootBackdrop from './root-backdrop.svelte';
	import { getFluentRootContext } from './root-context';

	const { overlayElement } = getFluentRootContext();
</script>

<div class="fui-overlay-container pointer-events-none absolute inset-0" style:z-index={2}>
	<RootBackdrop />

	<div class="fui-overlay w-full h-full" bind:this={$overlayElement} />
</div>
