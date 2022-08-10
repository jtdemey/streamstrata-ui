<script type="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { onDestroy } from "svelte";
  import { tweened, type Tweened } from "svelte/motion";

  export let viewParameters: ViewParameter[] = [];

  let innerColor: string = "yellow";
  let outerColor: Tweened<string> = tweened("#333");
  let innerWidth: Tweened<number> = tweened(24);
  let outerWidth: Tweened<number> = tweened(12);

  const unsubFuncs: Function[] = [];

  viewParameters.forEach((vp: ViewParameter) => {
    unsubFuncs.push(vp.store.subscribe((value: any) => {
      switch (vp.name) {
        case "inner-color": innerColor = value; break;
        case "inner-width": $innerWidth = value; break;
        case "outer-color": $outerColor = value; break;
        case "outer-width": $outerWidth = value; break;
      }
    }));
  });

  onDestroy(() => {
    unsubFuncs.forEach((unsub: Function) => unsub());
  });
</script>

<div id="container" style="background: {$outerColor};">
  <div id="outer-rect" style="background: {innerColor}; margin: {$outerWidth}px;">
    <div id="inner-rect" style="background: #00cc00; margin: {$innerWidth}px">
      
    </div>
  </div>
</div>

<style>
  div, #outer-rect, #inner-rect {
    width: 100%;
    height: 100%;
  }

  #container {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  #outer-rect {
    width: 100%;
    height: 100%;
  }
</style>
