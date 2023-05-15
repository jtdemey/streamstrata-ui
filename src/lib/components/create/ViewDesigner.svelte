<script lang="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onMount } from "svelte";
  import DesignerPane from "./DesignerPane.svelte";
  import OpenDesignerBtn from "./OpenDesignerBtn.svelte";

  export let viewParameters: ViewParameter[] = [];

  let isRecording: boolean = false;
  let paneVisible: boolean = false;
  let openPaneBtnVisible: boolean = false;
  let showBtnTimeout: any;

  let mainBackgroundColor: string = "hsl(220, 16%, 14%)";

  const checkForRecordingMode = () => {
    const params: any = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop.toString()),
    });
    if (params.r === "1") {
      isRecording = true;
    }
  };

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
    checkForRecordingMode();
    showBtn();
  });

  $: mainBackgroundColor = isRecording ? "#00ff00" : "hsl(220, 16%, 14%)";
</script>

<svelte:window on:click={onScreenClick} on:keydown={onKeypress} />
<main style="background: {mainBackgroundColor}">
  {#if paneVisible}
    <DesignerPane {viewParameters} />
  {/if}

  {#if !paneVisible}
    <OpenDesignerBtn clickFunc={onBtnClick} isVisible={openPaneBtnVisible} />
  {/if}
  <slot {mainBackgroundColor} />
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
