let d = 250;
let dtwo = d/2;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(119, 0, 200);
  fill(252, 266, 5);
  noStroke();
  circle(0, 250, d);
  circle(250, 0, d);
  circle(250, 500, d);
  circle(500, 250, d);
  d++;

  if (d > 500) {
    d = 250;
  }

  fill(119, 0, 200);
  noStroke;
  circle(250, 250, dtwo);
  circle(500/4, 375, dtwo);
  circle(375, 375, dtwo);
  circle(500/4, 500/4, dtwo);
  circle(375, 500/4, dtwo);
}
