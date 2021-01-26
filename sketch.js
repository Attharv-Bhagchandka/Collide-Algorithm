var Block1, Block2;

function setup() {
  createCanvas(400,400);

  Block1 = createSprite(200, 200, 50, 50);
  Block1.shapeColor = rgb( 5, 100, 255);

  Block2 = createSprite(50, 500, 50, 50);
  Block2.shapeColor = rgb(142, 68, 173);
}


function draw() {
  background(5,255,200);
  
  Block2.x = mouseX;
  Block2.y = mouseY;

  console.Log(Block1.x - Block2.x)

  drawSprites();
}