<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { Writable } from "svelte/store";
  import { onDestroy } from "svelte";
  import { adjustLightness } from "$lib/utils/ColorUtils";

  export let changeFunc: Function = () => false;
  export let currentTheme: ITheme;
  export let inputName: string = "slider";
  export let label: string = "";
  export let textValue: string = "";
  export let valueStore: Writable<string>;

  const handleKeydown = (e: any) => {
    changeFunc(textValue);
  };

  const unsub: Function = valueStore.subscribe((value: string) => {
    textValue = value;
  });

  onDestroy(() => unsub());
</script>

<div>
  <label for={inputName}>{label}</label>
  <input
    bind:value={textValue}
    on:keydown={handleKeydown}
    name={inputName}
    style="
      background: {currentTheme.quaternary};
      color: {adjustLightness(currentTheme.primary, -10)};"
    type="text" />
</div>

<style>
  div {
    display: flex;
    flex-flow: column;
  }

  input {
    margin-top: 0.25rem;
    padding: 0.25rem;
    border: none;
    border-radius: 0.5rem;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    outline: none;
  }
</style>
