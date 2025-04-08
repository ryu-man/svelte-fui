<script lang="ts">
	import { nanoid } from 'nanoid';
	import { getTooltipContext, setTooltipContext, type TooltipContext } from './context';
	import type { TooltipRootProps } from './types';
	import { Popover } from '../popover';

	let {
		open = false,
		alignment = 'start',
		offset = 8,
		placements = ['bottom', 'top'],
		children
	}: TooltipRootProps = $props();

	const contextState: TooltipContext['state'] = $state({
		data: {},
		elements: {}
	});

	const contextDerived: TooltipContext['derived'] = $derived({
		data: {
			open,
			alignment,
			offset,
			placements
		},
		elements: {
			content: contextState.elements.content,
			indicator: contextState.elements.indicator,
			overlay: contextState.elements.overlay,
			trigger: contextState.elements.trigger
		}
	});

	const contextTooltip = setTooltipContext({
		id: nanoid(),
		type: 'tooltip',
		parent: () => getTooltipContext(),
		get derived() {
			return contextDerived;
		},
		get state() {
			return contextState;
		},
		events: {},
		methods: {
			open() {
				open = true;
			},
			close() {
				open = false;
			},
			toggle() {
				open = !open;
			}
		}
	});
</script>

<Popover.Root open={false} context={contextTooltip}>
	{@render children?.({ context: contextTooltip })}
</Popover.Root>
