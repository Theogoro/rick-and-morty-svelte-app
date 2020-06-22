<script>
  import CommandButtom from "../components/CommandButton.svelte";
  import Info from "../components/Info.svelte";
  import CharacterContainer from "../components/CharacterContainer.svelte";
  import { maxPage, pageIndex } from "../stores/store.js";
</script>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;
  }
</style>

<div class="App">
  <nav>
    <CommandButtom change="-5" text="<< -5" />
    <CommandButtom change="-1" text="<< Anterior" />
    {#if $maxPage != -1}
      <p>{$pageIndex}/{$maxPage}</p>
    {/if}
    <CommandButtom change="1" text="Siguiente >>" />
    <CommandButtom change="5" text="+5 >>" />
  </nav>
  <CharacterContainer />
  <Info />
</div>
