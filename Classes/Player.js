class Player {
    constructor(color, pathLength) {
      this.index = 0;
      this.color = color;
      this.moveStartTime = 0;
      this.pathLength = pathLength;
    }
  
    draw(path, cellSize) {
      let pos = path[this.index];
      fill(this.color);
      ellipse(pos.x, pos.y, cellSize * 0.6);
    }
  
    move(stepDuration, moveSteps, moveIndex) {
      if (millis() - this.moveStartTime >= stepDuration) {
        moveIndex = (moveIndex + 1) % this.pathLength;
        this.index = moveIndex;
        this.moveStartTime = millis();
        moveSteps--;
      }
      return { moveSteps, moveIndex };
    }
  }
  