  export default class Player {
    constructor(index, color) {
      this.index = index;
      this.color = color;
      this.moveStartTime = 0;
    }
  
    updatePosition(path, moveIndex) {
      this.index = moveIndex;
    }
  
    draw(path, cellSize) {
      let pos = path[this.index];
      fill(this.color);
      ellipse(pos.x, pos.y, cellSize * 0.6);
    }
  }
  