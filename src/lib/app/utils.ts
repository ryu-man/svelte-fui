import type { Theme } from 'svelte-fui/theme';

export function applyTheme(element: HTMLElement, styleElement: HTMLStyleElement, theme: Theme) {
	const classname = element.classList.item(element.classList.length - 1)

	const vars = Object.entries(theme).reduce((acc, [key, value]) => {
		return acc + `${key}: ${value};`;
	}, '');

	
	if(styleElement.sheet.cssRules.length){
		styleElement.sheet.deleteRule(0);
	}
	
	styleElement.sheet.insertRule(`.fui-app.${classname} { ${vars} }`, 0);
}
