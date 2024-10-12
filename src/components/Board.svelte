<script>
  import Cell from './Cell.svelte';
  import { updateBoard } from '../scripts/game.js'
	import { createGrid } from "../scripts/game.js";
  let gameLost = false
  export let grid;
  export let cols
  export let rows

	$:{ 
    gameLost = false
    grid = createGrid(rows, cols);
  }

  function handleCellClick(cell) {
    if (gameLost){
      return
    }
    if (cell.value == -1){
      gameLost = true
    }
    updateBoard(grid, cell)
    grid = [...grid]
  }
</script>

<main>
  <div class="grid" style="grid-template-columns: repeat({cols}, 1fr);">
    {#each grid as cell}
      <Cell {cell} onClickCell={() => handleCellClick(cell)} />
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
