class Board {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.gridSize = 0;
      this.cellSize = 0;
      this.marginX = 0;
      this.marginY = 0;
      this.path = [];
      this.bgImg = null;
    }
  
    preload() {
      this.bgImg = loadImage('../images/background.jpg');
    }
  
    resize() {
      this.gridSize = min(width, height) * 0.8;
      this.cellSize = this.gridSize / max(this.rows, this.cols);
      this.marginX = (width - this.gridSize) / 2;
      this.marginY = (height - this.gridSize) / 2;
      this.calculatePath();
    }
  
    calculatePath() {
      this.path = [];
      for (let i = 0; i < this.cols; i++) this.path.push({ x: this.marginX + i * this.cellSize, y: this.marginY });
      for (let i = 1; i < this.rows; i++) this.path.push({ x: this.marginX + (this.cols - 1) * this.cellSize, y: this.marginY + i * this.cellSize });
      for (let i = this.cols - 2; i >= 0; i--) this.path.push({ x: this.marginX + i * this.cellSize, y: this.marginY + (this.rows - 1) * this.cellSize });
      for (let i = this.rows - 2; i > 0; i--) this.path.push({ x: this.marginX, y: this.marginY + i * this.cellSize });
    }
  
    draw(currentPlayerIndex, players, rolling) {
      background(255);
      image(this.bgImg, 0, 0, width, height);
      tint(255, 120);
  
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let x = this.marginX + i * this.cellSize;
          let y = this.marginY + j * this.cellSize;
  
          if (i == 0 || i == this.rows - 1 || j == 0 || j == this.cols - 1) {
            fill(0, 0, 0, 255);
            rect(x, y, this.cellSize, this.cellSize);
          }
  
          if (!rolling) {
            let currentPlayerPos = this.path[players[currentPlayerIndex].index];
            if (abs(x - currentPlayerPos.x) < 1 && abs(y - currentPlayerPos.y) < 1) {
              fill(255, 0, 0, 150);
              rect(currentPlayerPos.x, currentPlayerPos.y, this.cellSize, this.cellSize);
            }
          }
        }
      }
    }
  }
  