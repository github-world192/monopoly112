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
  
  // game.js
  import Dice from "./Dice.js";
  import Player from "./Player.js";
  
  let dice = new Dice();
  let players = [];
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 4; i++) {
      players.push(new Player(0, color(random(100, 255), random(100, 255), random(100, 255))));
    }
  }
  
  function draw() {
    background(255);
    dice.update();
    dice.draw(width / 2, height / 2);
    players.forEach(player => player.draw(path, cellSize));
  }
  