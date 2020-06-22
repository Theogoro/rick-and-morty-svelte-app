<script>
  import Character from "./Character.svelte";
  import { onMount, onDestroy } from "svelte";
  import { results } from "../stores/store.js";

  let myResults;

  let unsubscribe;
  onMount(
    () =>
      (unsubscribe = results.subscribe(state => {
        myResults = state;
      }))
  );
  onDestroy(async () => {
    if (unsubscribe) unsubscribe();
  });
</script>

<style>
  .Character-Container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
    margin-bottom: 40px;
    transition: 1s;
    justify-content: center;
  }
  .Character-Opacity {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    top: 0px;
    position: fixed;
    opacity: 0;
    transition: 10s;
  }
</style>

<div class="Character-Container">
  {#if myResults}
    {#each myResults as result, index}
      <Character {...result} {index} />
    {/each}
    <div class="Character-Opacity" />
  {:else}
    <p>Loading...</p>
  {/if}
</div>
