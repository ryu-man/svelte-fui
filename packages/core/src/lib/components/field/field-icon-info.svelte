<script lang="ts">
	import { Icon } from '../icon';
	import InfoFilled from '@svelte-fui/core/components/icons/info-filled.svelte';
	import { classnames } from '@svelte-fui/core/internal';

	let { class: klass = '', children } = $props();
</script>

<Icon class={classnames('h-full', klass)}>
	<InfoFilled />
</Icon>
