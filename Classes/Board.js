// Board.js
export default class Board {
    constructor(rows, cols, gridSize) {
      this.rows = rows;
      this.cols = cols;
      this.gridSize = gridSize;
      this.cellSize = this.gridSize / max(this.rows, this.cols);
      this.marginX = (width - this.gridSize) / 2;
      this.marginY = (height - this.gridSize) / 2;
      this.path = [];
      this.calculatePath();
    }
  
    calculatePath() {
      for (let i = 0; i < this.cols; i++) this.path.push({ x: this.marginX + i * this.cellSize, y: this.marginY });
      for (let i = 1; i < this.rows; i++) this.path.push({ x: this.marginX + (this.cols - 1) * this.cellSize, y: this.marginY + i * this.cellSize });
      for (let i = this.cols - 2; i >= 0; i--) this.path.push({ x: this.marginX + i * this.cellSize, y: this.marginY + (this.rows - 1) * this.cellSize });
      for (let i = this.rows - 2; i > 0; i--) this.path.push({ x: this.marginX, y: this.marginY + i * this.cellSize });
    }
  }
  