<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { writable, type Writable } from "svelte/store";
  import { adjustLightness } from "$lib/utils/ColorUtils";
  import { quadOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import {
    requestExport,
    stringifyViewParameters
  } from "$lib/utils/ExportUtils";
  import ActionBtn from "../common/ActionBtn.svelte";
  import SliderInput from "../common/inputs/SliderInput.svelte";

  export let currentTheme: ITheme;
  export let designerPaneWidth: number = 367;
  export let viewParameters: ViewParameter[] = [];

  let height: Writable<number> = writable(720);
  let width: Writable<number> = writable(1280);

  const handleSliderChange =
    (store: Writable<number>) =>
    (inputVal: string): void =>
      store.set(parseInt(inputVal));

  const onExport = (height: number, width: number, args: object = {}): void => {
    const payload: string = stringifyViewParameters(
      "simpleborder",
      Object.assign(viewParameters, { height, width, ...args })
    );
    requestExport(payload);
  };
</script>

<article
  style="
  background: {currentTheme.primary};
  left: {designerPaneWidth}px;"
  transition:fly={{ duration: 180, easing: quadOut, x: -20 }}
>
  <section>
    <SliderInput
      changeFunc={handleSliderChange(width)}
      {currentTheme}
      inputName="width"
      label="Width"
      max={4096}
      min={0}
      valueStore={width}
    />
    <SliderInput
      changeFunc={handleSliderChange(height)}
      {currentTheme}
      inputName="height"
      label="Height"
      max={2160}
      min={0}
      valueStore={height}
    />
  </section>
  <ActionBtn
    backgroundColor={adjustLightness(currentTheme.tertiary, -25)}
    clickFunc={() => onExport($height, $width)}
    {currentTheme}
    text="Export"
  />
</article>

<style>
  article {
    position: absolute;
    top: 80px;
    min-width: 8rem;
    padding: 1rem;
    border-radius: 0 0.3rem 0.3rem 0;
  }

  section {
    padding: 1rem 0.5rem 2rem;
  }
</style>
