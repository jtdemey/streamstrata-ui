<script context="module">
  export const prerender = true;
</script>

<script type="ts">
  import type { ITheme } from "$lib/data/themes";
  import { Links } from "$lib/data/links";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { adjustSaturation } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import HomeHeader from "$lib/components/home/HomeHeader.svelte";
  import LinkButton from "$lib/components/common/LinkButton.svelte";
  import SectionHeader from "$lib/components/home/SectionHeader.svelte";

  const currentTheme: ITheme = getTheme($selectedTheme);

  const getBackgroundGradient = (color: string): string =>
    `linear-gradient(40deg, ${color}, ${adjustSaturation(color, 5)})`;
</script>

<main style="background: {getBackgroundGradient(currentTheme.primary)};">
  <HomeHeader {currentTheme} />
  <SectionHeader {currentTheme} title="Overlays" />
  <ul>
    {#each Links as link}
      <LinkButton href={link.href} text={link.text} />
    {/each}
  </ul>
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

  ul {
    display: flex;
    margin: 0;
    padding: 0 2rem;
    list-style-type: none;
  }
</style>
