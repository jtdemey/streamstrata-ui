<script type="ts">
  import type { ITheme } from "$lib/data/themes";
  import { adjustLightness, adjustSaturation } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";

  export let currentTheme: ITheme = getTheme("Sunset Cream");
  export let title: string = "Title";
  export let body: string = "...";
</script>

<section>
  <h3
    style="
      background: {currentTheme.quaternary};
      color: {adjustLightness(currentTheme.primary, -8)};"
  >
    {title}
  </h3>
  <article style="
    background: {currentTheme.tertiary};
    color: {adjustLightness(adjustSaturation(currentTheme.primary, -20), -20)}">
    {body}
  </article>
</section>

<style>
  section {
    width: calc(100% - 4rem);
    margin: 2rem;
  }

  h3 {
    width: fit-content;
    margin: 0;
    padding: 1rem;
  }

  article {
    padding: 1rem;
  }
</style>
