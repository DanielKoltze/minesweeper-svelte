<script>
    export let cell;
  
  </script>
  
  <div class="cell">
    {#if !cell.visited}
    <p>{cell.value}</p>
    
    {:else if cell.value === -1}
    <img src="../img/bomb.png" alt="Bombe" width="20" height="20">
    {:else}
      <p>{cell.value}</p>
    {/if}
  </div>
  <style>
    .cell {
      width: 30px;
      height: 30px; 
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      background-color: blue;
      margin: 2px;
      color: white;
    }
    .cell:hover {
      background-color: lightblue;
      cursor: pointer;
    }
  </style>