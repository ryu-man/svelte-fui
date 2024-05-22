<script lang="ts">
	import { circOut } from 'svelte/easing';
	import { animate } from '@svelte-fui/core/actions/animation';
	import { DURATION } from '@svelte-fui/core/internal/transition';
	import { getBackdropContext } from './backdrop-context';

	const { open } = getBackdropContext();
</script>

<div
	class="fui-backdrop bg-neutral-background-2 pointer-events-none absolute inset-0"
	use:animate={{ opacity: +$open, duration: DURATION.DRAGGING / 1000, ease: circOut }}
/>
