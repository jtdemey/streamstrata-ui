<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { adjustLightness } from "$lib/utils/ColorUtils";

  export let changeFunc: Function = () => false;
  export let currentTheme: ITheme;
  export let inputName: string = "slider";
  export let label: string = "";
  export let textValue: string = "";

  const handleKeydown = (e: any) => {
    changeFunc(textValue + e.key);
  };
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
    border: none;
    border-radius: 0.5rem;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    outline: none;
  }
</style>
