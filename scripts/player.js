let mainPlayer;
let playerPush;
let moveRight;
let playerOllie;
let playerKickflip;
let acceleration = 1;
let charge = 0.5;

class ThePlayer {
  constructor() {
    this.Jumped = false;
    this.mainPlayer = mainPlayer;
    this.playerOllie = playerOllie;
    this.playerKickflip = playerKickflip;
  }

  setup() {
    this.mainPlayer = createSprite(0, 0, 20, 20);
    this.mainPlayer.addAnimation("push", playerPush);
    this.mainPlayer.addAnimation("ollie", playerOllie);
    this.mainPlayer.addAnimation("flip", playerFlip);
    this.mainPlayer.scale = 2;
    this.mainPlayer.position.y = height - 450;

    hipHop1.loop();
    hipHop1.setVolume(0.6);
  }
  draw() {
    background(BGCOLOR);
    this.mainPlayer.velocity.y += GRAVITY;
    this.mainPlayer.position.x += 5 + acceleration;

    // //detect player touching the ground then make player stop going down
    if (this.mainPlayer.position.y + this.mainPlayer.height >= height - 70) {
      this.mainPlayer.velocity.y = 0;
      this.mainPlayer.changeAnimation("push", playerPush);
      this.Jumped = false;
    }

    if (keyDown(32) && !this.Jumped) {
      if (!ollieSound.isPlaying()) {
        ollieSound.play();
      }
      this.mainPlayer.velocity.y = jump;
      this.mainPlayer.changeAnimation("ollie", playerOllie);

      this.Jumped = true;
    }
    if (keyDown(70) && !this.Jumped) {
      if (!ollieSound.isPlaying()) {
        ollieSound.play();
      }

      this.mainPlayer.velocity.y = jump;
      this.mainPlayer.changeAnimation("flip", playerFlip);

      this.Jumped = true;
    }

    camera.position.x = this.mainPlayer.position.x + width / 3;

    drawSprites();
  }
}
setInterval(function() {
  acceleration += 1;
}, 7000);
