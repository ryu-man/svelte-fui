<script lang="ts">
	import { circOut } from 'svelte/easing';
	import { Layout } from '@svelte-fui/core';
	import { animate } from '@svelte-fui/core/actions/animation';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { getBackdropContext } from './backdrop-context';

	const { open } = getBackdropContext();
</script>

<Layout id="backdrop" class="z-10">
	<div
		class="fui-backdrop bg-neutral-background-2 pointer-events-none h-full w-full"
		use:animate={{ opacity: +$open, duration: DURATION.DRAGGING / 1000, ease: circOut }}
	></div>
</Layout>
