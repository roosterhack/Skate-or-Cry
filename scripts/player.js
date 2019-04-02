let mainPlayer;
let playerPush;
let moveRight;
let playerOllie;
let playerKickflip;

class ThePlayer {
  constructor() {
    this.Jumped = false;
  }

  setup() {
    mainPlayer = createSprite();
    mainPlayer.addAnimation("push", playerPush);
    mainPlayer.addAnimation("ollie", playerOllie);
    mainPlayer.scale = 2;
    mainPlayer.position.y = height - 200;
  }
  draw() {
    background(BGCOLOR);
    mainPlayer.velocity.y += GRAVITY;
    mainPlayer.position.x += 5;

    // //detect player touching the ground then make player stop going down
    if (mainPlayer.position.y + mainPlayer.height >= height) {
      mainPlayer.velocity.y = 0;
      mainPlayer.changeAnimation("push", playerPush);
      this.Jumped = false;
    }

    // if (keyDown(RIGHT_ARROW)) {
    // if (keyDown(16) && !this.Jumped) {
    //   mainPlayer.changeAnimation("ollie", playerOllie);
    //   mainPlayer.velocity.y = JUMP;
    //   this.Jumped = true;
    // }
    // mainPlayer.changeAnimation("push", playerPush);
    // } else if (keyDown(LEFT_ARROW)) {
    //   mainPlayer.position.x -= 5;
    //   if (keyDown(32) && !this.Jumped) {
    //     mainPlayer.velocity.y = JUMP;
    //     this.Jumped = true;
    //   }
    if (keyDown(16) && !this.Jumped) {
      mainPlayer.velocity.y = JUMP;
      mainPlayer.changeAnimation("ollie", playerOllie);
      this.Jumped = true;
    }

    camera.position.x = mainPlayer.position.x + width / 3;

    drawSprites();
  }
}
