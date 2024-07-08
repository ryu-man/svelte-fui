<script lang="ts">
	import { Dropdown } from '@svelte-fui/core/dropdown';
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<Dropdown.Item class={classnames('menu-button-item', klass)} value="">
	<slot />
</Dropdown.Item>
