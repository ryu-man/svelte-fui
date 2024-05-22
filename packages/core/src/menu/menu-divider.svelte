<script lang="ts">
	import { Divider } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<Divider class={classnames('fui-menu-divider py-1', klass)} />
