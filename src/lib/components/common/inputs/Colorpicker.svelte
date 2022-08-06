<script type="ts">
  export let inputName: string = "colorpicker";
  export let label: string = "";
</script>

<div>
  <label for={inputName}>{label}</label><br />
  <input name={inputName} type="color" />
  <input id="text-input" name="{inputName}-text" type="text">
</div>

<style>
  div {
    margin: 1rem 0;
  }

  input {
    width: 80%;
  }

  #text-input {
    width: calc(80% - 0.4rem);
    margin-top: 0.5rem;
    padding: 0.25rem 0.1rem;
  }
</style>
