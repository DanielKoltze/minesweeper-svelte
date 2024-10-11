<script>
    export let value;
  </script>
  
  <div class="cell">
    {value}
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
    }
    .cell:hover {
      background-color: lightblue;
      
    }
  </style>