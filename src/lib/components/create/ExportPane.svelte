<script type="ts">
  import type { ITheme } from "$lib/data/Themes";
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { adjustLightness } from "$lib/utils/ColorUtils";
  import { quadOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { getQueryStringFromStores } from "$lib/utils/ExportUtils";
  import ActionBtn from "../common/ActionBtn.svelte";

  export let currentTheme: ITheme;
  export let designerPaneWidth: number = 367;
  export let viewParameters: ViewParameter[] = [];

  const onExport = (): void => {
    const queryString: string = getQueryStringFromStores(
      viewParameters.map((viewParameter: ViewParameter) => viewParameter.store)
    );
    console.log(queryString);
  };
</script>

<article
  style="
  background: {currentTheme.primary};
  left: {designerPaneWidth}px;"
  transition:fly={{ duration: 180, easing: quadOut, x: -20 }}
>
  This is where options shall be!<br />
  <ActionBtn
    backgroundColor={adjustLightness(currentTheme.tertiary, -25)}
    clickFunc={() => onExport()}
    {currentTheme}
    text="Export"
  />
</article>

<style>
  article {
    position: relative;
    top: -100px;
    padding: 1rem;
    border-radius: 0 0.3rem 0.3rem 0;
  }
</style>
