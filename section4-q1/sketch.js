let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size =10
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
 size += 50
  if(size > 100){
    size -= 51
  }
  ellipse(width / 2, height / 2, size);
}
