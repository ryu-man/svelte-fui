import type { Component } from 'svelte';

export type AvatarProps = {
	class?: string;
	id?: string;
	ariaLabel?: string;
	alt?: string;
	src: string | Component;
	color?:
		| 'neutral'
		| 'brand'
		| 'dark-red'
		| 'cranberry'
		| 'red'
		| 'pumpkin'
		| 'peach'
		| 'marigold'
		| 'gold'
		| 'brass'
		| 'brown'
		| 'forest'
		| 'seafoam'
		| 'dark-green'
		| 'light-teal'
		| 'teal'
		| 'steel'
		| 'blue'
		| 'royal-blue'
		| 'cornflower'
		| 'navy'
		| 'lavender'
		| 'purple'
		| 'grape'
		| 'lilac'
		| 'pink'
		| 'magenta'
		| 'plum'
		| 'beige'
		| 'mink'
		| 'platinum'
		| 'anchor';
	badge?: boolean;
	shape?: 'circular' | 'square';
	active?: 'active' | 'inactive' | 'unset';
	activeAppearance?: 'ring' | 'shadow' | 'ring-shadow';
};
