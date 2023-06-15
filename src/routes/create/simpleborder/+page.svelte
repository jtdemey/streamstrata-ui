<script lang="ts">
  import { SimpleBorderParameters } from "$lib/data/create/simpleborder/SimpleBorderParameters";
  import ViewDesigner from "$lib/components/create/ViewDesigner.svelte";
  import SimpleBorderApp from "$lib/components/create/simpleborder/SimpleBorderApp.svelte";

  export let data: any;
</script>

<ViewDesigner {data} viewParameters={SimpleBorderParameters}>
  <SimpleBorderApp viewParameters={SimpleBorderParameters} />
</ViewDesigner>
