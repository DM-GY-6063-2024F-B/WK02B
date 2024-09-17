function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 10, 120);

  angleMode(DEGREES);

  // default everything
  rect(50, 100, 200, 100);

  // modify fill and canvas
  push();
  fill(255, 120, 0);
  translate(300, 100);
  rotate(15);
  rect(0, 0, 200, 100);
  pop();

  // default everything
  rect(550, 100, 200, 100);
}

function draw() {
}
