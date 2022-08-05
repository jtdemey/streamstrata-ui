<script type="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import DesignerPane from "./DesignerPane.svelte";

  export let viewParameters: ViewParameter[] = [];

  let paneVisible: boolean = false;

  const onKeypress = (e: any) => {
    if (e.key === "f") {
      paneVisible = !paneVisible;
    }
  };
</script>

<svelte:window on:keydown={e => onKeypress(e)} />
<main>
  {#if paneVisible}
    <DesignerPane {viewParameters} />
  {/if}
  <slot />
</main>

<style>
  main {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    background: hsl(220, 16%, 14%);
    font-family: "Nunito", sans-serif;
  }
</style>
