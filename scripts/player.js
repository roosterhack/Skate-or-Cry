class ThePlayer {
  constructor() {
    this.Jumped = false;
  }

  setup() {
    this.player = createSprite(100, height - 50, 50, 50);
  }
  draw() {
    background(BGCOLOR);
    this.player.velocity.y += GRAVITY;

    //detect player touching the  ground then make player stop going down
    if (this.player.position.y + this.player.height >= height) {
      this.player.velocity.y = 0;
      this.Jumped = false;
    }

    if (keyDown(RIGHT_ARROW)) {
      this.player.position.x += 5;
      if (keyDown(32) && !this.Jumped) {
        this.player.velocity.y = JUMP;
        this.Jumped = true;
      }
      background(BGCOLOR);
    } else if (keyDown(LEFT_ARROW)) {
      this.player.position.x -= 5;
      if (keyDown(32) && !this.Jumped) {
        this.player.velocity.y = JUMP;
        this.Jumped = true;
      }
      background(BGCOLOR);
    } else if (keyDown(32) && !this.Jumped) {
      this.player.velocity.y = JUMP;
      this.Jumped = true;
    }

    camera.position.x = this.player.position.x + width / 3;

    drawSprites();
  }
}
