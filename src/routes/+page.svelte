<script lang="ts">
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
  <div>
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
  </div>
</HomeLayout>

<style>
  ul {
    display: flex;
    margin: 2.5rem 0 0;
    padding: 0 2rem;
    list-style-type: none;
  }

  div {
    display: grid;
    grid-gap: 4rem 0;
    grid-template-columns: 1fr 2fr;
    margin: 2rem 0;
  }
</style>
