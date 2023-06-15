<script lang="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onMount } from "svelte";
  import DesignerPane from "./DesignerPane.svelte";
  import OpenDesignerBtn from "./OpenDesignerBtn.svelte";

  export let data;
  console.log(data);
  export let viewParameters: ViewParameter[] = [];

  let paneVisible: boolean = false;
  let openPaneBtnVisible: boolean = false;
  let shouldShowButton: boolean = true;
  let showBtnTimeout: any;

  if (data.exportParams) {
    shouldShowButton = false;
  }

  const onBtnClick = (): void => {
    paneVisible = true;
  };

  const onKeypress = (e: any): void => {
    if (["`", "Tab", " ", "f"].some(char => char === e.key)) {
      paneVisible = !paneVisible;
    }
  };

  const showBtn = (): void => {
    if (!shouldShowButton) return;
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
  <input type="hidden" name="test input" id="test" />
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
