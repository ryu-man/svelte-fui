<script lang="ts">
	import { Icon } from '../icon';
	import WarningFilled from '@svelte-fui/core/icons/warning-filled.svelte';
	import { classnames } from '../internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full', klass)}>
	<WarningFilled />
</Icon>
