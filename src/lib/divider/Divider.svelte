<script lang="ts">
	import { classnames } from 'svelte-fluentui/internal';

	export let appearance: 'strong' | 'brand' | 'subtl' | 'default' = 'default';
	export let vertical = false;
	export let inset = false;
	export let alignContent: 'center' | 'start' | 'end' = 'center';

	export let id: string | undefined = undefined;
	export let style: string = '';
	let klass = '';
	export { klass as class };

	$: childless = !$$slots.default;
</script>

<div
	role="separator"
	aria-orientation="horizontal"
	aria-labelledby={id}
	class={classnames('fui-divider', appearance, alignContent, { vertical, inset, childless }, klass)}
	{style}
>
	<div {id} class="fui-divider-wrapper">
		<slot />
	</div>
</div>

<style lang="postcss">
	.fui-divider {
		@apply relative box-border flex flex-grow items-center text-center font-base text-base-200 font-regular leading-base-200;

		--content-spacing: theme(spacing.m);
		--inset-spacing: theme(spacing.m);
		--max-start-end-length: theme(spacing.s);
		--min-start-end-length: theme(spacing.s);

		&::before {
			@apply box-border flex flex-grow border-b-thin;
			content: '';
		}
		&::after {
			@apply box-border flex flex-grow border-b-thin;
			content: '';
		}

		&.brand {
			@apply text-brand-foreground-1;

			&::before {
				@apply border-brand-stroke-1;
			}

			&::after {
				@apply border-brand-stroke-1;
			}
		}
		&.default {
			@apply text-neutral-foreground-2;

			&::before {
				@apply border-neutral-stroke-2;
			}

			&::after {
				@apply border-neutral-stroke-2;
			}
		}

		&.subtle {
			@apply text-neutral-foreground-2;

			&::before {
				@apply border-neutral-stroke-3;
			}

			&::after {
				@apply border-neutral-stroke-3;
			}
		}

		&.strong {
			@apply text-neutral-foreground-2;

			&::before {
				@apply border-neutral-stroke-1;
			}

			&::after {
				@apply border-neutral-stroke-1;
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
		@apply flex min-h-[20px] flex-col;

		&::before {
			@apply border-r-thin border-solid;
			min-height: var(--min-start-end-length);
		}

		&::after {
			@apply border-r-thin border-solid;
			min-height: var(--min-start-end-length);
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
