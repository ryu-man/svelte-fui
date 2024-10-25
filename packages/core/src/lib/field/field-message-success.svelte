<script lang="ts">
	import { Icon } from '@svelte-fui/core/icon';
	import CheckmarkCircleFilled from '@svelte-fui/core/icons/checkmark-circle-filled.svelte';
	import FieldMessage from './field-message.svelte';

	let klass = '';
	export { klass as class };
</script>

<FieldMessage {...$$restProps}>
	<Icon class="h-full">
		<CheckmarkCircleFilled />
	</Icon>
	<slot />
</FieldMessage>
