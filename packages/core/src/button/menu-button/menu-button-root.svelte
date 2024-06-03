<script lang="ts">
	import { Button } from '@svelte-fui/core/button';
	import { Dropdown } from '@svelte-fui/core/dropdown';
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<Dropdown.Root class={classnames('menu-button-root', klass)}>
	<slot />
</Dropdown.Root>
