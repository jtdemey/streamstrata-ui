<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { adjustLightness, adjustSaturation } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";

  export let currentTheme: ITheme = getTheme("Sunset Cream");
  export let header: string = "Title";
  export let body: string = "...";
</script>

<section>
  <h3
    style="
      background: {currentTheme.quaternary};
      color: {adjustLightness(currentTheme.primary, -8)};"
  >
    {header}
  </h3>
  <article style="
    background: {currentTheme.tertiary};
    color: {adjustLightness(adjustSaturation(currentTheme.primary, -20), -20)}">
    {body}
  </article>
</section>

<style>
  section {
    display: flex;
    width: calc(100% - 4rem);
    margin: 2rem;
  }

  h3 {
    width: fit-content;
    margin: 0;
    padding: 1rem;
    border-radius: 1rem 1rem 0 1rem;
    font-size: 1.3rem;
  }

  article {
    height: 1rem;
    padding: 1rem;
    border-radius: 0 1rem 1rem 0;
    transform: translateY(0.75rem);
  }
</style>
