<script lang="ts">
	import { Button } from '@svelte-fui/core/button';
	import { Dropdown } from '@svelte-fui/core/dropdown';
	import { classnames } from '@svelte-fui/core/internal';

	let klass = '';
	export { klass as class };
</script>

<Dropdown.Trigger>
	<Button class={classnames('menu-button-trigger', klass)} let:hover>
		<slot {hover} />

		<Dropdown.Arrow class="aspect-square h-full p-1" />
	</Button>
</Dropdown.Trigger>
