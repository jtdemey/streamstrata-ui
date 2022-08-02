<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { adjustLightness } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";
  import DeferredImage from "$lib/components/common/DeferredImage.svelte";

  export let currentTheme: ITheme = getTheme("Sunset Cream");
  export let href: string = "/";
  export let imgAlt: string = "A placeholder image";
  export let imgSrc: string = "/previews/placeholder.webp";
  export let text: string = "...";
</script>

<a {href} style="color: {adjustLightness(currentTheme.primary, -12)}">
  <section style="background: {currentTheme.highlight};">
    <DeferredImage alt={imgAlt} {imgSrc} width={192} height={108} />
    <span>{text}</span>
  </section>
</a>

<style>
  a {
    text-decoration: none;
  }

  section {
    display: flex;
    flex-flow: column;
    margin-left: 1rem;
    padding: 0.35rem;
  }
  
  span {
    padding-top: 0.2rem;
    font-size: 1.1rem;
    text-align: center;
  }
</style>
