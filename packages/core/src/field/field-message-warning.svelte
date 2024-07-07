<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import WarningFilled from 'virtual:icons/fluent/warning-24-filled';
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
