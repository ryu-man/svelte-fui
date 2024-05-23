<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-dialog-body body-1 box-border min-h-[32px] overflow-y-auto px-6', klass)}>
	<slot />
</div>
