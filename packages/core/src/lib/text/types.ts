import type { Snippet } from "svelte";

export type TextProps = {
	class?: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'pre' | 'span';
	align?: 'center' | 'start' | 'justify' | 'end';
	block?: boolean;
	font?: 'base' | 'numeric' | 'monospace';
	italic?: boolean;
	size?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000';
	strikethrough?: boolean;
	truncate?: boolean;
	weight?: 'meduim' | 'regular' | 'semibold' | 'bold';
	wrap?: boolean;
	element?: HTMLElement
    children?: Snippet<[]>
};
