<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";
  import Colorpicker from "../common/inputs/Colorpicker.svelte";
  import SliderInput from "../common/inputs/SliderInput.svelte";
  import TextInput from "../common/inputs/TextInput.svelte";

  export let viewParameter: ViewParameter;
  export let currentTheme: ITheme;

  const isType = (paramType: ViewParameterTypes): boolean =>
    viewParameter && viewParameter.parameterType === paramType;
</script>

<div style="border: 1px solid {currentTheme.highlight};">
  {#if isType(ViewParameterTypes.Color)}
    <Colorpicker inputName={viewParameter.name} label={viewParameter.label} />
  {/if}

  {#if isType(ViewParameterTypes.Slider)}
    <SliderInput inputName={viewParameter.name} label={viewParameter.label} />
  {/if}

  {#if isType(ViewParameterTypes.TextInput)}
    <TextInput inputName={viewParameter.name} label={viewParameter.label} />
  {/if}
</div>

<style>
  div {
    margin: 1rem;
    padding: 0.5rem 1rem;
  }
</style>
