<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { Writable } from "svelte/store";
  import { onDestroy, onMount } from "svelte";
  import { adjustLightness } from "$lib/utils/ColorUtils";

  export let changeFunc: Function = () => false;
  export let currentTheme: ITheme;
  export let inputName: string = "colorpicker";
  export let label: string = "";
  export let valueStore: Writable<string>;

  let colorValue: string = "red";
  let textValue: string = "boop";
  let transparencyValue: number = 100;

  const handleColorChange = (): void => {
    textValue = colorValue;
    changeFunc(colorValue);
  };

  const parseColorInput = (raw: string): string => {
    let parsedColor: string = "";
    const trimmed = raw.trim();
    let isThreeHex: string[] | null = trimmed.match(/^#([0-9a-f]{3})$/i);
    let isSixHex: string[] | null = trimmed.match(/^#([0-9a-f]{6})$/i);
    if (isThreeHex || isSixHex) return trimmed;
    const isHsl: string[] | null = trimmed.match(
      /^hsl\(\s*(0|[1-9]\d?|[12]\d\d|3[0-5]\d)\s*,\s*((0|[1-9]\d?|100)%)\s*,\s*((0|[1-9]\d?|100)%)\s*\)$/
    );
    if (isHsl) return trimmed;
    const isRgb: string[] | null = trimmed.match(
      /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*\)$/i
    );
    if (isRgb) return trimmed;
    return parsedColor;
  };

  const handleKeydown = (e: any): void => {
    const parsed: string = parseColorInput(textValue + e.key);
    if (parsed === "") return;
    colorValue = parsed;
    changeFunc(parsed);
  };

  const unsub: Function = valueStore.subscribe((value: string) => {
    colorValue = value;
  });

  onMount(() => {
    colorValue = colorValue;
    textValue = colorValue;
  });

  onDestroy(() => unsub());
</script>

<div id="container">
  <label for={inputName}>{label}</label>
  <div class="input-area">
    <label id="color-circle" style="background: {colorValue};">
      <input
        bind:value={colorValue}
        id="color-input"
        name={inputName}
        on:change={handleColorChange}
        type="color"
      />
    </label>
    <input
      bind:value={textValue}
      on:keypress={handleKeydown}
      id="text-input"
      name="{inputName}-text"
      style="
        background: {currentTheme.quaternary};
        color: {adjustLightness(currentTheme.primary, -10)};"
      type="text"
    />
  </div>
  <div class="input-area" id="transparency-area">
    <label for="transparency">Transparency: {transparencyValue}%</label>
    <input
      bind:value={transparencyValue}
      name="transparency"
      type="range"
      min="0"
      max="100"
    />
  </div>
</div>

<style>
  #container {
    margin: 0 0 0.5rem;
  }

  .input-area {
    display: flex;
  }

  #color-circle {
    width: 32px;
    height: 32px;
    margin: 0.5rem 1rem 0 0;
    border-radius: 50%;
  }

  #color-input {
    display: none;
  }

  input {
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    outline: none;
  }

  input::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input::-webkit-color-swatch {
    border: none;
  }

  #text-input {
    width: 9rem;
    margin-top: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.5rem;
  }

  #transparency-area {
    flex-flow: column;
    padding-top: 1rem;
  }

  #transparency-area > label {
    padding-right: 0.5rem;
  }

  #transparency-area > input {
    width: 12rem;
  }
</style>
