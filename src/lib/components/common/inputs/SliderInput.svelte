<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { onMount } from "svelte";
  import { adjustLightness } from "$lib/utils/ColorUtils";

  export let changeFunc: Function = () => false;
  export let currentTheme: ITheme;
  export let inputName: string = "slider";
  export let label: string = "";
  export let min: number = 0;
  export let max: number = 50;
  export let maxTextLength: number = 2;

  let sliderValue: number = 5;
  let textValue: string = "";

  const handleSliderChange = (): void => {
    const val: string = sliderValue.toString();
    textValue = val;
    changeFunc(val);
  };

  const handleTextChange = (e: any): void => {
    const inputInt: number = parseInt(textValue + e.key);
    if (inputInt >= min && inputInt <= max) {
      sliderValue = inputInt;
      changeFunc(textValue);
    }
  };

  onMount(() => {
    textValue = sliderValue.toString();
  });
</script>

<div>
  <label for={inputName}>{label}</label>
  <input
    bind:value={sliderValue}
    {max}
    {min}
    name={inputName}
    on:change={handleSliderChange}
    type="range"
  />
  <input
    bind:value={textValue}
    id="text-input"
    maxlength={maxTextLength}
    name="{inputName}-text"
    on:keydown={handleTextChange}
    style="
      background: {currentTheme.quaternary};
      color: {adjustLightness(currentTheme.primary, -10)};"
    type="text"
  />
</div>

<style>
  div {
    display: flex;
    flex-flow: column;
  }

  input {
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    outline: none;
  }

  #text-input {
    width: 40%;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
  }
</style>
