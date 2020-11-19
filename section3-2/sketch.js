function setup(){
  createCanvas(300, 100);
  background(200);
  fill(0);
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  star(250, 50, 40);
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 9; i++){
    let theta = TWO_PI * i  / 9 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
