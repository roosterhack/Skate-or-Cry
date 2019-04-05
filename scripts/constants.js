const ACCELERATION = 0.3;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 450;
const BGCOLOR = 110;
const GRAVITY = 0.35;
let jump = -8;

function preload() {
  pushSound = loadSound("assets/sounds/rolling.mp3");
  ollieSound = loadSound("assets/sounds/ollie.mp3");
  hurtSound = loadSound("assets/sounds/hurt.mp3");
  hipHop1 = loadSound("assets/sounds/oldschoolhiphop.wav");
  hipHop2 = loadSound("assets/sounds/hiphop.wav");
  kaChing = loadSound("assets/sounds/ka-ching.mp3");

  fontRegular = loadFont("assets/fonts/retro gaming.ttf");
  city2 = loadImage("assets/img/city1/city2.png");
  city3 = loadImage("assets/img/city1/city3.png");
  city4 = loadImage("assets/img/city1/city4.png");
  road1 = loadImage("assets/img/city1/road-border.png");
  wheelsHydrant = loadImage("assets/img/city1/wheels-hydrant.png");
  boxesContainer = loadImage("assets/img/city1/boxes-container.png");
  buildings = loadImage("assets/img/city1/buildings.png");
  sky = loadImage("assets/img/city1/sky.png");
  wall1 = loadImage("assets/img/city1/wall1.png");
  wall2 = loadImage("assets/img/city1/wall2.png");

  binCone = loadImage("assets/img/obstacles/cropped/mask group cone.png");
  groundCrack = loadImage("assets/img/obstacles/cropped/mask group crack.png");
  brickTile = loadImage("assets/img/obstacles/brick.png");
  cashMoney = loadImage("assets/img/obstacles/cropped/mask group cash.png");
  clock = loadImage("assets/img/obstacles/cropped/timer sprite 27.svg");
  blueBar = loadImage("assets/img/obstacles/cropped/mask group bluebar.png");

  playerPush = loadAnimation(
    "assets/img/skater/cropped/mask group 14.png",
    "assets/img/skater/cropped/mask group 14.png",
    "assets/img/skater/cropped/mask group 15.png",
    "assets/img/skater/cropped/mask group 16.png",
    "assets/img/skater/cropped/mask group 17.png",
    "assets/img/skater/cropped/mask group 18.png",
    "assets/img/skater/cropped/mask group 19.png",
    "assets/img/skater/cropped/mask group 14.png",
    "assets/img/skater/cropped/mask group 14.png",
    "assets/img/skater/cropped/mask group 14.png",
    "assets/img/skater/cropped/mask group 14.png"
  );
  playerOllie = loadAnimation(
    "assets/img/skater/cropped/mask group 4.png",
    "assets/img/skater/cropped/mask group 3.png",
    "assets/img/skater/cropped/mask group 2.png",
    "assets/img/skater/cropped/mask group 5.png",
    "assets/img/skater/cropped/mask group 7.png",
    "assets/img/skater/cropped/mask group 7.png",
    "assets/img/skater/cropped/mask group 6.png",
    "assets/img/skater/cropped/mask group 8.png",
    "assets/img/skater/cropped/mask group 9.png",
    "assets/img/skater/cropped/mask group 10.png"
  );
  playerFlip = loadAnimation(
    "assets/img/skater/cropped/kickflip/k1.png",
    "assets/img/skater/cropped/kickflip/k2.png",
    "assets/img/skater/cropped/kickflip/k3.png",
    "assets/img/skater/cropped/kickflip/k4.png",
    "assets/img/skater/cropped/kickflip/k4.png",
    "assets/img/skater/cropped/kickflip/k5.png",
    "assets/img/skater/cropped/kickflip/k5.png",
    "assets/img/skater/cropped/kickflip/k6.png",
    "assets/img/skater/cropped/kickflip/k7.png",
    "assets/img/skater/cropped/kickflip/k8.png",
    "assets/img/skater/cropped/kickflip/k9.png"
  );

  skullHead = loadAnimation(
    "assets/img/obstacles/skull/skull1.png",
    "assets/img/obstacles/skull/skull2.png",
    "assets/img/obstacles/skull/skull3.png",
    "assets/img/obstacles/skull/skull4.png"
  );
}
