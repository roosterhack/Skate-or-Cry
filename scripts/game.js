class Game {
  constructor() {
    // game properties
    this.obstacles = [];
    this.player = new ThePlayer();
    this.background = new Background();
    this.gameOver = false;
    this.score = 0;
  }

  setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(60);
    background(0);
    this.background.setup();
    this.player.setup();
  }
  draw() {
    this.background.draw();
    this.player.draw();
  }
}
