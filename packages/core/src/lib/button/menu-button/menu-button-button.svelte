<script lang="ts">
	import { Button } from '@svelte-fui/core/button';
	import { classnames } from '@svelte-fui/core/internal';
	import { getMenuContext } from '@svelte-fui/core/menu';

	const context_menu = getMenuContext();

	let { class: klass = '', children, onclick, ...restProps } = $props();

	function onclick_(ev: Event) {
		onclick?.(ev);

		if (ev.defaultPrevented) {
			return;
		}

		context_menu.methods.toggle();
	}
</script>

<Button
	bind:element={context_menu.state.elements.trigger}
	class={classnames('menu-button-trigger', klass)}
	{...restProps}
	onclick={onclick_}
>
	{#snippet children({ hover })}
		{@render children?.({ hover })}
		<!-- <Popover.Indicator class="aspect-square h-full p-1" /> -->
	{/snippet}
</Button>
