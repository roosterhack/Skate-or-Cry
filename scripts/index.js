const game = new Game();

function setup() {
  game.setup();
}

function draw() {
  game.draw();
}

function mousePressed() {
  if (isGameOver) {
    document.querySelector("canvas").addEventListener("click", function() {
      location.reload();
    });
  }
}
