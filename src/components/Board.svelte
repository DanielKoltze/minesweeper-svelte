<script>
  import Cell from './Cell.svelte';
  export let grid;
  export let size; 
  

</script>

<main>
  <div class="grid" style="grid-template-columns: repeat({size}, 1fr);">
    {#each grid as cell}
      <Cell {cell}/>
    {/each}
  </div>
</main>

<style>
  .grid {
    display: grid;
    gap: 2px;
  }

  .cell {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }

  main {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>
