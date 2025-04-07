let board, players = [], dice;
let currentPlayer = 0;
let moving = false, moveSteps = 0, moveIndex = 0;
let bgm, bgmStarted = false;

function preload() {
  dice = new Dice();
  board = new Board(13, 13);
  board.preload();
  bgm = loadSound('../sound_effects/game_bgm.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  board.resize();

  for (let i = 0; i < 4; i++) {
    players.push(new Player(color(random(100, 255), random(100, 255), random(100, 255)), board.path.length));
  }

  bgm.loop();
}

function draw() {
  board.draw(currentPlayer, players, dice.rolling);

  for (let player of players) {
    player.draw(board.path, board.cellSize);
  }

  if (moving) {
    let player = players[currentPlayer];
    let result = player.move(200, moveSteps, moveIndex);
    moveSteps = result.moveSteps;
    moveIndex = result.moveIndex;

    if (moveSteps <= 0) {
      moving = false;
      currentPlayer = (currentPlayer + 1) % players.length;
    }
  }

  fill(0);
  textSize(windowWidth * 0.05);
  textAlign(LEFT, TOP);
  text(`Now it's player ${currentPlayer + 1}'s turn`, 20, 20);
  fill(players[currentPlayer].color);
  noStroke();
  ellipse(width / 2, 50, 30, 30);

  dice.updateRoll();
  dice.draw(width / 2, height / 2);
}

function mousePressed() {
  if (!dice.rolling && !moving) {
    dice.startRoll();
    setTimeout(() => {
      let finalRoll = floor(random(1, 7));
      dice.diceRoll = finalRoll;
      moveSteps = finalRoll;
      moveIndex = players[currentPlayer].index;
      moving = true;
      players[currentPlayer].moveStartTime = millis();
    }, dice.rollDuration);
  }

  if (!bgmStarted) {
    userStartAudio();
    bgm.loop();
    bgmStarted = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  board.resize();
}
