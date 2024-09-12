import { gsap } from 'gsap';

export function animate(node: HTMLElement | SVGElement, vars: gsap.TweenVars) {
	gsap.set(node, vars);

	return {
		update(vars: gsap.TweenVars) {
			gsap.to(node, vars);
		}
	};
}

export type AnimateFromToParams = {
	from?: gsap.TweenVars;
	to?: gsap.TweenVars;
};

export function animateFromTo(
	node: HTMLElement | SVGElement,
	{ from = {} }: AnimateFromToParams = {}
) {
	gsap.set(node, { ...from });

	return {
		update({ from = {}, to = {} }: AnimateFromToParams = {}) {
			gsap.fromTo(node, { ...from }, { ...to });
		}
	};
}
