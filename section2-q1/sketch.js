// 小手調べ
function setup(){
  createCanvas(400,400);
  fill(0);
  for(let i = 0; i < 10; i++){
    let x=20*i;
    if(i<5){
    stroke(0,0,255);
    noFill(0)
    ellipse(200,200,x+10);
    }
    else{
    stroke(255,0,0);
    ellipse(200,200,x+10)
    }
  }
}
