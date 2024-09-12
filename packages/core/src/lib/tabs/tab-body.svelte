<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { circOut } from 'svelte/easing';
	import gsap from 'gsap';
	import { animateFromTo } from '../actions/animation';
	import { classnames } from '../internal';
	import { getFluentContext } from '../internal/context';
	import { getTabsContext, type TabItemContext } from './context';
	import { DURATION } from '../internal/transition';
	import { mount } from '../stores/lifecycle';
	import { derived, type Readable } from 'svelte/store';
	import { delay } from '../internal/promise';

	const context_tabs = getTabsContext();
	if (!context_tabs) {
		throw new Error('');
	}

	const body_element = context_tabs.body.element;

	const context_tab = getFluentContext<TabItemContext>('@context/tabs/tab');
	if (!context_tab) {
		throw new Error('');
	}

	const active = context_tab.active;

	let klass = '';
	export { klass as class };

	const duration = DURATION.NORMAL;

	type TransisionFunc = () => { from: gsap.TweenVars; to: gsap.TweenVars };

	export let enter: TransisionFunc = () => {
		return {
			from: {
				opacity: 0,
				display: 'none'
			},
			to: {
				opacity: 1,
				pointerEvents: 'auto',
				duration: duration / 1000,
				ease: circOut,
				display: 'flex'
			}
		};
	};

	export let exit: TransisionFunc = () => {
		return {
			from: {
				opacity: 1,
				display: 'flex'
			},
			to: {
				opacity: 0,

				pointerEvents: 'none',
				duration: duration / 1000,
				ease: circOut,
				display: 'none'
			}
		};
	};

	type MountParams = {
		active: boolean;
		target?: HTMLElement;
	};

	const activated = derived(
		active,
		(val, set) => {
			if (val)
				tick().then(() => {
					set(true);
				});
		},
		false
	);

	const params = derived<
		[Readable<boolean>, Readable<boolean>],
		{ from: gsap.TweenVars; to: gsap.TweenVars }
	>(
		[active, activated],
		([val, activated], set) => {
			if (val) {
				// Update active tab's height

				// Transition the enter tab
				if (activated) {
					set(enter());
				} else {
					set({
						from: {
							display: 'flex',
							opacity: 1,
							pointerEvents: 'auto'
						},
						to: {
							display: 'flex',
							opacity: 1,
							pointerEvents: 'auto',
							duration: 0
						}
					});
				}
			} else {
				if (activated) {
					// Transition exit tab
					set(exit());
				} else {
					set({
						from: {
							display: 'none',
							opacity: 0,
							pointerEvents: 'none'
						},
						to: {
							display: 'none',
							opacity: 0,
							pointerEvents: 'none',
							duration: 0
						}
					});
				}
			}
		},
		{
			from: {
				display: 'none',
				opacity: 0,
				pointerEvents: 'none'
			},
			to: {
				display: 'none',
				opacity: 0,
				pointerEvents: 'none'
			}
		}
	);

	function activate(node: HTMLElement, params: MountParams) {
		const callback = async (params: MountParams) => {
			await delay(1000 / 60);

			if (params.target && params.active) {
				gsap.to(params.target, {
					minHeight: node.clientHeight + 'px',
					duration: 0.1
				});
			}
		};

		// let observer_resize = new ResizeObserver(() => callback(params));
		// observer_resize.observe(node);

		// const observer_mutate = new MutationObserver(() => callback(params));
		// observer_mutate.observe(node, { childList: true });

		callback(params);

		return {
			update(params: MountParams) {
				if (params.active) {
					// observer_resize = new ResizeObserver(() => callback(params));
					callback(params);
				} else {
					// observer_resize.disconnect();
				}
			},
			destroy() {
				// observer_resize.disconnect();
				// observer_mutate.disconnect();
			}
		};
	}
</script>

<div
	class={classnames('fui-tab-body w-full absolute grid grid-cols-1')}
	data-controled-by={context_tab.id}
	data-active={$active}
>
	<div
		class={classnames('w-full flex flex-col', klass)}
		use:animateFromTo={$params}
		use:activate={{ active: $active, target: $body_element }}
	>
		<slot />
	</div>
</div>

<style lang="postcss">
	.fui-tab-body {
	}
</style>
