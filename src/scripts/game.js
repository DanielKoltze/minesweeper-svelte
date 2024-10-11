export function createGrid(rows, cols) {
    const grid = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < cols; colIndex++) {
        row.push(`${rowIndex},${colIndex}`);
      }
      grid.push(row);
    }
    return grid;
}

