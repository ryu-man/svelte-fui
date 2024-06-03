<script lang="ts">
	import { Dropdown } from '@svelte-fui/core/dropdown';
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<Dropdown.Menu class={classnames('menu-button-menu', klass)}>
	<slot />
</Dropdown.Menu>
