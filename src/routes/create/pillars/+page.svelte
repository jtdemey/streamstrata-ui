<script lang="ts">
  import { SimpleBorderParameters } from "$lib/data/create/simpleborder/SimpleBorderParameters";
  import ViewDesigner from "$lib/components/create/ViewDesigner.svelte";
  import PillarsApp from "$lib/components/create/pillars/PillarsApp.svelte";
</script>

<ViewDesigner viewParameters={SimpleBorderParameters}>
  <PillarsApp viewParameters={SimpleBorderParameters} />
</ViewDesigner>
