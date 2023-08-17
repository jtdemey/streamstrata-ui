<script lang="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onDestroy, onMount } from "svelte";
  import initPillars from "$lib/animations/initPillars";
  import { checkForExportParam } from "$lib/utils/ExportUtils";

  export let viewParameters: ViewParameter[] = [];

  let isExporting: boolean = false;
  let pillarColor: string = "blue";

  const unsubFuncs: Function[] = [];

  viewParameters.forEach((vp: ViewParameter) => {
    unsubFuncs.push(
      vp.store.subscribe((value: any) => {
        switch (vp.name) {
          case "pillar-color":
            pillarColor = value;
            break;
        }
      })
    );
  });

  onMount(() => {
    isExporting = checkForExportParam();
    initPillars();
  });

  onDestroy(() => {
    unsubFuncs.forEach((unsub: Function) => unsub());
  });
</script>

<div id="container" style="background: hsl(210, 32%, 6%)" />

<style>
  #container {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
