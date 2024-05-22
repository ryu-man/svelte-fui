<script lang="ts">
	import { Divider } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<div class={classnames('fui-menu-group', 'first:rounded-t-inherit last:rounded-b-inherit', klass)} role="group">
	<slot />
</div>
