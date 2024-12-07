import AccordionItemBody from './accordion-item-body.svelte';
import AccordionItemHeader from './accordion-item-header.svelte';
import AccordionItemIndicator from './accordion-item-indicator.svelte';
import AccordionItemRoot  from './accordion-item.svelte';

export { default as Accordion } from './accordion-root.svelte';
// export { default as AccordionHeader } from './accordion-item-header.svelte';
// export { default as AccordionPanel } from './accordion-panel.svelte';


export const AccordionItem = {
    Root: AccordionItemRoot,
    Header: AccordionItemHeader,
    Body: AccordionItemBody,
    Indicator: AccordionItemIndicator
}