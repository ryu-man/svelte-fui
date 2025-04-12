<script lang="ts">
	import { Icon } from '../icon';
	import WarningFilled from '@svelte-fui/core/components/icons/warning-filled.svelte';
	import { classnames } from '@svelte-fui/core/internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full', klass)}>
	<WarningFilled />
</Icon>
