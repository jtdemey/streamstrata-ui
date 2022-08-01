<script context="module">
  export const prerender = true;
</script>

<script type="ts">
  import type { ITheme } from "$lib/data/themes";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import HomeLayout from "$lib/components/home/HomeLayout.svelte";

  const currentTheme: ITheme = getTheme($selectedTheme);
</script>

<HomeLayout>
  <p>Lamina Llama is a web application.</p>
</HomeLayout>

<style>

</style>
