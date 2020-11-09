// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("Kobe university",255,255,255,0,255,0,30);
}

function balloon(t,a,b,c,x,y,z,u){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//文字の高さ
  let p = u;//余白の大きさ]
  fill(x,y,z)
  rect(0, 0, w + p * 2, h + p * 2);
 fill(a,b,c)
  text(t, p, h + p);
