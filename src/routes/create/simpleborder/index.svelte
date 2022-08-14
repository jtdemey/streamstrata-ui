<script type="ts">
  import { SimpleBorderParameters } from "$lib/data/create/simpleborder/SimpleBorderParameters";
  import ViewDesigner from "$lib/components/create/ViewDesigner.svelte";
  import SimpleBorderApp from "$lib/components/create/simpleborder/SimpleBorderApp.svelte";
</script>

<ViewDesigner viewName="simple-border" viewParameters={SimpleBorderParameters}>
  <SimpleBorderApp viewParameters={SimpleBorderParameters} />
</ViewDesigner>
