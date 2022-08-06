<script type="ts">
  export let inputName: string = "slider";
  export let label: string = "";
</script>

<div>
  <label for={inputName}>{label}</label>
  <input name={inputName} type="range" />
</div>
