
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,300);
  monkey=createSprite(250,20,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(250,290,600,10);
  ground.velocityX=-4;
  FoodGroup = new Group();
  obstacleGroup = new Group();
  score=0;
}

function draw() {
  background(255);
  text("Survival Time:"+Math.round(score+frameCount/frameRate()),300,80);
  if(keyDown("space")&&monkey.y>=245){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  if(ground.x<230){
    ground.x=300;
  }
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(500,Math.round(random(120,200)),20,20);
    banana.addImage("banana.png",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=124;
    FoodGroup.add(banana)
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(500,290,20,20);
    obstacle.addImage("obstacle.png",obstacleImage);
    obstacle.scale=0.3;
    obstacle.velocityX=-4;
    obstacle.lifetime=124;
    obstacleGroup.add(obstacle)
  }
}





