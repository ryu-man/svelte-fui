import { gsap } from 'gsap';

export function animate(node: HTMLElement | SVGElement, vars: gsap.TweenVars) {
	gsap.set(node, vars);

	return {
		update(vars: gsap.TweenVars) {
			gsap.to(node, vars);
		}
	};
}
