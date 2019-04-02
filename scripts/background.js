let groundSprites;
let buildingSprites;
let skySprites;
let wheelHydrantSprites;
let boxesContainerSprites;
let wall1Sprites;
let wall2Sprites;

function preload() {
  road1 = loadImage("/assets/img/resized/road-border.png");
  wheelsHydrant = loadImage("/assets/img/resized/wheels-hydrant.png");
  boxesContainer = loadImage("/assets/img/resized/boxes-container.png");
  buildings = loadImage("/assets/img/resized/buildings.png");
  sky = loadImage("/assets/img/resized/sky.png");
  wall1 = loadImage("/assets/img/resized/wall1.png");
  wall2 = loadImage("/assets/img/resized/wall2.png");
}

class Background {
  constructor() {}
  setup() {
    groundSprites = new Group();
    buildingSprites = new Group();
    skySprites = new Group();
    wall1Sprites = new Group();
    wall2Sprites = new Group();
    wheelHydrantSprites = new Group();
    boxesContainerSprites = new Group();

    for (let n = 0; n < 50; n++) {
      let skySprites = createSprite(n * width, 220, width, height);
      let buildingSprites = createSprite(n * width, 215, width, height);
      let wall2Sprites = createSprite(n * width, 200, width, height);
      let wall1Sprites = createSprite(n * width, 220, width, height);
      let boxesContainerSprites = createSprite(n * width, 240, boxesContainer.width, boxesContainer.height);
      let wheelHydrantSprites = createSprite(n * width, 210, wheelsHydrant.width, wheelsHydrant.height);
      let groundSprites = createSprite(n * width, 225, width, road1.height);

      skySprites.addImage(sky);
      buildingSprites.addImage(buildings);
      wall2Sprites.addImage(wall2);
      wall1Sprites.addImage(wall1);
      boxesContainerSprites.addImage(boxesContainer);
      wheelHydrantSprites.addImage(wheelsHydrant);
      groundSprites.addImage(road1);
    }
  }

  draw() {
    drawSprites();
  }
}
