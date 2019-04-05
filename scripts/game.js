let isGameOver;
let score;
let extra;

class Game {
  constructor() {
    // game properties
    this.obstacles = [];
    this.player = new ThePlayer();
    this.background = new Background();
    this.obstacles = new Obstacles();
    this.score = score;
    this.extra = extra;
  }

  setup() {
    isGameOver = false;
    frameRate(60);
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    this.background.setup();
    this.player.setup();
    this.obstacles.setup();
    this.score = 0;
    this.extra = 1000;
  }
  draw() {
    if (isGameOver) {
      hipHop1.stop();
      background(0);
      image(gameOver, 0, 0);
      fill(255);
      textFont(fontRegular);
      textAlign(CENTER);
      text("Your score was: " + this.score + "points", camera.position.x, camera.position.y - 20);
      text("Game Over! Click anywhere to restart", camera.position.x, camera.position.y);
    } else {
      this.obstacles.binSprites.collide(this.player.mainPlayer, endGame);
      this.obstacles.crackSprites.collide(this.player.mainPlayer, endGame);
      this.obstacles.brickSprites.collide(this.player.mainPlayer, endGame);
      this.obstacles.cashSprites.overlap(this.player.mainPlayer, extraPoints);
      this.background.draw();
      this.player.draw();
      this.obstacles.draw();
      this.score++;
      fill(250);
      textFont(fontRegular);
      textSize(40);
      textAlign(CENTER);
      text(this.score + " points", camera.position.x, 50);
    }
  }
}

function endGame() {
  hurtSound.play();
  isGameOver = true;
}

function extraPoints(collector, collected) {
  kaChing.play();
  collector.remove();
  Game.score += Game.extra;
}
