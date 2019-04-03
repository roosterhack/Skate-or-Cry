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
    createCanvas(GAME_WIDTH, GAME_HEIGHT);
    frameRate(60);
    // this.background.setup();
    this.player.setup();
    this.obstacles.setup();
  }
  draw() {
    // this.background.draw();
    this.player.draw();
    this.obstacles.draw();
  }
}
