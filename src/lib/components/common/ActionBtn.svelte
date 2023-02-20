<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { adjustLightness } from "$lib/utils/ColorUtils";

  export let backgroundColor: string = "";
  export let clickFunc: Function = () => false;
  export let currentTheme: ITheme;
  export let text: string = "";
  export let textColor: string = "";

  let btnTheme: string;
  $: btnTheme = `background: ${
    backgroundColor || currentTheme.secondary
  }; color: ${adjustLightness(textColor || currentTheme.highlight, 10)}`;
</script>

<button on:click={() => clickFunc()} style={btnTheme}>{text}</button>

<style>
  button {
    margin: 0 1.25rem 0 0;
    padding: 0.3rem 0.5rem;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 3px 0px 6px hsl(220, 6%, 9%);
    color: hsl(180, 30%, 95%);
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-size: 1.25rem;
    outline: none;
  }
</style>
