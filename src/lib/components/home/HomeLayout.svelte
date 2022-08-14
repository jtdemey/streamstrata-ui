<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { adjustLightness, adjustSaturation } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import HomeHeader from "$lib/components/home/HomeHeader.svelte";

  const currentTheme: ITheme = getTheme($selectedTheme);

  const getBackgroundGradient = (color: string): string =>
    `linear-gradient(40deg, ${color}, ${adjustSaturation(color, 5)})`;
</script>

<main style="background: {getBackgroundGradient(adjustLightness(currentTheme.primary, -15))};">
  <HomeHeader {currentTheme} />
  <slot />
</main>

<style>
  main {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(40deg, hsl(160, 3%, 27%), hsl(160, 8%, 27%));
    font-family: "Nunito", sans-serif;
  }
</style>
