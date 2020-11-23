let dim

function updatePosition(entity) {
  entity.x += entity.vx;
  entity.y += entity.vy;
}


function createPlayer() {
  return {
    x: 300,
    y: 300,
    vx: 0,
    vy: 0
  };
}

function applyGravity(entity) {
  entity.vy += 0.2;
}

function applyJump(entity) {
  entity.vy = -5;
}

function drawPlayer(entity) {
  push()
  noStroke()
 fill(random(255),random(255),random(255))
  ellipse(entity.x, entity.y, 60);
  pop()

}



function createBlock(y) {
  return {
    x: 900,
    y,
    vx: -2,
    vy: 0
  };
}

function drawBlock(entity) {
  push()
  noStroke()
  fill("#FFDADA")
  rect(entity.x, entity.y, 80, 300);
  pop()
}

function blockIsAlive(entity) {

  return -100 < entity.x;
}


let player;

let blocks;

function addBlocks() {
  let y = random(-100, 100);
  blocks.push(createBlock(y + 350));
}


 function setup() {
  createCanvas(1200, 800);
   push()
  rectMode(CENTER);


  player = createPlayer();

  blocks = [];
   pop()
}

function draw() {
  if (frameCount % 140 === 1) addBlocks(blocks);
  blocks = blocks.filter(blockIsAlive);


  updatePosition(player);
  for (let block of blocks) updatePosition(block);


  applyGravity(player);

  background("#dbf6e9");
  drawPlayer(player);
  for (let block of blocks) drawBlock(block);
  noStroke()
  fill(220)
  rect(0,500,1200,400)
}

function mousePressed() {

  applyJump(player);


  }
