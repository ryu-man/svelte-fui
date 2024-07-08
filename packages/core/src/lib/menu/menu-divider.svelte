<script lang="ts">
	import { Divider } from '@svelte-fui/core';
	import { classnames } from '@svelte-fui/core/internal';
	import type { MenuDividerProps } from './types';

	type $$Props = MenuDividerProps;

	let klass: $$Props['class'] = '';
	export { klass as class };
</script>

<Divider class={classnames('fui-menu-divider py-1', klass)} />
