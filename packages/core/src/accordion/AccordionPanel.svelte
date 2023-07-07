<script lang="ts">
	import { slide } from 'svelte/transition';
	import { classnames } from '../internal';
	import { getAccordionItemContext } from './context';

	const { active$ } = getAccordionItemContext();

	let klass = '';
	export { klass as class };
</script>

{#if $active$}
	<!-- content here -->
	<div class={classnames('fui-accordion-panel', klass)} transition:slide={{ duration: 100 }}>
		<slot />
	</div>
{/if}

<style lang="postcss">
	.fui-accordion-panel {
		@apply m-m my-0;
	}
</style>
