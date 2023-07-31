<svg class="fui-spinner-progressbar">
	<circle class="fui-spinner-track" />
	<circle class="fui-spinner-tail" />
</svg>

<style lang="postcss">
	@keyframes fui-spinner-animation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes fui-spinner-tail-animation {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}

		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}

		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}

	svg {
		@apply bg-transparent;
		animation-duration: var(--animation-duration, 3s);
		animation-iteration-count: var(--animation-iteration-count, infinite);
		animation-timing-function: linear;
		animation-name: fui-spinner-animation;

		stroke: currentColor;
	}

	circle {
		cx: 50%;
		cy: 50%;
		fill: none;
		r: var(--fui-spinner-circle-r, 0);
		stroke-width: var(--fui-spinner-circle-stroke-width, 1);
	}

	.fui-spinner-tail {
		@apply ease-easy-ease;

		animation-name: fui-spinner-tail-animation;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
		stroke-linecap: round;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;

		stroke: var(--fui-spinner-tail-color);

		@media screen and (prefers-reduced-motion: reduce) {
			animation-duration: 0.01ms;
			animation-iteration-count: 1;
		}
	}

	.fui-spinner-track {
		stroke: var(--fui-spinner-track-color);
	}
</style>
