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

	const context_state: TooltipContext['state'] = $state({
		data: {},
		elements: {}
	});

	const context_derived: TooltipContext['derived'] = $derived({
		data: {
			open,
			alignment,
			offset,
			placements
		},
		elements: {
			content: context_state.elements.content,
			indicator: context_state.elements.indicator,
			overlay: context_state.elements.overlay,
			trigger: context_state.elements.trigger
		}
	});

	const context_tooltip = setTooltipContext({
		id: nanoid(),
		type: 'tooltip',
		parent: () => getTooltipContext(),
		get derived() {
			return context_derived;
		},
		get state() {
			return context_state;
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

<Popover.Root open={false} context={context_tooltip}>
	{@render children?.({ context: context_tooltip })}
</Popover.Root>
