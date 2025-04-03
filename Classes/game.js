import Dice from "./Dice.js";
import Player from "./Player.js";
import Board from "./Board.js";



class Game {

  constructor() {
    this.dice = new Dice();
    this.players = [];
    this.board = null;
    this.currentPlayer = 0;
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    this.board = new Board(13, 13, min(width, height) * 0.8);
    
    for (let i = 0; i < 4; i++) {
      this.players.push(new Player(0, color(random(100, 255), random(100, 255), random(100, 255))));
    }
  }

  draw() {
    background(255);
    this.dice.update();
    this.dice.draw(width / 2, height / 2);
    this.players.forEach(player => {
      player.update(this.board.path);
      player.draw(this.board.path, this.board.cellSize);
    });
  }

  rollDice() {
    this.dice.roll();
    setTimeout(() => {
      let steps = this.dice.getRollResult();
      this.players[this.currentPlayer].move(steps, this.board.path);
      this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }, this.dice.rollDuration);
  }
}

let game = new Game();

function setup() {
  game.setup();
}

function draw() {
  game.draw();
}

function mousePressed() {
  game.rollDice();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  game.setup();
}
