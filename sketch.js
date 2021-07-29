var road,roadImage
var boy,runnerboy
var invisibleside2,invisibleside1

function preload(){
//pre-load images
   roadImage = loadImage("path.png")
   runnerboy = loadAnimation("runner-1.png","runner-2.png");
  
  
   
   
}

function setup(){
  createCanvas(350,600);
  
//creating invisiblesides
  invisibleside1= createSprite(370,300,90,600)
 //invisibleside1.visible=false
 invisibleside2= createSprite(10,300,60,600)
//invisibleside2.visible=false
//creating road 
  road =createSprite(175,300,350,400);
  road.addImage(roadImage)
   road.velocityY=+5;

//creating sprite boy
   boy = createSprite(190,500,20,50);
   boy.addAnimation("running", runnerboy);
   boy.scale = 0.05  
   
  


}

function draw() {
  //background(180);
 
  
if(road.y > 400){
   road.y=road.width/2
 }
// to move boy
  boy.x=World.mouseX;
//  to collide
  
  boy.collide(invisibleside1)
  boy.collide(invisibleside2)

  
  drawSprites();
}


