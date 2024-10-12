const bombPct = 0.20

export function drawGrid(grid) {
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row = [];
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      row.push(`${rowIndex},${colIndex}`);
    }
    grid.push(row);
  }
  return grid;
}

function updateGrid(grid,cell){

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
  arr.forEach( a => {
    const cell = {
      row: rowCount,
      col: colCount,
      value:a,
      visited:false,
      flagged:false
    }
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
  console.log(grid)
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