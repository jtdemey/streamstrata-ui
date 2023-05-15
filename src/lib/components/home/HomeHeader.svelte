<script lang="ts">
  import type { ITheme } from "$lib/data/Themes";
  import { selectedTheme } from "$lib/stores/UIStores";
  import { adjustLightness } from "$lib/utils/ColorUtils";
  import { getTheme } from "$lib/utils/ThemeUtils";

  export let currentTheme: ITheme = getTheme($selectedTheme);
</script>

<header>
  <a href="/">
    <h1
      style="
        color: {currentTheme.highlight}
      "
    >
      streamstrata
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
          -8
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
    ">Streamstrata is designed for a widescreen display.</span
  >
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
  }

  a {
    text-decoration: none;
  }

  h1 {
    width: fit-content;
    margin: 0;
    padding: 1.85rem;
    text-shadow: 0px 3px hsl(205, 19%, 59%);
    border-radius: 1rem;
    color: hsl(203, 45%, 90%);
    font-family: "Nunito", sans-serif;
    font-size: 5.05rem;
    text-align: left;
  }

  #right {
    display: flex;
    flex-flow: column;
  }

  h2 {
    width: calc(100% - 1rem);
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

    h1 {
      padding: 1rem 0;
      font-size: 3rem;
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
