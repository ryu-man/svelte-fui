<script lang="ts">
	import { Icon } from '../icon';
	import CheckmarkCircleFilled from '@svelte-fui/core/components/icons/checkmark-circle-filled.svelte';
	import { classnames } from '@svelte-fui/core/internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full', klass)}>
	<CheckmarkCircleFilled />
</Icon>
