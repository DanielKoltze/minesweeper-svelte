const bombPct = 0.10


export function updateBoard(grid,cell){
  if(cell.flagged){
    return grid
  }
  grid[cell.index].visited = true
  return grid
}





export function createGrid(rows, cols) {
  let amountOfBombs = Math.floor(rows * cols * bombPct);
  let amountOfNotBombs = (Math.floor(rows) * Math.floor(cols)) - amountOfBombs;
  let arr = new Array(amountOfNotBombs).fill(0)
  arr.push(...Array(amountOfBombs).fill(-1))
  arr = shuffleArray(arr)
  const grid = []
  let rowCount = 0
  let colCount = 0
  let index = 0
  arr.forEach( a => {
    const cell = {
      row: rowCount,
      col: colCount,
      value:a,
      visited:false,
      flagged:false,
      index:index
    }
    index+=1
    rowCount +=1
    if (rowCount == rows){
      rowCount =0
      colCount +=1
    }
    grid.push(cell)
  })
  grid.forEach(cell =>{
    cell.value = findCellValue(grid,cell)
  })
  return grid;
}


function findCellValue(grid,cell){
  if(cell.value == -1){
    return -1
  }
  let value = 0
  value += findBomb(grid, cell.row-1, cell.col-1)
  value += findBomb(grid, cell.row, cell.col-1)
  value += findBomb(grid, cell.row+1, cell.col-1)
  value += findBomb(grid, cell.row-1, cell.col)
  value += findBomb(grid, cell.row+1, cell.col)
  value += findBomb(grid, cell.row-1, cell.col+1)
  value += findBomb(grid, cell.row, cell.col+1)
  value += findBomb(grid, cell.row+1, cell.col+1)
  return value
  
}
function findBomb(grid,_row,_col){
  const cell = grid.find(cell => {
    return cell.row === _row && cell.col === _col
  })
  if(cell == undefined){
    return 0
  }
  if (cell.value == -1){
    return 1
  }else{
    return 0
  }
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}