<script lang="ts">
  import type { ComponentType } from 'svelte';

  export let size = 'var(--fui-icon-size, 1em)';
  export let fill = 'currentColor';
  export let src: ComponentType;

  export let id: string | undefined = undefined;
  export let role: string | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let ariaExpanded = false;
  export let ariaLabelledby: string | undefined = undefined;
  export let ariaHidden: boolean | 'true' | 'false' | undefined = undefined;

  let klass = '';
  export { klass as class };
</script>

<span
  class="fui-icon {klass}"
  {id}
  {role}
  aria-expanded={ariaExpanded}
  aria-label={ariaLabel}
  aria-labelledby={ariaLabelledby}
  aria-hidden={ariaHidden}
  style:color={fill}
  style:width={size}
  style:height={size}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <svelte:component this={src} />
  </svg>
</span>

<style lang="postcss">
  .fui-icon {
    display: inline-block;
  }

  svg {
    display: block;
  }

  svg :global(path) {
    vector-effect: non-scaling-stroke;
  }
</style>
