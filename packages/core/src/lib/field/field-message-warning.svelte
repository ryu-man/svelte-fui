<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import WarningFilled from '@svelte-fui/core/icons/warning-filled.svelte';
	import FieldMessage from './field-message.svelte';

	let klass = '';
	export { klass as class };
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<WarningFilled />
	</Icon>
	<slot />
</FieldMessage>
