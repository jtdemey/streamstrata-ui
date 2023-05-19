<script lang="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onDestroy, onMount } from "svelte";
  import { tweened, type Tweened } from "svelte/motion";
  import { checkForExportParam } from "$lib/utils/ExportUtils";
  import { genElasticTweenConfig } from "$lib/utils/TweenUtils";

  export let viewParameters: ViewParameter[] = [];

  let isExporting: boolean = false;
  let innerColor: string = "yellow";
  let outerColor: string = "#333";
  let innerWidth: Tweened<number> = tweened(24, genElasticTweenConfig());
  let outerWidth: Tweened<number> = tweened(12, genElasticTweenConfig());

  const unsubFuncs: Function[] = [];

  viewParameters.forEach((vp: ViewParameter) => {
    unsubFuncs.push(vp.store.subscribe((value: any) => {
      switch (vp.name) {
        case "inner-color": innerColor = value; break;
        case "inner-width": $innerWidth = value; break;
        case "outer-color": outerColor = value; break;
        case "outer-width": $outerWidth = value; break;
      }
    }));
  });

  onMount(() => {
    isExporting = checkForExportParam();
  });

  onDestroy(() => {
    unsubFuncs.forEach((unsub: Function) => unsub());
  });

  let outerStyle: string, innerStyle: string;

  $: outerStyle = `
    width: calc(100% - ${$outerWidth * 2}px);
    height: calc(100% - ${$outerWidth * 2}px);
    background: ${innerColor};
    margin: ${$outerWidth}px;
  `;

  $: innerStyle = `
    width: calc(100% - ${$innerWidth * 2}px);
    height: calc(100% - ${$innerWidth * 2}px);
    background: ${isExporting ? "#00cc00" : "hsl(270, 7%, 11%)"};
    margin: ${$innerWidth}px;
  `;
</script>

<div id="container" style="background: {outerColor};">
  <div id="outer-rect" style={outerStyle}>
    <div id="inner-rect" style={innerStyle}>
      
    </div>
  </div>
</div>

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

  #outer-rect, #inner-rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
  }
</style>
