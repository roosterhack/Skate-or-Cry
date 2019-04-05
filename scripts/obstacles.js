let timeSprites;
let binSprites;
let crackSprites;
let brickSprites;
let cashSprites;
let blueBarSprites;

class Obstacles {
  constructor() {
    this.binSprites = binSprites;
    this.crackSprites = crackSprites;
    this.brickSprites = brickSprites;
    this.cashSprites = cashSprites;
    this.timeSprites = timeSprites;
    this.blueBarSprites = blueBarSprites;
  }

  setup() {
    this.binSprites = new Group();
    this.crackSprites = new Group();
    this.brickSprites = new Group();
    this.cashSprites = new Group();
    this.timeSprites = new Group();
    this.blueBarSprites = new Group();
  }

  draw() {
    // incentives cash for extra points
    if (random() > 0.99) {
      let cash = createSprite(camera.position.x + width, random(180, height - 160), cashMoney.width, cashMoney.height);
      cash.addImage(cashMoney);
      cash.scale = 2.5;
      this.cashSprites.add(cash);
    }
    let firstTime = this.cashSprites[0];
    if (this.cashSprites.length > 0 && firstTime.position.x <= camera.position.x - (width / 2 + firstTime.width / 2)) {
      removeSprite(firstTime);
    }

    //Bricks
    // if (random() > 0.998) {
    //   let b = createSprite(camera.position.x + width, random(150, height - 150), skullHead.width, skullHead.height);
    //   b.addAnimation('skull',skullHead);
    //   this.brickSprites.add(b);
    // }
    // let firstBrick = this.brickSprites[0];
    // if (
    //   this.brickSprites.length > 0 &&
    //   firstBrick.position.x <= camera.position.x - (width / 2 + firstBrick.width / 2)
    // ) {
    //   removeSprite(firstBrick);
    // }

    // Cones
    if (random() > 0.997) {
      let bin = createSprite(camera.position.x + width, height - 130, 0, 0);
      bin.addImage(binCone);
      bin.scale = 2;
      this.binSprites.add(bin);
    }

    let firstBin = this.binSprites[0];
    if (this.binSprites.length > 0 && firstBin.position.x <= camera.position.x - (width / 2 + firstBin.width / 2)) {
      removeSprite(firstBin);
    }
    //Cracks
    // if (random() > 0.999) {
    //   let crack = createSprite(camera.position.x + width, height - 127, groundCrack.width, groundCrack.height);
    //   crack.addImage(groundCrack);
    //   crack.scale = 2;
    //   this.crackSprites.add(crack);
    // }

    // let firstCrack = this.crackSprites[0];
    // if (
    //   this.crackSprites.length > 0 &&
    //   firstCrack.position.x <= camera.position.x - (width / 2 + firstCrack.width / 2)
    // ) {
    //   removeSprite(firstCrack);
    // }

    //bluebar
    if (random() > 0.998) {
      let blueBars = createSprite(camera.position.x + width, height - 127, blueBar.width, blueBar.height);
      blueBars.addImage(blueBar);
      blueBars.scale = 2;
      this.blueBarSprites.add(blueBars);
    }

    let firstBar = this.blueBarSprites[0];
    if (this.blueBarSprites.length > 0 && firstBar.position.x <= camera.position.x - (width / 2 + firstBar.width / 2)) {
      removeSprite(firstBar);
    }
  }
}
