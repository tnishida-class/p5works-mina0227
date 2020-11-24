
// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(0,5,58);
  // BLANK[2] (hint: 作った star 関数を使います)
push();
  translate(x,y)
  rotate(frameCount/10)
  translate(-x,-y)
  star(x,y,25)
  pop();
  x += 3
  y += 3
  // 端の処理パターン (1) 反対側から出てくる
   // 速度＝位置の増分
  x += vx;
  y += vy;

  // 跳ね返り
  if(x < 0 || x > width){ vx = -1 * vx; } // 横
  if(y < 0 || y > height){ vy = -1 * vy; } // 縦

  // x座標, y座標を画面内にする
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

}

function star(cx, cy, r, angle){
  fill(255,255,0)
  noStroke()
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
function mouseClicked(){
  x = mouseX;
  y = mouseY;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
