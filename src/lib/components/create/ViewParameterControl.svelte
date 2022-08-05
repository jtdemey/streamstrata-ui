<script type="ts">
  import type { ViewParameter } from "$lib/data/types/ViewParameter";
  import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";

  export let viewParameter: ViewParameter;

  const isType = (paramType: ViewParameterTypes): boolean =>
    viewParameter && viewParameter.parameterType === paramType;
</script>

<div>
  {#if isType(ViewParameterTypes.Color)}
    <div>colah</div>
  {/if}

  {#if isType(ViewParameterTypes.Slider)}
    <div>slidah</div>
  {/if}

  {#if isType(ViewParameterTypes.TextInput)}
    <div>textah</div>
  {/if}
</div>
