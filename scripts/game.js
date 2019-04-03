let isGameOver;
class Game {
  constructor() {
    // game properties
    this.obstacles = [];
    this.player = new ThePlayer();
    this.background = new Background();
    this.obstacles = new Obstacles();
    this.gameOver = false;
    this.score = 0;
  }

  setup() {
    isGameOver = false;
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(60);
    this.background.setup();
    this.player.setup();
    this.obstacles.setup();
  }
  draw() {
    if (isGameOver) {
    } else {
      this.obstacles.binSprites.collide(this.player.mainPlayer, endGame);
      this.background.draw();
      this.player.draw();
      this.obstacles.draw();
    }
  }
}

function endGame() {
  isGameOver = true;
}

function mouseClicked() {
  if (isGameOver) {
    if (keyDown(16)) {
      this.obstacles.binSprites.remveSprites();
      this.obstacles.crackSprites.removeSprites();
      this.obstacles.brickSprites.removeSprites();
      isGameOver = false;
    }
  }
}
