<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import ActionBtn from "../common/ActionBtn.svelte";

  export let onExportClick: Function = () => false;
  export let currentTheme: ITheme;

  let isConfirmingReset: boolean = false;
</script>

<section>
  <ActionBtn clickFunc={() => onExportClick()} {currentTheme} text="Export" />
  <ActionBtn clickFunc={() => false} {currentTheme} text="Reset" />
  <span style="display: {isConfirmingReset ? 'block' : 'none'};">
    Confirm reset:
  </span>
</section>

<style>
  section {
    margin: 2.5rem;
  }
</style>
