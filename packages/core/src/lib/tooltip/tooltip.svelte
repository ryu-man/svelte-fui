<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { nanoid } from 'nanoid';
	import { classnames } from '../internal';

	type Relationship = 'label' | 'description' | 'inaccessible' | undefined;
	type Position =
		| 'above'
		| 'above-start'
		| 'above-end'
		| 'after'
		| 'after-top'
		| 'after-bottom'
		| 'below'
		| 'below-start'
		| 'below-end'
		| 'before'
		| 'before-top'
		| 'before-bottom';

	const dispatch = createEventDispatcher();

	export let appearance: 'normal' | 'inverted' = 'normal';
	export let visible = false;
	export let content = '';
	export let position: Position = 'above';
	export let relationship: Relationship = 'label';
	export let id: string | undefined = nanoid();

	let tooltip_content_element: HTMLDivElement;

	$: transition_direction = position === 'below' ? -1 : 1;

	function set_relationship(node: HTMLDivElement, relationship: Relationship) {
		const child = node.querySelectorAll('*:not(.fui-tooltip-content)')[0];
		console.log(child);

		if (!child) {
			return;
		}

		switch (relationship) {
			case 'description': {
				child.setAttribute('aria-describedby', id);
				break;
			}
			case 'inaccessible': {
				break;
			}
			case 'label': {
				if (content) {
					child.setAttribute('aria-label', content);
				} else {
					child.setAttribute('aria-labelledby', id);
				}
				break;
			}
		}
	}

	function onmouseenter(e: MouseEvent) {
		visible = true;
		dispatch('visible-change', visible);
	}

	function onmouseleave(e: MouseEvent) {
		visible = false;
		dispatch('visible-change', visible);
	}
</script>

<div class={classnames('fui-toolip-container')} use:set_relationship={relationship} on:mouseenter={onmouseenter} on:mouseleave={onmouseleave}>
	<slot />

	<div
		class={classnames('fui-tooltip-content', position, { inverted: appearance === 'inverted', visible })}
		role="tooltip"
		{id}
		bind:this={tooltip_content_element}
		transition:fly={{ duration: 100, y: 4 * transition_direction }}
	>
		<slot name="content">
			{content}
		</slot>
	</div>
</div>

<style lang="postcss">
	.fui-toolip-container {
		@apply relative inline-flex;

		.fui-tooltip-content {
			@apply font-base text-base-200 leading-base-200 pointer-events-none absolute box-border hidden cursor-default whitespace-nowrap rounded-md;

			left: 50%;
			max-width: 240px;

			border: 1px solid var(--fui-colorTransparentStroke);
			background-color: var(--fui-colorNeutralBackground1);
			color: var(--fui-colorNeutralForeground1);
			padding: theme(spacing.xs) theme(spacing.m) theme(spacing.sNudge) theme(spacing.m);
			filter: drop-shadow(0 0 2px var(--fui-colorNeutralShadowAmbient)) drop-shadow(0 4px 8px var(--fui-colorNeutralShadowKey));

			&.above {
				bottom: 100%;
				transform: translate(-50%, calc(theme(spacing.s) * -1));
			}
			&.below {
				top: 100%;
				transform: translate(-50%, theme(spacing.s));
			}

			&.visible {
				@apply block;
			}

			&.inverted {
				background-color: var(--fui-colorNeutralBackgroundStatic);
				color: var(--fui-colorNeutralForegroundStaticInverted);
			}
		}
	}
</style>
