<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { quintOut } from "svelte/easing";
  import { tweened, type Tweened } from "svelte/motion";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import { selectedTheme } from "$lib/stores/UIStores";

  export let clickFunc: Function = (): boolean => false;
  export let isVisible: boolean = false;

  const currentTheme: ITheme = getTheme($selectedTheme);

  const opacityTween: Tweened<number> = tweened(0, {
    duration: 600,
    easing: quintOut
  });

  $: if (isVisible) {
    $opacityTween = 0.9;
  } else {
    $opacityTween = 0;
  }
</script>

<div style="opacity: {$opacityTween};">
  <button
    on:click|stopPropagation={e => clickFunc(e)}
    style="
      background: {currentTheme.quaternary};
      color: {currentTheme.primary};"
  >
    ☰
  </button>
</div>

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    padding: 0.5rem;
    z-index: 2;
  }

  button {
    padding: 0 0.75rem 0.25rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 4px #333;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
  }
</style>
