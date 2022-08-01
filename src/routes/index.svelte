<script context="module">
  export const prerender = true;
</script>

<script type="ts">
  import type { ITheme } from "$lib/data/themes";
  import { Links } from "$lib/data/links";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import HomeLayout from "$lib/components/home/HomeLayout.svelte";
  import LinkButton from "$lib/components/common/LinkButton.svelte";
  import SectionHeader from "$lib/components/home/SectionHeader.svelte";

  const currentTheme: ITheme = getTheme($selectedTheme);
</script>

<HomeLayout>
  <SectionHeader {currentTheme} title="Borders" />
  <SectionHeader {currentTheme} title="Frames" />
  <SectionHeader {currentTheme} title="Borders" />
  <ul>
    {#each Links as link}
      <LinkButton href={link.href} text={link.text} />
    {/each}
  </ul>
</HomeLayout>

<style>
  ul {
    display: flex;
    margin: 0;
    padding: 0 2rem;
    list-style-type: none;
  }
</style>
