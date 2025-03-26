import { gsap } from 'gsap';

export function animate(node: HTMLElement | SVGElement, fn: () => gsap.TweenVars) {
	gsap.set(node, fn());

	$effect(() => {
		gsap.to(node, fn());
	});
}

export type GsapFromToParams = {
	from: gsap.TweenVars;
	to: gsap.TweenVars;
};
export function gsapFromTo(node: HTMLElement | SVGElement, fn: () => GsapFromToParams) {
	gsap.set(node, { ...fn().from });

	$effect(() => {
		const { from, to } = fn();
		gsap.fromTo(node, { ...from }, { ...to });
	});
}
