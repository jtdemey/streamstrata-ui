<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { adjustLightness } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import DeferredImage from "$lib/components/common/DeferredImage.svelte";

  export let currentTheme: ITheme = getTheme($selectedTheme);
  export let href: string = "/";
  export let imgAlt: string = "A placeholder image";
  export let imgSrc: string = "/previews/placeholder.webp";
  export let text: string = "...";
</script>

<a {href} style="color: {adjustLightness(currentTheme.primary, -12)}">
  <section>
    <DeferredImage
      alt={imgAlt}
      color={currentTheme.quaternary}
      {imgSrc}
      width={192}
      height={108}
    />
  </section>
  <div>
    <span
      style="background: {currentTheme.secondary}; color: {adjustLightness(
        currentTheme.highlight,
        10
      )};"
      >{text}
    </span>
  </div>
</a>

<style>
  a {
    text-decoration: none;
  }

  section {
    display: flex;
    flex-flow: column;
    margin-left: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    margin-left: 1rem;
  }

  span {
    min-width: 50%;
    padding: 0 0.4rem 0.2rem;
    font-size: 1.1rem;
    text-align: center;
  }
</style>
