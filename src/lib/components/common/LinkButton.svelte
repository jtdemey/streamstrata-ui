<script lang="ts">
  export let color: string = "hsl(205, 19%, 59%)";
  export let href: string = "/";
  export let text: string = "";
</script>

<div>
  <a {href}>
    <div id="btn" style="background: {color};">
      <li>{text}</li>
    </div>
  </a>
</div>

<style>
  a {
    color: hsl(45, 32%, 77%);
    text-decoration: none;
  }

  #btn {
    margin: 1rem 0;
    padding: 0.6rem;
    color: hsl(45, 32%, 77%);
    font-family: "Nunito", sans-serif;
    font-size: 1.05rem;
  }
</style>
