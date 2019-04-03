let isGameOver;
let fontsize = 60;
let score;

class Game {
  constructor() {
    // game properties
    this.obstacles = [];
    this.player = new ThePlayer();
    this.background = new Background();
    this.obstacles = new Obstacles();
    this.score = 0;
  }

  setup() {
    isGameOver = false;
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    this.background.setup();
    this.player.setup();
    this.obstacles.setup();
    this.score = 0;
  }
  draw() {
    if (isGameOver) {
      background(0);
      image(gameOver, 0, 0);
      fill(255);
      textFont(fontRegular);
      textAlign(CENTER);
      text("Your score was: " + this.score + "points", camera.position.x, camera.position.y - 20);
      text("Game Over! Click anywhere to restart", camera.position.x, camera.position.y);
    } else {
      this.obstacles.binSprites.collide(this.player.mainPlayer, endGame);
      this.obstacles.brickSprites.collide(this.player.mainPlayer);
      this.background.draw();
      this.player.draw();
      this.obstacles.draw();
      this.score++;
      fill(250);
      textFont(fontRegular);
      textSize(fontsize);
      textAlign(CENTER);
      text(this.score, camera.position.x, 50);
    }
  }
}

function endGame() {
  isGameOver = true;
}
