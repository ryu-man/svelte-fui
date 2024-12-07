<script lang="ts">
	import { Icon } from '../icon';
	import InfoFilled from '@svelte-fui/core/icons/info-filled.svelte';
	import { classnames } from '../internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full', klass)}>
	<InfoFilled />
</Icon>
