<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";
  import Colorpicker from "../common/inputs/Colorpicker.svelte";
  import SliderInput from "../common/inputs/SliderInput.svelte";
  import TextInput from "../common/inputs/TextInput.svelte";

  export let currentTheme: ITheme;
  export let viewParameter: ViewParameter;

  const handleChange = (inputVal: string): void =>
    viewParameter.store.set(inputVal);

  const isType = (paramType: ViewParameterTypes): boolean =>
    viewParameter && viewParameter.parameterType === paramType;
</script>

<div style="border-left: 1px solid {currentTheme.highlight};">
  {#if isType(ViewParameterTypes.Color)}
    <Colorpicker
      changeFunc={handleChange}
      {currentTheme}
      inputName={viewParameter.name}
      label={viewParameter.label}
      valueStore={viewParameter.store}
    />
  {/if}

  {#if isType(ViewParameterTypes.Slider)}
    <SliderInput
      changeFunc={handleChange}
      {currentTheme}
      inputName={viewParameter.name}
      label={viewParameter.label}
      valueStore={viewParameter.store}
    />
  {/if}

  {#if isType(ViewParameterTypes.TextInput)}
    <TextInput
      changeFunc={handleChange}
      {currentTheme}
      inputName={viewParameter.name}
      label={viewParameter.label}
      valueStore={viewParameter.store}
    />
  {/if}
</div>

<style>
  div {
    margin: 1rem 2.5rem 0 0;
    padding: 0.5rem 1rem;
  }
</style>
