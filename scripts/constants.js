const ACCELERATION = 0.3;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 450;
const BGCOLOR = 110;
const GRAVITY = 0.35;
const JUMP = -8;

function preload() {
  fontRegular = loadFont("/assets/fonts/Retro Gaming.ttf");
  gameOver = loadImage("/assets/img/gameOver/gameOver.jpg");
  city2 = loadImage("/assets/img/city1/City2.png");
  city3 = loadImage("/assets/img/city1/City3.png");
  city4 = loadImage("/assets/img/city1/City4.png");
  road1 = loadImage("/assets/img/city1/road-border.png");
  wheelsHydrant = loadImage("/assets/img/city1/wheels-hydrant.png");
  boxesContainer = loadImage("/assets/img/city1/boxes-container.png");
  buildings = loadImage("/assets/img/city1/buildings.png");
  sky = loadImage("/assets/img/city1/sky.png");
  wall1 = loadImage("/assets/img/city1/wall1.png");
  wall2 = loadImage("/assets/img/city1/wall2.png");

  binCone = loadImage("/assets/img/obstacles/cropped/Mask Group cone.png");
  groundCrack = loadImage("/assets/img/obstacles/cropped/Mask Group crack.png");
  brickTile = loadImage("/assets/img/obstacles/brick.png");

  playerPush = loadAnimation(
    "/assets/img/skater/cropped/Mask Group 14.png",
    "/assets/img/skater/cropped/Mask Group 15.png",
    "/assets/img/skater/cropped/Mask Group 16.png",
    "/assets/img/skater/cropped/Mask Group 17.png",
    "/assets/img/skater/cropped/Mask Group 18.png",
    "/assets/img/skater/cropped/Mask Group 19.png",
    "/assets/img/skater/cropped/Mask Group 14.png",
    "/assets/img/skater/cropped/Mask Group 14.png",
    "/assets/img/skater/cropped/Mask Group 14.png"
  );
  playerOllie = loadAnimation(
    "/assets/img/skater/cropped/Mask Group 2.png",
    "/assets/img/skater/cropped/Mask Group 3.png",
    "/assets/img/skater/cropped/Mask Group 4.png",
    "/assets/img/skater/cropped/Mask Group 5.png",
    "/assets/img/skater/cropped/Mask Group 7.png",
    "/assets/img/skater/cropped/Mask Group 6.png",
    "/assets/img/skater/cropped/Mask Group 8.png",
    "/assets/img/skater/cropped/Mask Group 9.png",
    "/assets/img/skater/cropped/Mask Group 10.png"
  );
  playerSlam = loadAnimation(
    "/assets/img/skater/cropped/Mask Group 20.png",
    "/assets/img/skater/cropped/Mask Group 21.png",
    "/assets/img/skater/cropped/Mask Group 22.png",
    "/assets/img/skater/cropped/Mask Group 23.png",
    "/assets/img/skater/cropped/Mask Group 24.png",
    "/assets/img/skater/cropped/Mask Group 25.png"
  );
}
