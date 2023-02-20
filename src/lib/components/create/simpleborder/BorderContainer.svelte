<script lang="ts">
  let innerColor: string = "yellow";
  let outerColor: string = "orange";
  let innerWidth: number = 24;
  let outerWidth: number = 12;
</script>

<div style="background: {outerColor};">
  <div id="outer-rect" style="background: {innerColor}; margin: {outerWidth}px;">
    <div id="inner-rect" style="background: #00cc00; margin: {innerWidth}px;">
      
    </div>
  </div>
</div>

<style>
  div, #outer-rect, #inner-rect {
    width: 100%;
    height: 100%;
  }

  div {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  #outer-rect {
    width: 100%;
    height: 100%;
  }
</style>
