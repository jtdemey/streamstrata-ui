<script type="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";
import ViewParameterControl from "./ViewParameterControl.svelte";

  export let viewParameters: ViewParameter[] = [];

  const currentTheme = getTheme($selectedTheme);
</script>

<section style="background: {currentTheme.primary}; color: {currentTheme.highlight};">
  <ul>
    {#each viewParameters as viewParameter}
      <li>
        <ViewParameterControl {viewParameter} />
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
  }

  ul {
    min-width: 14rem;
    list-style-type: none;
  }

  ul > li {
    min-width: 8rem;
  }
</style>
