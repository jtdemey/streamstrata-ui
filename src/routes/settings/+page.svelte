<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import HomeLayout from "$lib/components/home/HomeLayout.svelte";

  const currentTheme: ITheme = getTheme($selectedTheme);

  let headerStyle: string = `color: ${currentTheme.highlight};`;
</script>

<HomeLayout>
  <h2 style={headerStyle}>Settings</h2>
</HomeLayout>

<style>
  h2 {
    margin: 2rem;
  }
</style>
