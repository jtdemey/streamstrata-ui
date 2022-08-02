<script context="module">
  export const prerender = true;
</script>

<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { Links } from "$lib/data/Links";
  import { SectionText } from "$lib/data/home/SectionText";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import HomeLayout from "$lib/components/home/HomeLayout.svelte";
  import SectionHeader from "$lib/components/home/SectionHeader.svelte";
  import ViewLinkCard from "$lib/components/home/ViewLinkCard.svelte";

  const currentTheme: ITheme = getTheme($selectedTheme);
</script>

<HomeLayout>
  {#each SectionText as sectionText, i}
    <SectionHeader {currentTheme} {...sectionText} />
    <ul>
      {#if Links[i]}
        {#each Links[i] as link}
          <ViewLinkCard {...link} />
        {/each}
      {/if}
    </ul>
  {/each}
</HomeLayout>

<style>
  ul {
    display: flex;
    margin: 0;
    padding: 0 2rem;
    list-style-type: none;
  }
</style>
