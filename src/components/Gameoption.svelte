<script>
    export let cols
    export let rows
    export let onSelect
</script>
  
  <main>
    <p class="button" on:click={() => onSelect(cols,rows)}>{cols}X{rows}</p>
  </main>
  
  <style>
    main {
      display: flex;
      justify-content: center; 
      align-items: center; 
    }
  
    .button {
      color: white;
      background-color: blue;

      font-size: 20px;
      padding: 10px 25px; 
      border: none; 
      border-radius: 5px; 
      cursor: pointer; 
      transition: background-color 0.3s;
    }
  
    .button:hover {
      background-color: darkblue;
    }
  </style>
  