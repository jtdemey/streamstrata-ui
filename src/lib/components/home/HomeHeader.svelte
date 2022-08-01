<script type="ts">
  import type { ITheme } from "$lib/data/themes";
  import { adjustLightness } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";

  export let currentTheme: ITheme = getTheme("Sunset Cream");
</script>

<header>
  <a href="/">
    <h1
      style="
        background: {currentTheme.secondary};
        border: 1px solid {currentTheme.highlight};
        color: {currentTheme.highlight}
      "
    >
      Lamina<br />Llama
    </h1>
  </a>
  <div id="right">
    <h2
      style="
        background: {currentTheme.highlight};
        color: {adjustLightness(currentTheme.secondary, -16)}
      "
    >
      Create your own stream overlays,<br /> transitions, and effects.
    </h2>
    <div id="color-bar">
      <div style="background: {currentTheme.primary};" />
      <div style="background: {currentTheme.secondary};" />
      <div style="background: {currentTheme.tertiary};" />
      <div style="background: {currentTheme.quaternary};" />
      <div style="background: {currentTheme.highlight};" />
    </div>
    <nav>
      <ul
        style="background: {currentTheme.tertiary}; color: {adjustLightness(
          currentTheme.primary,
          -16
        )};"
      >
        <a href="/">
          <li>Browse</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/settings">
          <li>Settings</li>
        </a>
      </ul>
    </nav>
  </div>
  <span
    id="mobile-blurb"
    style="
      background: {currentTheme.quaternary};
      color: {adjustLightness(currentTheme.primary, -16)}
    ">Lamina Llama works best on a widescreen display.</span
  >
</header>

<style>
  header {
    display: flex;
    padding: 0 2rem;
  }
  
  a {
    text-decoration: none;
  }

  h1 {
    width: fit-content;
    margin: 0;
    padding: 0.5rem 1.5rem;
    text-shadow: 0px -6px hsl(205, 19%, 59%);
    background: hsl(205, 19%, 35%);
    color: hsl(203, 45%, 90%);
    font-family: "Nunito", sans-serif;
    font-size: 5.05rem;
    line-height: 4.5rem;
    text-align: left;
  }

  #right {
    display: flex;
    flex-flow: column;
  }

  h2 {
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0.5rem;
    font-family: "Nunito", sans-serif;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  #color-bar {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    height: 3rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: calc(3rem + 2px);
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul > a {
    color: inherit;
  }

  li {
    font-size: 1.1rem;
  }

  #mobile-blurb {
    display: none;
    top: 14rem;
  }

  @media all and (max-width: 600px) {
    header {
      flex-flow: column;
    }

    #mobile-blurb {
      display: block;
      margin-top: 1rem;
      padding: 0.5rem;
      font-family: "Nunito", sans-serif;
      font-size: 1.05rem;
    }
  }
</style>
