<script>
    import Cell from './Cell.svelte';
    import { createGrid } from '../scripts/game.js';
    export let rows = 5;
    export let cols = 5;
    export let grid
  </script>
  
  <main>
    {#each grid as row}
      <div class="row">
        {#each row as cell}
          <Cell value={cell} />
        {/each}
      </div>
    {/each}
  </main>
  
  <style>
    .row {
      display: flex;
    }
  
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  </style>
  