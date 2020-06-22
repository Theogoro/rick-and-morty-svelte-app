<script>
  console.log($$props);
  export let name;
  export let image;
</script>

<style>
  .Character {
    background-size: 100% 100%;
    transition: 0.5s;
    animation: fade 0.5s;
    cursor: pointer;
    border-radius: 10px;
  }

  .Character:hover {
    transform: scale(1.1);
    z-index: 5;
  }
  .Character:hover ~ :global(.Character-Opacity) {
    z-index: 1;
    opacity: 1;
    display: block;
  }
  .Character:hover p {
    opacity: 1;
  }

  p {
    transition: 1s;
    opacity: 0;
    margin: 95% auto;
    margin-bottom: 0;
    width: auto;
    font-size: 30px;
    text-align: center;
    background-color: white;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

<div class="Character" style={`background-image: url(${image})`}>
  <p>{name}</p>
</div>
