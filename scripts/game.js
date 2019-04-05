let isGameOver;
let score;
let extra;
let extraText;

class Game {
  constructor() {
    // game properties
    this.obstacles = [];
    this.player = new ThePlayer();
    this.background = new Background();
    this.obstacles = new Obstacles();
    this.score = score;
    this.extra = extra;
    this.extraText = extraText;
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
    this.extraText = createElement("h3", `+${this.extra}`);
    this.extraText.addClass("extraPoints");
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
      this.obstacles.blueBarSprites.collide(this.player.mainPlayer, endGame);
      this.obstacles.brickSprites.collide(this.player.mainPlayer, endGame);
      this.obstacles.cashSprites.overlap(this.player.mainPlayer, this.extraPoints.bind(this));
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
  extraPoints(collector) {
    kaChing.play();
    collector.remove();
    this.score += this.extra;
    this.extraText.addClass("show");
    setTimeout(() => {
      this.extraText.removeClass("show");
    }, 300);
  }
}

function endGame() {
  hurtSound.play();
  isGameOver = true;
}
