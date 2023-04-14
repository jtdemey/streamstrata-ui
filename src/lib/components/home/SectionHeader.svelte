<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { getTheme } from "$lib/utils/ThemeUtils";

  export let currentTheme: ITheme = getTheme($selectedTheme);
  export let header: string = "Title";
  export let body: string = "...";
</script>

<section>
  <h3
    style="
      border-top: 8px solid {currentTheme.tertiary};
      color: {currentTheme.highlight}"
  >
    {header}
  </h3>
  <article
    style="
      color: {currentTheme.highlight}"
  >
    {body}
  </article>
</section>

<style>
  section {
    display: flex;
    flex-flow: column;
    gap: 0;
    width: calc(100% - 4rem);
    margin: 2rem 0 0 2rem;
  }

  h3 {
    width: fit-content;
    margin: 0;
    padding: 1rem;
    font-size: 1.75rem;
    transform: translate(0.75rem, 0.5rem);
  }

  article {
    padding: 1rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
</style>
