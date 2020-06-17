<script>
  import { pageIndex, results, maxPage } from "../stores/store.js";
  import { getData } from "../data/getData";
  import { onMount } from "svelte";

  const URL = "https://rickandmortyapi.com/api/character";

  export let text;
  export let change;

  const pageHandle = event => {
    pageIndex.update(n => {
      let changeInt = parseInt(change);
      if (changeInt > 0) {
        if ($maxPage != -1 && n + changeInt > $maxPage) {
          return $maxPage;
        }
      } else {
        if (n + changeInt < 1) return 1;
      }
      return n + changeInt;
    });

    updateData();
  };

  const updateData = () => {
    getData(URL + `?page=${$pageIndex}`).then(json => {
      results.update(() => {
        return json.results;
      });
      $maxPage = json.info.pages;
    });
  };

  onMount(async () => {
    updateData();
  });
</script>

<style>
  .Command-Buttom {
    border: 1px solid;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<div on:click={pageHandle} class="Command-Buttom">{text}</div>
