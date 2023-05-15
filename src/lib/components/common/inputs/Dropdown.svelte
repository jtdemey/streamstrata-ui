<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { Writable } from "svelte/store";
  import { onDestroy } from "svelte";

  export let changeFunc: Function = () => false;
  export let currentTheme: ITheme;
  export let inputName: string = "dropdown";
  export let label: string = "";
  export let options: string[] = [];
  export let valueStore: Writable<number>;

  let selectedIndex: number = 0;

  const handleChange = (): void => {
    const val: string = options[selectedIndex];
    changeFunc(val);
  };

  const unsub: Function = valueStore.subscribe((value: number) => {
    selectedIndex = value;
  });

  onDestroy(() => unsub());
</script>

<div>
  <label for={inputName}>{label}</label>
  <input
    type="select"
  />
</div>

<style>
  div {
    display: flex;
    flex-flow: column;
  }

  input {
    margin-top: 0.5rem;
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    outline: none;
  }
</style>
