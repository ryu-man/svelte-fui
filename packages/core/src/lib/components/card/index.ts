import CardBody from './card-body.svelte';
import CardFooter from './card-footer.svelte';
import CardHeader from './card-header.svelte';
import CardPreview from './card-preview.svelte';
import CardRoot from './card-root.svelte';

export * from './types'

export const Card = {
	Root: CardRoot,
	Header: CardHeader,
	Body: CardBody,
	Footer: CardFooter,
	Preview: CardPreview
};
