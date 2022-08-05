<script type="ts">
  export let alt: string = "An image";
  export let color: string = "#333";
  export let imgSrc: string =
    "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  export let height: number = 108;
  export let width: number = 192;
</script>

<div style="height: {height}px; background: {color};">
  <img {alt} src={imgSrc} {width} {height} />
</div>

<style>
  div {
    min-width: 192px;
    min-height: 108px;
  }
  
  img {
    margin: 0;
    padding: 0;
  }
</style>
