<script lang="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onMount } from "svelte";
  import DesignerPane from "./DesignerPane.svelte";
  import OpenDesignerBtn from "./OpenDesignerBtn.svelte";

  export let viewParameters: ViewParameter[] = [];

  let paneVisible: boolean = false;
  let openPaneBtnVisible: boolean = false;
  let showBtnTimeout: any;

  const onBtnClick = (): void => {
    paneVisible = true;
  };

  const onKeypress = (e: any): void => {
    if (e.key === "`") {
      paneVisible = !paneVisible;
    }
  };

  const showBtn = (): void => {
    openPaneBtnVisible = true;
    if (showBtnTimeout) clearTimeout(showBtnTimeout);
    showBtnTimeout = setTimeout(() => {
      openPaneBtnVisible = false;
    }, 3000);
  };

  const onScreenClick = (): void => {
    if (paneVisible) {
      paneVisible = false;
    } else {
      showBtn();
    }
  };

  onMount(() => {
    showBtn();
  });
</script>

<svelte:window on:click={onScreenClick} on:keydown={onKeypress} />
<main>
  {#if paneVisible}
    <DesignerPane {viewParameters} />
  {/if}

  {#if !paneVisible}
    <OpenDesignerBtn clickFunc={onBtnClick} isVisible={openPaneBtnVisible} />
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
    font-family: "Nunito", sans-serif;
  }
</style>
