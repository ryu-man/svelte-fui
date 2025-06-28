<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { classnames } from '@svelte-fui/core/internal';
	import type { DividerProps } from './types';
	import { reference } from '@svelte-fui/core/internal/dom.svelte';

	let {
		class: klass = '',
		appearance = 'default',
		vertical = false,
		inset = false,
		alignContent = 'center',
		id = undefined,
		children = undefined,
		ref = undefined
	}: HTMLAttributes<HTMLButtonElement> & DividerProps = $props();

	const childless = $derived(!children);
</script>

<div
	use:reference={ref}
	role="separator"
	aria-orientation="horizontal"
	aria-labelledby={id}
	class={classnames(
		'fui-divider',
		'flex flex-grow items-center text-center font-base text-base-200  font-regular leading-base-200 relative box-border',
		appearance,
		alignContent,
		{ vertical, inset, childless },
		klass
	)}
>
	<div {id} class="fui-divider-wrapper">
		{@render children?.()}
	</div>
</div>

<style lang="postcss">
	.fui-divider {
		--content-spacing: var(--spacing-m);
		--inset-spacing: var(--spacing-m);
		--max-start-end-length: var(--spacing-s);
		--min-start-end-length: var(--spacing-s);

		&::before,
		::after {
			content: '';
			border-bottom-width: var(--border-width-thin);
			box-sizing: border-box;
			display: flex;
			flex-grow: 1;
		}

		&.brand {
			color: var(--fui-colorBrandForeground1);

			&::before {
				border-color: var(--fui-colorBrandStroke1);
			}

			&::after {
				border-color: var(--fui-colorBrandStroke1);
			}
		}
		&.default {
			color: var(--fui-colorNeutralForeground2);

			&::before {
				border-color: var(--fui-colorNeutralStroke2);
			}

			&::after {
				border-color: var(--fui-colorNeutralStroke2);
			}
		}

		&.subtle {
			color: var(--fui-colorNeutralForeground2);

			&::before {
				border-color: var(--fui-colorNeutralStroke3);
			}

			&::after {
				border-color: var(--fui-colorNeutralStroke3);
			}
		}

		&.strong {
			color: var(--fui-colorNeutralForeground2);

			&::before {
				border-color: var(--fui-colorNeutralStroke1);
			}

			&::after {
				border-color: var(--fui-colorNeutralStroke1);
			}
		}
	}

	.fui-divider:not(.vertical) {
		/* Inset styles */
		&.inset {
			padding-left: var(--inset-spacing);
			padding-right: var(--inset-spacing);
		}

		/* Alignment variations */
		&.start {
			&::before {
				margin-right: var(--content-spacing);
				max-width: var(--max-start-end-length);
			}
			&::after {
				margin-left: var(--content-spacing);
			}
		}
		&.center {
			&::before {
				margin-right: var(--content-spacing);
			}
			&::after {
				margin-left: var(--content-spacing);
			}
		}
		&.end {
			&::before {
				margin-right: var(--content-spacing);
			}
			&::after {
				margin-left: var(--content-spacing);
				max-width: var(--max-start-end-length);
			}
		}
	}

	.fui-divider.vertical {
		min-height: 20px;
		display: flex;
		flex-direction: column;

		&::before,
		&::after {
			/* @apply border-r-thin border-solid; */
			min-height: var(--min-start-end-length);
			border-right-width: var(--border-width-thin);
			border-style: solid;
		}

		/* Inset styles */
		&.inset {
			margin-top: var(--inset-spacing);
			margin-bottom: var(--inset-spacing);
		}

		/* Alignment variations */
		&.start {
			&::before {
				content: '';
				margin-bottom: var(--content-spacing);
				max-height: var(--max-start-end-length);
			}
			&::after {
				margin-top: var(--content-spacing);
			}
		}
		&.center {
			&::before {
				margin-bottom: var(--content-spacing);
			}
			&::after {
				margin-top: var(--content-spacing);
			}
		}
		&.end {
			&::before {
				margin-bottom: var(--content-spacing);
			}
			&::after {
				content: '';
				margin-top: var(--content-spacing);
				max-height: var(--max-start-end-length);
			}
		}
	}
	/* Childless styles */
	.fui-divider.childless {
		&::before {
			margin-bottom: 0 !important;
			margin-right: 0 !important;
		}

		&::after {
			margin-left: 0 !important;
			margin-top: 0 !important;
		}
	}
</style>
