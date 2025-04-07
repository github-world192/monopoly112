class Dice {
    constructor() {
      this.diceRoll = 1;
      this.rolling = false;
      this.rollStartTime = 0;
      this.rollDuration = 1000;
    }
  
    startRoll() {
      this.rolling = true;
      this.rollStartTime = millis();
    }
  
    updateRoll() {
      if (this.rolling) {
        let elapsed = millis() - this.rollStartTime;
        if (elapsed < this.rollDuration) {
          this.diceRoll = floor(random(1, 7));
        } else {
          this.rolling = false;
        }
      }
    }
  
    draw(x, y) {
      fill(255);
      stroke(0);
      strokeWeight(4);
      rectMode(CENTER);
      rect(x, y, 80, 80, 10);
  
      fill(0);
      noStroke();
      textSize(32);
      textAlign(CENTER, CENTER);
      text(this.diceRoll, x, y);
    }
  }
  