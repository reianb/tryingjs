let d = 250;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(119, 0, 200);
  fill(252, 266, 5);
  circle(0, 250, d);
  circle(250, 0, d);
  circle(250, 500, d);
  circle(500, 250, d);
  d++;

  if (d > 500) {
    d = 250;
  }
}
