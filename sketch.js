var brickGroup
var score=0
function preload(){
brickimage=loadImage("images/brick.png")

bgimg=loadImage("images/bgnew.jpg")
marioimg=loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png")
coinimage=loadAnimation("images/con1.png","images/con2.png","images/con3.png","images/con4.png","images/con5.png","images/con6.png",)
coinsound=loadSound("sounds/coinSound.mp3")

}

function setup() {
createCanvas(1000, 600);
bg=createSprite(500,300);
bg.addImage(bgimg)
bg.scale=0.4
bg.velocityX=-5
mario=createSprite(100,430);
mario.addAnimation("running",marioimg)
mario.scale=0.25
ground=createSprite(100,525,300,10)
ground.visible=false;
brickGroup=new Group
coinGroup=new Group



}

function draw(){
background("lightblue")
drawSprites()
if(bg.x<240){
    bg.x=500
}
if(keyDown("up")){
    mario.velocityY=-10
}
mario.velocityY+=0.5
mario.collide(ground)
generateBrick()
generateCoin()
for(i=0;i<coinGroup.length;i++)
{
    var tem=coinGroup.get(i);//acessing every worm
    if(mario.isTouching(tem))// checking whether our player sprite is touching or not
    {
      coinsound.play()
      score++
      tem.destroy()
    }
  }
  fill("black")
  textSize(50)
  text(" score "+score,300,100)

}

function generateBrick()
 {
  if(frameCount%50==0){
    brick=createSprite(1100,random(150,350),45,10)
    brick.velocityX=-5
    brick.lifetime=300
    brick.addImage(brickimage)
    brickGroup.add(brick);
    brick.scale=0.5
  }
  
 }
 function generateCoin()
 {
  if(frameCount%50==0){
    coin=createSprite(1100,random(150,350),45,10)
    coin.velocityX=-5
    coin.lifetime=300
    coin.addAnimation("rotating",coinimage)
    coinGroup.add(coin);
    coin.scale=0.1
  }
  
 }


