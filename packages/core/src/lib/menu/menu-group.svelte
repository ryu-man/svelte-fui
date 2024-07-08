<script lang="ts">
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuGroupProps } from './types';

	type $$Props = MenuGroupProps;

	let klass: $$Props['class'] = '';
	export { klass as class };
</script>

<div class={classnames('fui-menu-group', 'first:rounded-t-inherit last:rounded-b-inherit', klass)} role="group">
	<slot />
</div>
