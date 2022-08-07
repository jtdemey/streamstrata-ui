<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { tweened, type Tweened } from "svelte/motion";
  import { fly } from "svelte/transition";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import ViewParameterControl from "./ViewParameterControl.svelte";

  export let viewParameters: ViewParameter[] = [];

  const currentTheme: ITheme = getTheme($selectedTheme);

  const paneYPos: Tweened<number> = tweened(-300, {
    duration: 210,
    easing: quintOut
  });

  onMount(() => {
    $paneYPos = 0;
  });
</script>

<section
  on:click|stopPropagation
  out:fly={{ duration: 210, easing: quintOut, y: -10 }}
  style="left: {$paneYPos}px; background: {currentTheme.primary}; color: {currentTheme.highlight};"
>
  <a href="/"><h3>🠔 Back home</h3></a>
  <ul>
    {#each viewParameters as viewParameter}
      <li>
        <ViewParameterControl {currentTheme} {viewParameter} />
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    background: linear-gradient(40deg, hsl(160, 3%, 27%), hsl(160, 8%, 27%));
    box-shadow: 3px 0px 6px hsl(220, 6%, 9%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  ul {
    min-width: 14rem;
    margin: 0 0 0 2.5rem;
    padding: 0;
    list-style-type: none;
  }

  ul > li {
    min-width: 8rem;
  }
</style>
