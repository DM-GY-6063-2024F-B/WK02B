function face(x, y, sx, sy) {
  sx = sx || 50;
  sy = sy || sx;
  push();
  translate(x, y);
  scale(sx / 50, sy / 50);
  strokeWeight(100 / (sx + sy));
  ellipse(0, 0, 50);
  ellipse(-10, -10, 8);
  ellipse(10, -10, 12);
  fill(220, 20, 20);
  ellipse(0, 8, 10, 15);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  background(200, 220, 255);

  face(62, 100, 25);
  face(100, 100, 50);
  face(175, 100, 100);
  face(300, 100, 150);
  face(500, 100, 250);

  push();
  translate(825, 100);
  rotate(145);
  face(0, 0, 400);
  pop();
}

function __setup2() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  background(200, 220, 255);

  push();
  rectMode(CENTER);
  translate(75, 130);
  rotate(0);
  rect(0, 0, 130, 60);
  ellipse(-10, 0, 10, 10);
  ellipse(10, 0, 10, 10);
  noFill();
  arc(0, 10, 40, 20, 0, 180);
  pop();

  push();
  rectMode(CENTER);
  translate(140+75, 130);
  rotate(30);
  rect(0, 0, 130, 60);
  ellipse(-10, 0, 10, 10);
  ellipse(10, 0, 10, 10);
  noFill();
  arc(0, 10, 40, 20, 0, 180);
  pop();

  push();
  rectMode(CENTER);
  translate(2*140+75, 130);
  rotate(45);
  rect(0, 0, 130, 60);
  ellipse(0, 0, 10, 10);
  pop();

  push();
  rectMode(CENTER);
  translate(3*140+75, 130);
  rotate(60);
  rect(0, 0, 130, 60);
  ellipse(0, 0, 10, 10);
  pop();

  push();
  rectMode(CENTER);
  translate(4*140+75, 130);
  rotate(90);
  rect(0, 0, 130, 60);
  ellipse(-10, 0, 10, 10);
  ellipse(10, 0, 10, 10);
  noFill();
  arc(0, 10, 40, 20, 0, 180);
  pop();

  push();
  rectMode(CENTER);
  translate(5*140+75, 130);
  rotate(90+45);
  rect(0, 0, 130, 60);
  ellipse(0, 0, 10, 10);
  pop();

  push();
  rectMode(CENTER);
  translate(6*140+75, 130);
  rotate(180);
  rect(0, 0, 130, 60);
  ellipse(0, 0, 10, 10);
  pop();
}

function __setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 220, 255);

  push();
  ellipseMode(CORNER);
  fill(250, 150, 10);
  rect(10, 10, 100);
  pop();

  push();
  stroke(10, 10, 90);
  fill(220, 20, 20);
  rect(200, 200, 100);
  ellipse(200, 200, 100);
  pop();

  push();
  rectMode(CENTER);
  strokeWeight(4);

  fill(220, 20, 120);
  rect(400, 400, 100);

  fill(20, 120, 220);
  ellipse(400, 400, 90);
  pop();

  rect(500, 500, 140, 100);
  ellipse(500, 500, 100, 120);
}

function draw() {
}
