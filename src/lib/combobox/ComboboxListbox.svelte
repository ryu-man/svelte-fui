<script lang="ts">
	import { fly } from 'svelte/transition';
	import { classnames } from 'svelte-fui/internal';

	export let top = '0px';
	export let left = '0px';
	export let width = '248px';
	export let collapsed = false;

	export let id: string | undefined = undefined;
</script>

<div
	{id}
	role="listbox"
	class={classnames('fui-listbox fui-combobox-listbox', { collapsed })}
	data-popper-placement="bottom-start"
	data-popper-is-intersecting=""
	style:width
	style:transform="translate3d({left}, {top}, 0px)"
	transition:fly={{ y: -16, duration: 100 }}
>
	<div class="flex flex-col">
		<slot />
	</div>
</div>

<style lang="postcss">
	.fui-combobox-listbox {
		@apply absolute box-border flex flex-col overflow-y-auto rounded-md shadow-16;

		top: 0px;
		left: 0px;

		background-color: var(--fui-colorNeutralBackground1);
		min-width: 160px;
		max-height: 80vh;
		outline: 1px solid var(--fui-colorTransparentStroke);
		padding: theme(spacing.xs);
		margin: 0;
		row-gap: theme(spacing.xxs);

		&.collapsed {
			display: none;
		}
	}
</style>
