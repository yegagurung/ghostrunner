var frame, knob, spirit, kingdom,spooky;
var tower, ghost, doorgroup, framegroup,invisibleblockgroup,door, climber,block;
var gamestate="play"
function preload() {
  frame=loadImage("climber.png")
  knob=loadImage("door.png")
  spirit=loadImage("ghost-standing.png")
  kingdom=loadImage("tower.png")
  spooky=loadSound("spooky.wav")
}
function setup() {
createCanvas(600,600);
 spooky.loop()
  tower=createSprite(300,300);
  tower.addImage(kingdom);
  tower.velocityY=1;
  ghost=createSprite(200,200,50,50);
  ghost.addImage(spirit);
  ghost.scale=0.5

  doorgroup=new Group()
  framegroup=new Group()
  invisibleblockgroup=new Group()
}
function draw() {
  background("black");
if(gamestate=="play"){
  
  if(tower.y>600) {
    tower.y=300;
  }
    if(keyDown("space")) {
    ghost.velocityY= -5;
  }  
   if(keyDown("right")) {
    ghost.x= ghost.x+5;
  
  }  
  if(keyDown("left")) {
    ghost.x= ghost.x-5;
  
  }  
  ghost.velocityY=ghost.velocityY+0.4;
  drawingadoor()

  if(ghost.isTouching(framegroup)) {
   ghost.velocityY=0
    }
 if(invisibleblockgroup.isTouching(ghost)||ghost.y>600){
   ghost.destroy();
   gamestate="end";
   } 
   drawSprites();
  }
if(gamestate=="end") {
  textSize(20);
  fill("blue");
  text("GAMEOVER",300,300);
  }
  }
function drawingadoor() {
  if(frameCount%200==0) {
    door=createSprite(200,-50);
    door.addImage(knob);
    climber=createSprite(200,10);
    climber.addImage(frame);
    block=createSprite(200,15);
    block.width=climber.width;
    block.height=2;
    door.x=Math.round(random(120,400));
    climber.x=door.x;
    block.x=door.x;
    door.velocityY=1
    block.velocityY=1
    climber.velocityY=1
    door.lifetime=800;
    block.lifetime=800;
    climber.lifetime=800;
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    doorgroup.add(door);
    framegroup.add(climber);  
    invisibleblockgroup.add(block);
    }
    }
