<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';

	export let position: 'start' | 'end' = 'end';
	export let fluid = false;

	let klass = '';
	export { klass as class };
</script>

<div
	class={classnames('fui-dialog-actions max-xs:flex-col max-xs:self-stretch box-border flex h-fit gap-2 px-6 pb-6', position, { fluid }, klass)}
>
	<slot />
</div>
