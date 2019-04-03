let benchSprites;
let binSprites;
let crackSprites;
let brickSprites;

class Obstacles {
  constructor() {}

  setup() {
    binSprites = new Group();
    crackSprites = new Group();
    brickSprites = new Group();
  }

  draw() {
    if (random() > 0.997) {
      let b = createSprite(camera.position.x + width, random(150, height - 176), random(10, 350), brickTile.height);
      b.addImage(brickTile);
      brickSprites.add(b);
    }
    let firstBrick = brickSprites[0];
    if (brickSprites.length > 0 && firstBrick.position.x <= camera.position.x - (width / 2 + firstBrick.width / 2)) {
      removeSprite(firstBrick);
    }

    // Cones
    if (random() > 0.995) {
      let bin = createSprite(camera.position.x + width, height - 176, 40, 40);
      bin.addImage(binCone);
      bin.scale = 2;
      binSprites.add(bin);
    }
    //Cones
    let firstBin = binSprites[0];
    if (binSprites.length > 0 && firstBin.position.x <= camera.position.x - (width / 2 + firstBin.width / 2)) {
      removeSprite(firstBin);
    }

    //Cracks
    if (random() > 0.998) {
      let crack = createSprite(camera.position.x + width, height - 160, groundCrack.width, groundCrack.height);
      crack.addImage(groundCrack);
      crack.scale = 2;
      crackSprites.add(crack);
    }
    //Cracks
    let firstCrack = crackSprites[0];
    if (crackSprites.length > 0 && firstCrack.position.x <= camera.position.x - (width / 2 + firstCrack.width / 2)) {
      removeSprite(firstCrack);
    }
  }
}

class Brick {
  constructor(x, y) {
    this.width = brickTile.width;
    this.height = brickTile.height;
  }
  setup() {}
  draw() {}
}
