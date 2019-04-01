class Game {
  constructor() {
    // game properties
    this.obstacles = [];
    this.player = new ThePlayer();
    this.gameOver = false;
    this.score = 0;
  }

  setup() {
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(60);
    background(BGCOLOR);
    this.player.setup();
  }
  draw() {
    this.player.draw();
  }
}
