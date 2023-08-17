<script lang="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onMount } from "svelte";
  import { error } from "@sveltejs/kit";
  import { env } from "$env/dynamic/public";
  import { populateViewParameters } from "$lib/utils/ExportUtils";
  import DesignerPane from "./DesignerPane.svelte";
  import OpenDesignerBtn from "./OpenDesignerBtn.svelte";

  export let viewParameters: ViewParameter[] = [];

  let paneVisible: boolean = false;
  let openPaneBtnVisible: boolean = false;
  let shouldShowButton: boolean = true;
  let showBtnTimeout: any;

  const loadViewParams = (): void => {
    const queryParams = new URLSearchParams(window.location.search);
    const requestedExportId = queryParams.get("export-id");
    if (!requestedExportId) return;
    shouldShowButton = false;
    const getExportParamsUri =
      `${env.PUBLIC_EXPORT_URI}exportparams?export-id=${requestedExportId}`;
    fetch(getExportParamsUri)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status && res.status === "Not found") {
          throw error(404, "Export params not found");
        }
        viewParameters = populateViewParameters(res.exportParams.parameters, viewParameters);
      })
      .catch(err => console.error(err));
  };

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
      return;
    }
    showBtn();
  };

  onMount(() => {
    showBtn();
    loadViewParams();
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
