const Engine = Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies
var boy,question,answer,count=0

function preload(){
doorimage=loadImage("image/closed door.png")
boy1=loadAnimation("image/front 1.png","image/front 2.png")
boy2=loadAnimation("image/left 1.png","image/left 2.png")
boy3=loadAnimation("image/Untitled.png","image/right 2.png")



}
function setup() {
  
  createCanvas(displayWidth,displayHeight);
  door1=new Door(displayWidth/4-100,100)
  door2=new Door(displayWidth/2,100)
  door3=new Door(3*displayWidth/4,100)
  boy=createSprite(800,500)
  boy.addAnimation("front",boy1)
  boy.addAnimation("left",boy2)
  boy.addAnimation("right",boy3)
  count=0
}

function draw() {
  background("green");  
  console.log(count)
  door1.display()
  door2.display()
  door3.display()
  if(keyDown("Up_arrow")){
    boy.y=boy.y-3
    boy.changeAnimation("front",boy1)
  }
  if(keyDown("Left_arrow")){
    boy.x=boy.x-3
    boy.changeAnimation("left",boy2)
  }
  if(keyDown("Right_arrow")){
    boy.x=boy.x+3
    boy.changeAnimation("right",boy3)
  }
  if(count===0){
    textSize(20)
  text("Who is the current President of America?",600,50)
  text("1.Donal Trump",260,250)
  text("2.Joe Biden",750, 250)
  text("3.George Washington", 1110,250)
if((boy.x>displayWidth/2-20 && boy.x>displayWidth/2+20)&& (boy.y>80 && boy.y<120)){
  
  text("Correct Answer",750,500)
}
}

  drawSprites();
}


/* 
1.Donal Trump
2.Joe Biden
3.George Washington

*/
 